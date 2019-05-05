/**
 *
 * Sound Math stuff
 *
 * Based on https://codepen.io/prakhar625/pen/zddKRj?editors=0010s
 *
*/

export function fractionate(val: number, minVal: number, maxVal: number) {
    return (val - minVal) / (maxVal - minVal);
}

export function modulate(val: number, minVal: number, maxVal: number, outMin: number, outMax: number) {
    const fr = fractionate(val, minVal, maxVal);
    const delta = outMax - outMin;
    return outMin + (fr * delta);
}

export function avg(arr: number[]) {
    const total: number = arr.reduce((sum: number, b: number) => (sum + b));
    return (total / arr.length);
}

export function max(arr: number[]) {
    return arr.reduce((a: number, b: number) => (Math.max(a, b)));
}

export function analyzeSound(dataArray: number[]) {
    const lowerHalfArray = dataArray.slice(0, (dataArray.length / 2) - 1);
    const upperHalfArray = dataArray.slice((dataArray.length / 2) - 1, dataArray.length - 1);

    const overallAvg = avg(dataArray);
    const lowerMax = max(lowerHalfArray);
    const lowerAvg = avg(lowerHalfArray);
    const upperMax = max(upperHalfArray);
    const upperAvg = avg(upperHalfArray);

    const lowerMaxFr = lowerMax / lowerHalfArray.length;
    const lowerAvgFr = lowerAvg / lowerHalfArray.length;
    const upperMaxFr = upperMax / upperHalfArray.length;
    const upperAvgFr = upperAvg / upperHalfArray.length;

    return {
        lowerAvg,
        lowerAvgFr,
        lowerMax,
        lowerMaxFr,
        overallAvg,
        upperAvg,
        upperAvgFr,
        upperMax,
        upperMaxFr
    }
}
