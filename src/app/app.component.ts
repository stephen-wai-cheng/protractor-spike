import { Component } from '@angular/core';
import { EnglishMonarchs } from './english-monarchs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EnglishMonarchs]
})
export class AppComponent {
  monarchs = [];

  constructor(private englishMonarchs: EnglishMonarchs) {
    this.monarchs = englishMonarchs.monarchs;
  }
}
