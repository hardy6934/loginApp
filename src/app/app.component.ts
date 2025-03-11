import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './features/auth/components/login/login.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor( ) { } 
 
}
