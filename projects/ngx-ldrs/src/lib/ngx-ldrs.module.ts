import { NgModule } from '@angular/core';
import { NgxLdrsComponent } from 'ngx-ldrs';
import { NgxLdrsService } from './ngx-ldrs.service';



@NgModule({
  imports: [
    NgxLdrsComponent
  ],
  exports: [
    NgxLdrsComponent
  ],
  providers: [
    NgxLdrsService
  ]
})
export class NgxLdrsModule { }
