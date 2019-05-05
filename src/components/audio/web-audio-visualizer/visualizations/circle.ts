import { avg } from './utils';

const RENDERED_OBJECTS = {
    BAR: {
        maxHeight: 250
    },
    CIRCLE: {
        radius: 100,
        width: 15
    }
}

export const circle = (arg) => {
    const bufferLength = arg.analyser.frequencyBinCount;
    const avgBuffer = avg(arg.freqs);
    const lineWidth = avgBuffer < RENDERED_OBJECTS.CIRCLE.width ? RENDERED_OBJECTS.CIRCLE.width : avgBuffer;

    let rotation = 0;
    let cx = arg.width / 2;
    let cy = arg.height / 2;

    const rectLength = RENDERED_OBJECTS.CIRCLE.radius * 2 * Math.PI;
    let barWidth = (rectLength / bufferLength);

    arg.canvasCTX.beginPath();
    arg.canvasCTX.arc(cx, cy, RENDERED_OBJECTS.CIRCLE.radius, 0, Math.PI * 2);
    arg.canvasCTX.lineWidth = lineWidth;
    arg.canvasCTX.strokeStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
    arg.canvasCTX.closePath();
    arg.canvasCTX.stroke();
    arg.canvasCTX.save();

    arg.canvasCTX.translate(cx, cy);

    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        const barHeight = arg.freqs[i];
        const fixedBarHeight = barHeight > RENDERED_OBJECTS.BAR.maxHeight ? RENDERED_OBJECTS.BAR.maxHeight : barHeight;

        arg.canvasCTX.rotate(rotation);
        arg.canvasCTX.fillStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
        arg.canvasCTX.fillRect(RENDERED_OBJECTS.CIRCLE.radius + 100, (barWidth * -1) / 2, fixedBarHeight, barWidth);

        rotation = (rotation / (bufferLength + barWidth)) % 360 + 1;
      }
  }
