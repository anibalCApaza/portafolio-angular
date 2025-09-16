import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  imports: [],
  templateUrl: './skill-item.html',
  styleUrl: './skill-item.css',
})
export class SkillItem {
  @Input() name: string = '';
  @Input() icon: string = '';
}
