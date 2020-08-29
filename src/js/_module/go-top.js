import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class GoTopClass {
  constructor() {
    this.el = document.getElementById('js-go-top');
    this.showElOffset = 300;
  }
  init() {
    gsap.set(this.el, {
      autoAlpha: 0
    });
    this.goTopHandler();
    this.showBtnHandler();
  }
  goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  goTopHandler() {
    this.el.addEventListener('click', e => {
      e.preventDefault();
      this.goTop();
    });
  }
  showBtn() {
    gsap.to(this.el, {
      autoAlpha: 1
    });
  }
  hideBtn() {
    gsap.to(this.el, {
      autoAlpha: 0
    });
  }
  showBtnHandler() {
    ScrollTrigger.create({
      trigger: document.body,
      start: `top -${this.showElOffset}px`,
      onEnter: () => {
        this.showBtn();
      },
      onLeaveBack: () => {
        this.hideBtn();
      }
    });
  }
}

export function goTopScript() {
  const goTop = new GoTopClass();
  goTop.init();
}
