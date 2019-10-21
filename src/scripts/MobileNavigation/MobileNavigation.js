import TimelineMax from 'gsap/TimelineMax';

(function () {
  const MobileHeader = document.getElementById('MobileHeader');
  const MobileMenu = document.getElementById('MobileNavigation');
  const MobileListItems = document.querySelectorAll('.MobileNavigation_ListItem');
  const MobileMenuIcon = document.getElementById('MobileMenuIcon');
  const MobileMenuClose = document.getElementById('MobileMenuClose');
  const ToggleMobileNavigationTl = new TimelineMax();

  ToggleMobileNavigationTl
    .add('wave1')
    .set(MobileMenu, { display: 'block', opacity: 0 }, 'wave1')
    .set(MobileHeader, { display: 'flex', opacity: 0 }, 'wave1')
    .add('wave2')
    .fromTo(MobileMenu, 1, { opacity: 0 }, { opacity: 1 }, 'wave2')
    .fromTo(MobileHeader, 1, { opacity: 0 }, { opacity: 1, ease: Expo.easeInOut }, 'wave2')
    .staggerFrom(MobileListItems, 0.3, {
      opacity: 0, x: -400, ease: Expo.easeInOut, delay: 0.2,
    }, 0.1, 'wave2');
  ToggleMobileNavigationTl.pause();

  const ToggleMobileNavigation = (e) => {
    console.log('Click');

    ToggleMobileNavigationTl.play();
  };
  const CloseMobileNavigation = (e) => {
    ToggleMobileNavigationTl.reverse();
  };
  MobileMenuIcon.addEventListener('click', ToggleMobileNavigation);
  MobileMenuClose.addEventListener('click', CloseMobileNavigation);
}());
