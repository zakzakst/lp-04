import { goTopScript } from './_module/go-top';
import { pageLoaderScript } from './_module/page-loader';
import { heroScript } from './_module/hero';
import { serviceScript } from './_module/service';
import { featureScript } from './_module/feature';

(() => {
  goTopScript();
  // pageLoaderScript();
  heroScript();
  serviceScript();
  featureScript();
})();
