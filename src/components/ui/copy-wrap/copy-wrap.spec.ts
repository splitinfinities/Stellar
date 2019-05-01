import { CopyWrap } from './copy-wrap';

it('should render and respond to changes appropriately', () => {
  const copyWrap = new CopyWrap();

  expect(copyWrap.align).toBe("left");
  expect(copyWrap.full).toBe(false);
});
