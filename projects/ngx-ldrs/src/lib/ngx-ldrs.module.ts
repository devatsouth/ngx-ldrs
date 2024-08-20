import { NgModule } from '@angular/core';
import { NgxLdrsService } from './ngx-ldrs.service';
import { NgxLdrsComponent } from './ngx-ldrs.component';

@NgModule({
  imports: [
    NgxLdrsComponent
  ],
  exports: [
    NgxLdrsComponent
  ],
  providers: [
    NgxLdrsService
  ],
})
export class NgxLdrsModule { }
