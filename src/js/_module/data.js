import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class Graph1Class {
  constructor() {
    this.trigger = document.getElementById('js-data-graph1-wrapper');
    this.svg = Snap('#js-data-graph1');
    this.graph = this.svg.select('#js-data-graph1-graph');
    this.graphVal = [
      'M250,170l-69.282,40l0,80l138.564,0l0,-80l-69.282,-40Z',
      'M250,90l-69.282,120l-34.424,99.802l103.706,-19.802l69.282,0l0,-80l-69.282,-120Z',
      'M250,51l-138.564,119.052l34.641,139.75l103.923,-19.802l69.282,0l0,-80l-69.282,-159Z',
      'M250,51l-207.846,77.483l34.641,222l173.205,59.517l173.205,-60.85l0,-199.334l-173.205,-98.816Z'
    ];
    this.graphCount = 0;
  }
  init() {
    this.animHandler();
  }
  animGraph() {
    this.graph.animate({
      d: this.graphVal[this.graphCount],
      fillOpacity: .4 + .1 * this.graphCount,
    }, 600, mina.easeout, () => {
      this.graphCount++;
      if(this.graphCount < this.graphVal.length) {
        setTimeout(() => {
          this.animGraph();
        }, 300);
      }
    });
  }
  animHandler() {
    ScrollTrigger.create({
      trigger: this.trigger,
      start: "top 50%",
      onEnter: self => {
        this.animGraph();
        self.kill();
      }
    });
  }
}

export function dataScript() {
  const graph1 = new Graph1Class();
  graph1.init();
}
