import { gsap } from "gsap";
import { heroScript } from './hero';

class PageLoaderClass {
  constructor() {
    this.el = document.getElementById('js-page-loader');
  }
  init() {
    window.onload = () => {
      this.openAnim();
    }
  }
  openAnim() {
    const tl = gsap.timeline();
    tl.to(this.el, {
      autoAlpha: 0,
      onComplete: () => {
        this.el.parentNode.removeChild(this.el);
      }
    }).to(this.el, {
      onStart: () => {
        heroScript();
      }
    }, '+=.2');
  }
}

export function pageLoaderScript() {
  const pageLoader = new PageLoaderClass();
  pageLoader.init();
}
