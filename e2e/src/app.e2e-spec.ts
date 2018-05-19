import { AppPage } from './app.po';
import { Monarch, EnglishMonarchs } from '../../src/app/english-monarchs';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should retrieve monarchs', async () => {
    page.navigateTo();
    const monarchs: Monarch[] = await page.getMonarchs();
    const originalMonarchs = new EnglishMonarchs();

    monarchs.forEach(
      (monarch: Monarch, index: number) => {
        console.log(monarch.name);
        monarch.issue.forEach(issue => console.log('\t' + issue));
        expect(monarch.name).toBe(originalMonarchs.monarchs[index].name);
      }
    );

  });
});
