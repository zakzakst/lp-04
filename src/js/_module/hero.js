class HeroClass {
  constructor() {
    this.title = document.getElementById('js-hero-title');
    this.subtitle = document.getElementById('js-hero-subtitle');
    this.bgSvg = Snap('#js-hero-bg');
    this.bgPaths = this.bgSvg.selectAll('.js-hero-bg-mask-item');
    this.lineAnimSpeed = 2000;
  }
  init() {
    this.heroBgSet();
    this.heroBgLineAnim();
    setTimeout(() => {
      this.heroTitleShow();
      this.heroBgShowImg();
    }, this.lineAnimSpeed + 500);
  }
  heroTitleShow() {
    // タイトル文字の表示
    this.title.classList.add('is-animated');
    this.subtitle.classList.add('is-animated');
  }
  heroBgSet() {
    // 背景画像の初期設定
    for(let i = 0; i < this.bgPaths.length; i++) {
      const path = this.bgPaths[i];
      const pathLength = path.getTotalLength();
      path.attr({
        fill: 'none',
        stroke: '#fff',
        strokeWidth: 1,
        strokeDasharray: `${pathLength} ${pathLength}`,
        strokeDashoffset: pathLength
      });
    }
  }
  heroBgLineAnim() {
    // ラインアニメーションの実行
    for(let i = 0; i < this.bgPaths.length; i++) {
      const path = this.bgPaths[i];
      path.animate({
        strokeDashoffset: 0
      }, this.lineAnimSpeed, mina.easeout);
    }
  }
  heroBgShowImg() {
    // 背景画像の表示
    for(let i = 0; i < this.bgPaths.length; i++) {
      const path = this.bgPaths[i];
      path.animate({
        fill: '#fff'
      }, 500, mina.easein);
    }
  }
}

export function HeroScript() {
  const hero = new HeroClass();
  hero.init();
}
