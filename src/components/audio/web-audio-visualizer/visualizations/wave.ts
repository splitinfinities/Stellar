export const wave = (arg) => {
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        var value = arg.times[i];
        var percent = value / 512;
        var height = (arg.height * percent) * 1.25;
        var offset = arg.height - height;
        var barWidth =  arg.width / arg.analyser.frequencyBinCount + 16;

        arg.canvasCTX.fillStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
        arg.canvasCTX.fillRect(i * barWidth, offset, 24, 24);
    }
}
