import { browser, by, element, $$ } from 'protractor';
import { Monarch } from '../../src/app/english-monarchs';

export class AppPage {

  async getMonarchs(): Promise<any[]> {
    return await $$('[data-monarch]').map(
      async (monarchFinder, index) => {
        return {
          name: await monarchFinder.$('[data-name]').getText(),
          reign: await monarchFinder.$('[data-reign]').getText(),
          house: await monarchFinder.$('[data-house]').getText(),
          issue: await monarchFinder.$$('[data-issue] div.row').getText()
        };
      }
    );
  }

}
