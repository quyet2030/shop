import { Component, OnInit } from '@angular/core';
import { EnvService } from '@tuongantech/config/shop';
import { ITheme } from '@tuongantech/shared/shared';
import { StyleManagerService } from '../style-manager.service';

@Component({
  selector: 'tuongantech-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  matMenuTriggerFor: string;
  public themes: ITheme[];
  selectedTheme: ITheme; 
  constructor( private env: EnvService, private styleMag: StyleManagerService) {
    // console.log(JSON.stringify(env));
    this.themes = env.themes;
    this.selectedTheme = this.themes.find( t => t.isDefault)   }
  ngOnInit(): void {}
  changeTheme(t: ITheme) { 
    this.selectedTheme = t;
    this.styleMag.changeTheme(t); }
}
