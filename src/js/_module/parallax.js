import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class ParallaxClass {
  constructor() {
    this.el = document.getElementById('js-parallax');
    this.wrapper = document.getElementById('js-parallax-wrapper');
  }
  init() {
    this.setParallax();
  }
  setParallax() {
    const elHeight = this.el.clientHeight;
    const windowHeight = document.documentElement.clientHeight;
    this.wrapper.style.height = `${elHeight}px`;
    this.el.style.position = 'fixed';
    this.el.style.width = '100%';
    this.parallax = gsap.to(this.el, {
      scrollTrigger: {
        trigger: this.wrapper,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
      y: -(elHeight - windowHeight),
      ease: 'none',
    });
  }
  // parallaxHandler() {
  //   this.setParallax();
  // }
}

export function parallaxScript() {
  const parallax = new ParallaxClass();
  parallax.init();
}
