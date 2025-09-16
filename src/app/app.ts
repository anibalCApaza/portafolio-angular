import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillItem } from './skill-item/skill-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SkillItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portafolio-angular');
}
