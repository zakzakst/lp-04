import { gsap } from "gsap";

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
    gsap.to(this.el, {
      autoAlpha: 0,
      onComplete: () => {
        this.el.parentNode.removeChild(this.el);
      }
    });
  }
}

export function pageLoaderScript() {
  const pageLoader = new PageLoaderClass();
  pageLoader.init();
}
