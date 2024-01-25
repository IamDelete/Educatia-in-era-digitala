const image = document.getElementById('headImg');
const title = document.getElementById('titleContainer');
const subTitle = document.getElementById('welcome');

title.style.transition = 'all .4s ease-in-out';
subTitle.style.transition = title.style.transition;

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = scrollTop / maxScroll;
  const translateY = scrollPercentage * 180;
  image.style.transform = `translateY(${translateY}%)`;

});