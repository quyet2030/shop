import { FactoryProvider, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvService } from './env.service';
import { EnvServiceFactoy } from './env-service.factory';

const envServiceProvider: FactoryProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactoy,
  deps: []
}
@NgModule({
  imports: [CommonModule],
  providers: [envServiceProvider]
})
export class ConfigShopModule {}
