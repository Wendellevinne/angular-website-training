import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterOutlet,
    HomeComponent,
    CarrouselComponent,
    PresentationComponent,
    LoginFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-website';
}
