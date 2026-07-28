import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { LoadingService } from './services/loading';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(
    public loadingService: LoadingService
  ) {}

}
