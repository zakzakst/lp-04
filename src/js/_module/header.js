import { gsap } from "gsap";

class HeaderClass {
  constructor() {
    this.btn = document.getElementById('js-header-btn');
    this.menu = document.getElementById('js-header-menu');
    this.menuSvg = Snap('#js-header-menu svg');
    this.menuMask = this.menuSvg.select('#js-header-menu-bg-mask');
    this.rects = [];
    this.rectSize = 100;
  }
  init() {
    this.menuBgInit();
    this.menuAnimHandler();
  }
  menuBgInit() {
    for(let i = 0; i < Math.ceil(1000 / this.rectSize); i++) {
      const x = i * this.rectSize;
      for(let j = 0; j < Math.ceil(1000 / this.rectSize); j++) {
        const y = j * this.rectSize;
        const rect = this.menuSvg.rect(x, y, this.rectSize, this.rectSize);
        rect.attr({
          fill: '#fff',
          fillOpacity: 0
        });
        this.menuMask.append(rect);
        this.rects.push(rect);
      }
    }
  }
  menuMaskOpacity(num) {
    this.rects.forEach(rect => {
      const delay = this.randomRange(10, 500);
      setTimeout(() => {
        rect.animate({
          fillOpacity: num,
        }, 500);
      }, delay);
    });
  }
  menuOpen() {
    const tl = gsap.timeline();
    tl.set(this.menu, {
      autoAlpha: 1,
    }).to(this.menu, {
      duration: 1.2,
      onStart: () => {
        this.menuMaskOpacity(1);
      },
      onComplete: () => {
        this.menu.classList.add('is-open');
      }
    });
  }
  menuClose() {
    const tl = gsap.timeline();
    tl.to(this.menu, {
      duration: .5,
      onStart: () => {
        this.menu.classList.remove('is-open');
      }
    }).to(this.menu, {
      duration: 1.2,
      onStart: () => {
        this.menuMaskOpacity(0);
      }
    }).set(this.menu, {
      autoAlpha: 0,
    });
  }
  menuAnimHandler() {
    this.btn.addEventListener('click', () => {
      if(this.menu.classList.contains('is-open')) {
        this.menuClose();
      } else {
        this.menuOpen();
      }
    });
  }
  randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export function headerScript() {
  const header = new HeaderClass();
  header.init();
}
