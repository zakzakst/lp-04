import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class ServiceClass {
  constructor(id) {
    this.trigger = document.getElementById('js-service');
    this.svg = Snap(`#${id} .service-img`);
    this.path = this.svg.select('.service-img__path');
    this.icon = this.svg.select('.service-img__icon');
    this.heading = this.svg.select('.service-img__heading');
    this.text = document.querySelector(`#${id} .service-text`);
    this.pathAnimSpeed = 600;
    this.headingAnimSpeed = 400;
  }
  init() {
    this.animHandler();
  }
  animPath() {
    const pathLength = this.path.getTotalLength();
    this.path.attr({
      strokeOpacity: 1,
      strokeDasharray: `${pathLength} ${pathLength}`,
      strokeDashoffset: pathLength,
    });
    this.path.animate({
      strokeDashoffset: pathLength * 2,
    }, this.pathAnimSpeed, mina.easeout, () => {
      this.animHeading();
      this.animIcon();
      this.animText();
    });
  }
  animHeading() {
    this.heading.attr({
      startOffset: '50px'
    });
    this.heading.animate({
      fillOpacity: 1,
      startOffset: 0,
    }, this.headingAnimSpeed, mina.backout);
  }
  animIcon() {
    this.icon.animate({
      fillOpacity: 1,
    }, this.headingAnimSpeed, mina.easeout);
  }
  animText() {
    this.text.classList.add('is-animated');
  }
  animHandler() {
    ScrollTrigger.create({
      trigger: this.trigger,
      start: "top 50%",
      onEnter: self => {
        this.animPath();
        self.kill();
      }
    });
  }
}

export function serviceScript() {
  const ids = [
    'js-service-item-01',
    'js-service-item-02',
    'js-service-item-03',
  ];
  ids.forEach(id => {
    const service = new ServiceClass(id);
    service.init();
  });
}
