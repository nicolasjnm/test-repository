import { TestRepositoryPage } from './app.po';

describe('test-repository App', function() {
  let page: TestRepositoryPage;

  beforeEach(() => {
    page = new TestRepositoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
