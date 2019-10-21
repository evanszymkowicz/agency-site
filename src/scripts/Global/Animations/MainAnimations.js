import $ from 'jquery';
import {
  TweenMax, TweenLite, TimelineMax, Expo, Power1,
} from 'gsap/all';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

(function () {
  const ConnectIcon = document.getElementById('Landing-Constants-ConnectIcon');
  const ConnectIconWhite = document.getElementById('ConnectIconWhite');
  const ConnectIconBlue = document.getElementById('ConnectIconBlue');
  const ConnectIconTl = new TimelineMax();
  ConnectIconTl
    .add('IconChange')
    .set(ConnectIcon, { className: '+=ConnectIconBG' }, 'IconChange')
    .set(ConnectIconWhite, { display: 'none' }, 'IconChange')
    .set(ConnectIconBlue, { display: 'block' }, 'IconChange');
  ConnectIconTl.pause();

  // ActivateConnectIconChange
  const ConnectIconActive = (e) => {
    ConnectIconTl.play();
  };
  // DeactivateConnectIconChange
  const ConnectIconInactive = (e) => {
    ConnectIconTl.reverse();
  };

  ConnectIcon.addEventListener('mouseover', ConnectIconActive);
  ConnectIcon.addEventListener('mouseout', ConnectIconInactive);

  const controller = new ScrollMagic.Controller();
  (function () {
    const FooterBackgroundScene = new ScrollMagic.Scene({
      triggerElement: '#Footer',
      triggerHook: 0.68,
    })
      .setClassToggle('#Footer_Background', 'Slide-Up')
      .addTo(controller);

    const FooterWhiteTextScene = new ScrollMagic.Scene({
      triggerElement: '#Footer',
      triggerHook: 0.65,
    })
      .setClassToggle('#Footer_Content-White', 'Fade-In')
      .addTo(controller);
  }());
}());
