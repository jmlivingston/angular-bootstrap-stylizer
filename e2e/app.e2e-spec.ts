import { AngularBootstrapStylizerPage } from './app.po';

describe('angular-bootstrap-stylizer App', function() {
  let page: AngularBootstrapStylizerPage;

  beforeEach(() => {
    page = new AngularBootstrapStylizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
