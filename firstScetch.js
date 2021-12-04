// import {Context} from 'svgcanvas'
//
// const ctx = new Context(1080, 1080);

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'yellow';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w 	= width  * 0.10;
    const h 	= height * 0.10;
    const gap = width  * 0.03;
    const ix 	= width  * 0.17;
    const iy 	= height * 0.17;

    const off = width  * 0.02;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
      }
    }
    // Export your file
    return {
      data: JSON.stringify({ foo: 'bar' }),
      extension: '.json'
    };
  };
};
canvasSketch(sketch, settings);

// const width = 1080
// const height = 1080
//
// ctx.fillStyle = 'white';
// ctx.fillRect(0, 0, width, height);
// ctx.lineWidth = width * 0.01;
//
// const w 	= width  * 0.10;
// const h 	= height * 0.10;
// const gap = width  * 0.03;
// const ix 	= width  * 0.17;
// const iy 	= height * 0.17;
//
// const off = width  * 0.02;
//
// let x, y;
//
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     x = ix + (w + gap) * i;
//     y = iy + (h + gap) * j;
//
//     ctx.beginPath();
//     ctx.rect(x, y, w, h);
//     ctx.stroke();
//
//     if (Math.random() > 0.5) {
//       ctx.beginPath();
//       ctx.rect(x + off / 2, y + off / 2, w - off, h - off);
//       ctx.stroke();
//     }
//   }
// }
//
//
//
// // serialize your SVG
// const mySerializedSVG = ctx.getSerializedSvg();
//
// const container = document.createElement('div');
// container.className = 'example';
// container.id = 'example-' + name;
// container.innerHTML = `<h2>${name}</h2><div class="svg"></div>`
// document.querySelector('body').appendChild(container);
// document.querySelector('.svg').innerHTML = mySerializedSVG;







