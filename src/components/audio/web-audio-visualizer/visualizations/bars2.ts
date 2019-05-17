var BAR_PAD = 4;
var BAR_WIDTH = 4;
var MAX_BARS = 70;

export const bars2 = (arg) => {
    const values = arg.freqs;
    const canvas = arg.canvas;
    const ctx = arg.canvasCTX;

    var len = values.length - (~~(values.length / MAX_BARS) * 50);
    var normFac = arg.size;
    var maxValue = normFac;
    var istep = ~~(len / MAX_BARS);
    var step = canvas.width / MAX_BARS;
    var x = BAR_WIDTH;
    var height = (canvas.height - (BAR_PAD * 2));

    for (var i = 0; i < len; i+=istep) {
        var v = (values[i] / maxValue);
        var h = v * height;
        var y = height / 2 - h / 2;
        ctx.beginPath();

        ctx.shadowColor = "rgba(24, 24, 24, 0.25)";
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;

        ctx.strokeStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
        ctx.lineWidth = BAR_WIDTH;
        ctx.lineCap = 'round';
        ctx.moveTo(x, y);
        ctx.lineTo(x, y+h);
        ctx.stroke();
        x += step;
    }
};
