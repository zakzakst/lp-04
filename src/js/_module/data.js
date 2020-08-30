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
    this.graphCount = 1;
  }
  init() {
    this.animHandler();
  }
  animGraph() {
    this.graph.animate({
      d: this.graphVal[this.graphCount],
      fillOpacity: .4 + .15 * this.graphCount,
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
      start: "top 70%",
      onEnter: self => {
        this.animGraph();
        self.kill();
      }
    });
  }
}

class Graph2Class {
  constructor() {
    this.trigger = document.getElementById('js-data-graph2-wrapper');
    this.svg = Snap('#js-data-graph2');
    this.graph1 = this.svg.select('#js-data-graph2-graph1');
    this.graph2 = this.svg.select('#js-data-graph2-graph2');
    this.graph3 = this.svg.select('#js-data-graph2-graph3');
    this.icon = document.getElementById('js-data-graph2-icon');
    this.animSpeed = 400;
    this.graphVal = {
      graph1: 'M90,490l0,-80',
      graph2: 'M250,490l0,-160',
      graph3: 'M410,490l0,-320',
    };
  }
  init() {
    this.animHandler();
  }
  animGraph1() {
    this.graph1.animate({
      d: this.graphVal.graph1,
    }, this.animSpeed, mina.easeout, () => {
      this.animGraph2();
    });
  }
  animGraph2() {
    this.graph2.animate({
      d: this.graphVal.graph2,
    }, this.animSpeed, mina.easeout, () => {
      this.animGraph3();
    });
  }
  animGraph3() {
    this.graph3.animate({
      d: this.graphVal.graph3,
    }, this.animSpeed, mina.easeout, () => {
      this.animIcon();
    });
  }
  animIcon() {
    this.icon.classList.add('is-animated');
  }
  animHandler() {
    ScrollTrigger.create({
      trigger: this.trigger,
      start: "top 70%",
      onEnter: self => {
        this.animGraph1();
        self.kill();
      }
    });
  }
}

export function dataScript() {
  const graph1 = new Graph1Class();
  graph1.init();
  const graph2 = new Graph2Class();
  graph2.init();
}
