import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
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
    <div *ngIf="isRegistered">
      <ldrs-tag [size]="size" [speed]="speed" [color]="color"></ldrs-tag>
    </div>
  `,
  styles: ``
})
export class NgxLdrsComponent {

  @Input()
  ldrsType: LdrsType = 'bouncy';
  @Input()
  size: number = 45;
  @Input()
  speed: number = 1.75;
  
  @Input()
  color: string = 'black';

  isRegistered = false;

  constructor() {
    this.registerLoader(this.ldrsType);
  }

  registerLoader(type: LdrsType): void {
    const animation = ldrsRegistry[type];
    if (animation) {
      animation.register('ldrs-tag');
      this.isRegistered = true;
    } else {
      console.warn(`Animation type "${type}" is not recognized.`);
    }
  }
}
