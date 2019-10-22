import {
  TweenMax, TweenLite, TimelineMax, Expo, Power1,
} from 'gsap/all';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

(function () {
  const LandingLoading = document.getElementById('Landing_Loading-In');
  const LandingCover = document.getElementById('LandingCover');
  const LandingLoadingPercent = document.getElementById('Landing_Loading-In-Percent');
  const LandingHeader = document.getElementById('LandingHeader');
  const LandingConstantAddress = document.getElementById('Landing-Constants_LeftFixed-Address');
  const LandingConstantSocials = document.getElementById('Landing-Constants_LeftFixed-Socials');
  const LandingConstantConnectIcon = document.getElementById('Landing-Constants-ConnectIcon');
  const LandingIntroHeader = document.getElementById('Landing_Intro-Header');
  const LandingIntroRight = document.getElementById('LandingIntro_Right');
  const LandingClients = document.getElementById('Landing_Clients');

  const LandingIntroTl = new TimelineMax();
  LandingIntroTl
    .add('Init')
    .set(LandingHeader, { opacity: 0, y: 50 }, 'Init')
    .set(LandingConstantAddress, { opacity: 0, x: -50 }, 'Init')
    .set(LandingConstantSocials, { opacity: 0, y: 50 }, 'Init')
    .set(LandingConstantConnectIcon, { opacity: 0, y: 50 }, 'Init')
    .set(LandingIntroHeader, { opacity: 0, y: 50 }, 'Init')
    .set(LandingIntroRight, { opacity: 0, y: 50 }, 'Init')
    .set(LandingClients, { opacity: 0 })
    .to(LandingLoading, 1.5, { left: 0, ease: Power1.easeInOut, delay: 0.4 })
    .set(LandingCover, { display: 'none' })
    .to(LandingLoadingPercent, 0.5, { opacity: 0, delay: 0.3 })
    .to(LandingLoading, 0.8, { top: '-100%', delay: 0.3, ease: Expo.easeInOut })
    .set(LandingLoading, { display: 'none' })
    .add('wave1')
    .to(LandingHeader, 0.6, {
      opacity: 1, y: 0, delay: 0.5, ease: Power1.easeInOut,
    }, 'wave1')
    .to(LandingIntroHeader, 1, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=.7')
    .to(LandingIntroRight, 1, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=.9')
    .to(LandingConstantAddress, 1, { opacity: 1, x: 0, ease: Power1.easeInOut }, '-=.8')
    .to(LandingConstantSocials, 1, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=.8')
    .to(LandingConstantConnectIcon, 1, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=.9')
    .to(LandingClients, 1, { opacity: 1 }, '-=1.3');
  const controller = new ScrollMagic.Controller();
  const LandingPortfolio1Scene = new ScrollMagic.Scene({
    triggerElement: '#LandingPortfolio1',
    reverse: false,
    triggerHook: 0.75,
  })
    .setClassToggle('#Landing_CaseStudy-Portfolio-Cover1', 'Slide-Right')
    .addTo(controller);
  const LandingPortfolio2Scene = new ScrollMagic.Scene({
    triggerElement: '#LandingPortfolio2',
    reverse: false,
    triggerHook: 0.75,
  })
    .setClassToggle('#Landing_CaseStudy-Portfolio-Cover2', 'Slide-Right')
    .addTo(controller);

  // Portfolio3 -------
  const LandingPortfolio3Scene = new ScrollMagic.Scene({
    triggerElement: '#LandingPortfolio3',
    reverse: false,
    triggerHook: 0.75,
  })
    .setClassToggle('#Landing_CaseStudy-Portfolio-Cover3', 'Slide-Right')
    .addTo(controller);
  const LandingPortfolio4Scene = new ScrollMagic.Scene({
    triggerElement: '#LandingPortfolio4',
    reverse: false,
    triggerHook: 0.75,
  })
    .setClassToggle('#Landing_CaseStudy-Portfolio-Cover4', 'Slide-Right')
    .addTo(controller);

  const LandingPortfolio5Scene = new ScrollMagic.Scene({
    triggerElement: '#LandingPortfolio5',
    reverse: false,
    triggerHook: 0.75,
  })
    .setClassToggle('#Landing_CaseStudy-Portfolio-Cover5', 'Slide-Right')
    .addTo(controller);

  const LandingServicesIntroScene = new ScrollMagic.Scene({
    triggerElement: '#Landing_Services-IntroHeader',
    reverse: false,
    triggerHook: 0.85,
  })
    .setClassToggle('#Landing_Services-IntroHeader', 'Fade-In')
    .addTo(controller);

  // Description
  const LandingServicesDescriptionScene = new ScrollMagic.Scene({
    triggerElement: '#Landing_Services-IntroHeader',
    reverse: false,
    triggerHook: 0.65,
  })
    .setClassToggle('#Landing_Services-IntroRight', 'Fade-In')
    .addTo(controller);

  // Breakdown
  const LandingServicesBreakdownScene = new ScrollMagic.Scene({
    triggerElement: '#Landing_Services-BreakDown',
    reverse: false,
    triggerHook: 0.8,
  })
    .setClassToggle('#Landing_Services-BreakDown', 'Fade-In')
    .addTo(controller);
}());
