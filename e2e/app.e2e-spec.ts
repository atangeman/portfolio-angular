import { AngularPortfolioPage } from './app.po';

describe('angular-portfolio App', function() {
  let page: AngularPortfolioPage;

  beforeEach(() => {
    page = new AngularPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
