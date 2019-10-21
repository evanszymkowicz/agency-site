import { TimelineMax } from 'gsap/all';


(function () {
  const ContactHeader = document.getElementById('Contact_Intro-Header');
  const ContactRight = document.getElementById('Contact_Intro-Right');
  const ContactList = document.getElementById('Contact_Form-Main-List');
  const ContactSubList = document.querySelectorAll('.Contact_Form-Sub-Item-Container');

  const ContactIntroTl = new TimelineMax();
  ContactIntroTl
    .add('wave1')
    .set(ContactHeader, { y: 50 }, 'wave1')
    .set(ContactRight, { y: 50 }, 'wave1')
    .set(ContactList, { y: 50 }, 'wave1')
    .set(ContactSubList, { y: 50 }, 'wave1')
    .add('wave2')
    .to(ContactHeader, 0.6, {
      opacity: 1, y: 0, ease: Power1.easeInOut, delay: 0.5,
    }, 'wave2')
    .to(ContactRight, 0.6, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=.5')
    .to(ContactList, 0.6, { opacity: 1, y: 0, ease: Power1.easeInOut }, '+=.2')
    .to(ContactSubList, 0.6, { opacity: 1, y: 0, ease: Power1.easeInOut }, '-=.5');
}());
