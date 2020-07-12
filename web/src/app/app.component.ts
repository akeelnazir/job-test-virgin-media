import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Contact Engine</span>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
