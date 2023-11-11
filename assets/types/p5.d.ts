declare module 'p5' {
    export = p5;
    export as namespace p5;
  
    declare class p5 {
      constructor(sketch: (instance: p5) => void, node?: HTMLElement);
  
      // Methods used in your sketch
      setup: () => void;
      draw: () => void;
      windowResized: () => void;
      createCanvas: (width: number, height: number) => p5.Renderer;
      resizeCanvas: (width: number, height: number, noRedraw?: boolean) => void;
      background: (color: number | string) => void;
      stroke: (r: number, g: number, b: number, a?: number) => void;
      noStroke: () => void;
      fill: (r: number, g: number, b: number, a?: number) => void;
      circle: (x: number, y: number, diameter: number) => void;
      line: (x1: number, y1: number, x2: number, y2: number) => void;
      random: {
        (min: number, max: number): number; // Two arguments version
        (max: number): number;              // Single argument version
      };
      clear: () => void;
      map: (value: number, start1: number, stop1: number, start2: number, stop2: number) => number;
      dist: (x1: number, y1: number, x2: number, y2: number) => number;
  
      // Properties
      width: number;
      height: number;
      windowWidth: number;
      windowHeight: number;
    }
  
    // Additional types, if necessary
    namespace p5 {
      class Renderer {
        parent: (parent: string | HTMLElement) => Renderer;
        // Add other properties and methods if needed
      }
    }
  }
  