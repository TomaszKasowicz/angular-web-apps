import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <h1>Home</h1>
    <button>Native</button>
    <button mat-raised-button>Click me</button>
    <button mat-raised-button>Basic</button>
    <button mat-raised-button color="primary">Primary</button>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
