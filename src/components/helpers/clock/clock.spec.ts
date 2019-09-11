import { Clock } from './clock';

describe('stellar-clock', () => {
  it('builds', () => {
    expect(new Clock()).toBeTruthy();
  });
});
