(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const home = document.getElementById('Home');
  const sky = document.querySelector('.layer-sky');
  const mountain = document.querySelector('.layer-mountain');
  const title = document.querySelector('.parallax-title');
  const ridge = document.querySelector('.layer-ridge');
  const forest = document.querySelector('.layer-forest');
  const cue = document.querySelector('.scroll-cue');
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('.nav-link')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const clamp = (n, min = 0, max = 1) => Math.max(min, Math.min(max, n));
  let ticking = false;
  function update() {
    ticking = false;
    const vh = window.innerHeight;
    const rect = home.getBoundingClientRect();
    const p = clamp(-rect.top / Math.max(1, home.offsetHeight - vh));
    if (!reduceMotion.matches && rect.bottom > 0) {
      const small = window.innerWidth < 768;
      const intro = clamp(p / .22);
      const ease = intro < .5 ? 4 * intro ** 3 : 1 - (-2 * intro + 2) ** 3 / 2;
      forest.style.transform = `scale(${1 + ease * (small ? 2.8 : 3.6)})`;
      forest.style.opacity = 1 - ease;
      forest.style.visibility = p >= .22 ? 'hidden' : 'visible';
      const move = clamp((p - .22) / .78);
      sky.style.transform = `translateY(${-move * (small ? 10 : 15)}%)`;
      mountain.style.transform = `translateY(${-move * (small ? 22 : 32)}%) scale(${1 + .06 * move})`;
      ridge.style.transform = `translateY(${-move * (small ? 45 : 60)}%) scale(${1 + .04 * move})`;
      const appear = clamp((p - .22) / .12);
      title.style.transform = `translateY(${-move * (small ? 24 : 50)}%) scale(${.94 + .06 * appear})`;
      title.style.opacity = appear * (1 - clamp((p - .82) / .12));
      cue.style.opacity = 1 - clamp(p / .12);
      cue.style.pointerEvents = p > .1 ? 'none' : 'auto';
    }
    let active = sections[0];
    for (const section of sections) if (section.getBoundingClientRect().top <= vh * .38) active = section;
    links.forEach(link => {
      const selected = link.hash === '#' + active.id;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
    const portfolio = document.getElementById('Portofolio');
    header.classList.toggle('nav-light', portfolio && portfolio.getBoundingClientRect().top <= 120);
  }
  function requestUpdate() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', requestUpdate, {passive:true});
  window.addEventListener('resize', requestUpdate, {passive:true});
  reduceMotion.addEventListener('change', requestUpdate);
  document.getElementById('year').textContent = new Date().getFullYear();
  update();
})();
