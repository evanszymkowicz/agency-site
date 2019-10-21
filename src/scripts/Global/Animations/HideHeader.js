import { TimelineMax } from 'gsap/TimelineMax';

(function () {
  const Header = document.getElementById('Header');
  const HideHeaderTl = new TimelineMax();
  HideHeaderTl
    .set(Header, { top: 0 })
    .to(Header, 1, { top: '-100%', ease: Power2.easeIn });
  HideHeaderTl.pause();

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      HideHeaderTl.reverse();
    } else if (currentScrollPos > 200) {
      HideHeaderTl.play();
    }
    prevScrollpos = currentScrollPos;
  };
