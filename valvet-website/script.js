const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Open menu'); }
menuButton.addEventListener('click', () => {
  const opening = mobileNav.hidden;
  mobileNav.hidden = !opening;
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
const heroVideo = document.querySelector('.hero-video');
const hero = document.querySelector('.hero');
if (heroVideo && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVideo.addEventListener('playing', () => hero.classList.add('video-playing'));
  heroVideo.addEventListener('error', () => hero.classList.remove('video-playing'));
  heroVideo.addEventListener('stalled', () => hero.classList.remove('video-playing'));
}
