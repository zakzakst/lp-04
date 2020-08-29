import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class FeatureClass {
  constructor() {
    this.items = document.querySelectorAll('.feature__item');
  }
  init() {
    this.animHandler();
  }
  animItem(el) {
    el.classList.add('is-animated');
  }
  animHandler() {
    [...this.items].forEach(item => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 30%",
        onEnter: self => {
          this.animItem(item);
          self.kill();
        }
      });
    });
  }
}

export function featureScript() {
  const feature = new FeatureClass();
  feature.init();
}
