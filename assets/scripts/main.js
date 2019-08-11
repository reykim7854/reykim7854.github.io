document.body.onload = function onLoad() {
  /* - START - onclick nav-link change content - */
  const page = document.getElementsByClassName('content');
  const link = document.getElementsByClassName('nav-link');
  const footer = document.getElementById('footer');
  const navToggle = document.getElementById('nav-toggle');
  const navDrop = document.getElementById('right-nav-link');
  for (let i = 0; i < link.length; i += 1) {
    link[i].addEventListener('click', () => {
      document.title = link[i].innerHTML;
      page[i].classList.add('active');
      if (page[i].clientHeight > window.innerHeight) {
        footer.classList.remove('sticky');
      } else {
        footer.classList.add('sticky');
      }
      for (let j = 0; j < page.length; j += 1) {
        if (page[j].classList.contains('active') && page[i] !== page[j]) {
          page[j].classList.remove('active');
        }
      }
    });
  }
  /* - END - */

  /* - START - Nav Toggle */
  navToggle.addEventListener('click', () => {
    navDrop.classList.toggle('drop');
  });
  for (let k = 0; k < link.length; k += 1) {
    link[k].addEventListener('click', () => {
      if (navDrop.classList.contains('drop')) {
        navToggle.click();
      }
    });
  }
  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      navDrop.removeAttribute('class');
    }
  });
  /* - END - */
};
