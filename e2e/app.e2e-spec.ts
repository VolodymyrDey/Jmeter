import { JmeterLauncherPage } from './app.po';

describe('jmeter-launcher App', () => {
  let page: JmeterLauncherPage;

  beforeEach(() => {
    page = new JmeterLauncherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
