import { OasisphTravelAppPage } from './app.po';

describe('oasisph-travel-app App', () => {
  let page: OasisphTravelAppPage;

  beforeEach(() => {
    page = new OasisphTravelAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
