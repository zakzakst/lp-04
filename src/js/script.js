import { parallaxScript } from './_module/parallax';
import { headerScript } from './_module/header';
import { goTopScript } from './_module/go-top';
import { pageLoaderScript } from './_module/page-loader';
// import { heroScript } from './_module/hero';
import { serviceScript } from './_module/service';
import { featureScript } from './_module/feature';
import { dataScript } from './_module/data';

(() => {
  headerScript();
  goTopScript();
  // heroScript();
  serviceScript();
  featureScript();
  dataScript();
  window.onload = () => {
    pageLoaderScript();
    parallaxScript();
  }
  // リサイズ時のscrollTriggerの処理が上手くできなかったので、再読み込みさせる
  window.onresize = () => {
    location.reload();
  }
})();
