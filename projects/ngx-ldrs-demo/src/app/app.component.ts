import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxLdrsModule } from 'ngx-ldrs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxLdrsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-ldrs-demo';
}
