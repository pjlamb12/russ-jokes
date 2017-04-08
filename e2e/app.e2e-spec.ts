import { RussJokesPage } from './app.po';

describe('russ-jokes App', () => {
  let page: RussJokesPage;

  beforeEach(() => {
    page = new RussJokesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
