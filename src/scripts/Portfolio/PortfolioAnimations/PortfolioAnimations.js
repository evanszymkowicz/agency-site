import { TimelineMax, Power1 } from 'gsap/all';

(function () {
  const PortfolioHeader = document.getElementById('Portfolio_Intro-Header');
  const PortfolioRight = document.getElementById('Portfolio_Intro-Right');
  const PortfolioIntroTl = new TimelineMax();
  PortfolioIntroTl
    .add('wave1')
    .set(PortfolioHeader, { y: 50 }, 'wave1')
    .set(PortfolioRight, { y: 50 }, 'wave1')
    .add('wave2')
    .to(PortfolioHeader, 0.6, {
      opacity: 1, y: 0, ease: Power1.easeInOut, delay: 0.5,
    }, 'wave2')
    .to(PortfolioRight, 0.6, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=.5');
}());
