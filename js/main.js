document.body.onload = function onLoad() {
  /* - START - onclick nav-link change content */
  const page = document.getElementsByClassName('content');
  const link = document.getElementsByClassName('nav-link');
  const nav = document.getElementById('navbar');
  const footer = document.getElementById('footer');
  const navToggle = document.getElementById('nav-toggle');
  const navDrop = document.getElementById('right-nav-link');
  const footerLink = document.getElementsByClassName('footer-link');
  for (let i = 0; i < link.length; i += 1) {
    link[i].addEventListener('click', () => {
      page[i].classList.add('active');
      if (page[i].id !== 'home') {
        footer.classList.remove('sticky');
        footer.classList.add('textShadow');
        navToggle.style.color = 'white';
        navToggle.classList.add('textShadow');
        nav.style.background = 'url(../../src/about/bg.png) no-repeat center center fixed';
        nav.style.backgroundSize = 'cover';
        navDrop.style.background = 'url(../../src/about/bg.png) no-repeat center center fixed';
        navDrop.style.backgroundSize = 'cover';
        document.body.style.background = 'url(../../src/about/bg.png) no-repeat center center fixed';
        document.body.style.backgroundSize = 'cover';
        for (let k = 0; k < link.length; k += 1) {
          link[k].style.color = 'white';
          link[k].classList.add('textShadow');
          footerLink[k].style.color = 'white';
        }
      } else {
        footer.classList.add('sticky');
        footer.classList.remove('textShadow');
        nav.style.background = 'transparent';
        navDrop.style.background = 'transparent';
        document.body.style.background = 'transparent';
        navToggle.style.color = 'black';
        navToggle.classList.remove('textShadow');
        for (let k = 0; k < link.length; k += 1) {
          link[k].style.color = 'black';
          link[k].classList.remove('textShadow');
          footerLink[k].style.color = 'black';
        }
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
