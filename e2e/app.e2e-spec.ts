import { TsclientPage } from './app.po';

describe('tsclient App', () => {
  let page: TsclientPage;

  beforeEach(() => {
    page = new TsclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
