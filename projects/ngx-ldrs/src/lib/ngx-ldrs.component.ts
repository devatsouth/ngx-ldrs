import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { ldrsRegistry, LdrsType } from './ldrs.registry';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-ldrs',
  standalone: true,
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
      <ldrs-tag [size]="size" [speed]="speed" [color]="color"></ldrs-tag>
  `,
  styles: ``
})
export class NgxLdrsComponent implements OnInit {

  @Input()
  ldrsType: LdrsType = 'helix';
  @Input()
  size: number = 45;
  @Input()
  speed: number = 1.75;

  @Input()
  color: string = 'black';

  constructor() {
    
  }
  ngOnInit(): void {
    const animation = ldrsRegistry[this.ldrsType];
    if (animation) {
      animation.register('ldrs-tag');
    } else {
      console.warn(`Animation type "${this.ldrsType}" is not recognized.`);
    }
  }

}
