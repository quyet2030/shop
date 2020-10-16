// import { Injectable } from '@angular/core';
import { ILanguage, ITheme } from '@tuongantech/shared/shared';
// @Injectable({ providedIn: 'root'})
export class EnvService {
  debugMode = true;
  themes: ITheme[] = [];
  languages: ILanguage[];
}
