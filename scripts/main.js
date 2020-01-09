const nav = document.querySelector('.nav');
const container = document.querySelector('.container');

const scrollTo = (y) => {
  setTimeout(() => {
    window.scrollTo({
      top: y,
      left: 0,
      behavior: 'smooth',
    });
  });
};

// nav color
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) { // top
    nav.classList.remove('active');
  } else {
    nav.classList.add('active');
  }
});

// fullscreen scroll
window.addEventListener('wheel', (event) => {
  const threshold = container.offsetTop - 100;
  if (window.scrollY < threshold) {
    if (event.deltaY > 0) { // down
      scrollTo(threshold);
    } else { // up
      scrollTo(0);
    }
  }
});
