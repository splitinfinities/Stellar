import { colors } from './';

describe('colors', () => {
  it('returns empty string for no names defined', () => {
    expect(Object.keys(colors).length).toEqual(17);
    expect(Object.keys(colors)).toContain('base');
    expect(Object.keys(colors)).toContain('black');
    expect(Object.keys(colors)).toContain('white');
    expect(Object.keys(colors)).toContain('gray');
    expect(Object.keys(colors)).toContain('red');
    expect(Object.keys(colors)).toContain('orange');
    expect(Object.keys(colors)).toContain('yellow');
    expect(Object.keys(colors)).toContain('lime');
    expect(Object.keys(colors)).toContain('green');
    expect(Object.keys(colors)).toContain('teal');
    expect(Object.keys(colors)).toContain('cyan');
    expect(Object.keys(colors)).toContain('blue');
    expect(Object.keys(colors)).toContain('indigo');
    expect(Object.keys(colors)).toContain('violet');
    expect(Object.keys(colors)).toContain('fuschia');
  });
});
