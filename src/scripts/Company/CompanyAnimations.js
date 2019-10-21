import {
  TweenMax, TweenLite, TimelineMax, Expo, Power1,
} from 'gsap/all';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';


(function () {
// GSAP --------------- --------------


  // Variables ----- ---- --- -- -
  const CompanyHeader = document.getElementById('Company_Intro-Header');
  const CompanyRight = document.getElementById('Company_Intro-Right');
  const CompanyImage1 = document.getElementById('Company_Image1');
  const CompanyImage2 = document.getElementById('Company_Image2');
  const CompanyImage3 = document.getElementById('Company_Image3');


  const CompanyIntroTl = new TimelineMax();
  CompanyIntroTl
    .add('wave1')
    .set(CompanyHeader, { y: 50 }, 'wave1')
    .set(CompanyRight, { y: 50 }, 'wave1')
    .set(CompanyImage1, { y: 50 }, 'wave1')
    .set(CompanyImage2, { y: 50 }, 'wave1')
    .set(CompanyImage3, { y: 50 }, 'wave1')


    .to(CompanyHeader, 0.6, {
      opacity: 1, y: 0, ease: Power1.easeInOut, delay: 0.5,
    })
    .to(CompanyRight, 0.6, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=.4')

    .to(CompanyImage1, 0.6, { opacity: 1, y: 0, ease: Power1.easeInOut }, '+=.3')
    .to(CompanyImage2, 0.6, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=.4')
    .to(CompanyImage3, 0.6, { opacity: 1, y: 0, ease: Power1.easeInOut })
  ;


  // ScrollMagic -------- ----------------------

  const controller = new ScrollMagic.Controller();

  const PinNumbersScene = new ScrollMagic.Scene({
    triggerElement: '#Company_Cores-Number-Wrap',
    triggerHook: 0.25,
    duration: '185%',
  })
    .setPin('#Company_Cores-Number-Wrap')
    .addTo(controller);

  const CompanyNumber1OutScene = new ScrollMagic.Scene({
    triggerElement: '#Company_Core-Title2',
    triggerHook: 0.32,
  })
    .setClassToggle('#Company-Number1', 'Fade-Out')
    .addTo(controller);

  const CompanyNumber2InScene = new ScrollMagic.Scene({
    triggerElement: '#Company_Core-Title2',
    triggerHook: 0.32,
  })
    .setClassToggle('#Company-Number2', 'Fade-In')
    .addTo(controller);

  const CompanyNumber2OutScene = new ScrollMagic.Scene({
    triggerElement: '#Company_Core-Title3',
    triggerHook: 0.32,
  })
    .setClassToggle('#Company-Number2', 'Fade-Out')
    .addTo(controller);

  const CompanyNumber3InScene = new ScrollMagic.Scene({
    triggerElement: '#Company_Core-Title3',
    triggerHook: 0.32,
  })
    .setClassToggle('#Company-Number3', 'Fade-In')
    .addTo(controller);

  const CompanyNumber3OutScene = new ScrollMagic.Scene({
    triggerElement: '#Company_Core-Title3',
    triggerHook: -0.2,
  })
    .setClassToggle('#Company-Number3', 'Fade-Out')
    .addTo(controller);
}());
