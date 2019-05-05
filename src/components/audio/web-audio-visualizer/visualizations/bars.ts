export const bars = (arg) => {
    // Draw the frequency domain chart.
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        var value = arg.freqs[i];
        var percent = value / 256;
        var height = (arg.height * percent) * 0.75;
        var offset = arg.height - height + 25;
        var barWidth = (arg.width/arg.analyser.frequencyBinCount) + 24;

        arg.canvasCTX.fillStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${percent * 100}%)`;
        arg.canvasCTX.fillRect(i * barWidth, offset, barWidth, height);
    }
}
