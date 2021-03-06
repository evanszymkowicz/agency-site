import TimelineMax from 'gsap/TimelineMax';
import TweenMax, { Expo } from 'gsap/TweenMax';

(function () {
  const MobileHeader = document.getElementById('AboutMobileHeader');
  const MobileMenu = document.getElementById('AboutMobileNav');
  const MobileListItems = document.querySelectorAll('.MobileNav_ListItem');
  const MobileMenuIcon = document.getElementById('MobileMenuIcon');
  const MobileMenuClose = document.getElementById('MobileMenuClose');
  const AboutMobileNavTl = new TimelineMax();

  AboutMobileNavTl
    .add('wave1')
    .set(MobileMenu, { display: 'block', opacity: 0 }, 'wave1')
    .set(MobileHeader, { display: 'flex', opacity: 0 }, 'wave1')
    .add('wave2')
    .fromTo(MobileMenu, 1, { opacity: 0 }, { opacity: 1 }, 'wave2')
    .fromTo(MobileHeader, 1, { opacity: 0 }, { opacity: 1, ease: Expo.easeInOut }, 'wave2')
    .staggerFrom(MobileListItems, 0.3, {
      opacity: 0, x: -400, ease: Expo.easeInOut, delay: 0.2,
    }, 0.1, 'wave2');
  AboutMobileNavTl.pause();

  const ToggleMobileNav = (e) => {
    console.log('Click');

    AboutMobileNavTl.play();
  };
  const CloseMobileNav = (e) => {
    AboutMobileNavTl.reverse();
  };
  MobileMenuIcon.addEventListener('click', ToggleMobileNav);
  MobileMenuClose.addEventListener('click', CloseMobileNav);
}());
