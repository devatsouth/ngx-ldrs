import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxLdrsComponent } from 'ngx-ldrs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxLdrsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-ldrs-demo';
}
