import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
// import { ThemePickerModule} from '../../../../theme-picker/src/lib/theme-picker.module';
import { ThemePickerModule} from '@tuongantech/theme-picker';
import { LanguagePickerModule } from '@tuongantech/language-picker';
import { EmailInputModule } from '@tuongantech/email-input';

@NgModule({
  imports: [ CommonModule, 
    ThemePickerModule,
    LanguagePickerModule,
    EmailInputModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LandingComponent} ]),
  ],
  declarations: [LandingComponent] })
export class HomeFeatureModule {}
