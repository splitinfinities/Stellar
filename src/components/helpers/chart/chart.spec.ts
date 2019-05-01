import { Chart } from './chart';

xit('should render', () => {
    const chart = new Chart();
    expect(chart.type).toBe("pie");
});
