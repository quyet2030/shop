import { Component, OnInit } from '@angular/core';
import { EnvService } from '@tuongantech/config/shop';
import { ILanguage } from '../../../../shared/shared/src/lib/interfaces';

@Component({
  selector: 'tuongantech-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {
  languages: ILanguage[];
  selectedLang: ILanguage;
  constructor( private envServ: EnvService) {
    this.languages = this.envServ.languages;
    this.selectedLang = this.languages.find( l => l.isDefault);
   }

  ngOnInit(): void {}
  changeLang(l: ILanguage) {
    window.location.href = l.href + window.location.pathname;
  }

}
  