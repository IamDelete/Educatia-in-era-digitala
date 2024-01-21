const correctAudio = document.getElementById('correctAudio');
    const wrongAudio = document.getElementById('wrongAudio');
    
    function correctSfx() {
      correctAudio.play();
    }
    
    function wrongSfx() {
      wrongAudio.play();
    }

let selectedBox = null;
    let correctConnections = ['1:b', '3:a', '2:d', '4:c'];

    // Add click event listeners to all game boxes
    const gameBoxes = document.querySelectorAll('.gameBox');
    gameBoxes.forEach(box => {
      box.addEventListener('click', handleBoxClick);
    });

    function handleBoxClick(event) {
      const clickedBox = event.target;

      if (!selectedBox) {
        // If no box is selected, select the clicked box
        selectedBox = clickedBox;
        selectedBox.classList.add('selected');
      } else {
        // If a box is already selected, check for correctness
        if (clickedBox.parentElement !== selectedBox.parentElement) {
          // Check if the boxes are from different columns
          const connectionAttempt = `${selectedBox.id}:${clickedBox.id}`;
          
          if (correctConnections.includes(connectionAttempt)) {
            // Check if the connection is correct
            selectedBox.classList.add('gameCorrect');
            clickedBox.classList.add('gameCorrect');
            selectedBox.classList.remove('gameIncorrect');
            clickedBox.classList.remove('gameIncorrect');
            correctSfx();
          } else {
            // If the connection is incorrect, show an error
            selectedBox.classList.add('gameIncorrect');
            clickedBox.classList.add('gameIncorrect');
            selectedBox.classList.remove('gameCorrect');
            clickedBox.classList.remove('gameCorrect');
            wrongSfx();
          }

          // Reset selected boxes
          selectedBox.classList.remove('selected');
          selectedBox = null;
        } else {
          // If the boxes are from the same column, show an error
          // Reset selected boxes
          selectedBox.classList.remove('selected');
          selectedBox = null;
        }
      }
    }