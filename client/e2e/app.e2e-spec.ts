import { VotingAppPage } from './app.po';

describe('Voting App', () => {
  let page: VotingAppPage;

  beforeEach(() => {
    page = new VotingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
