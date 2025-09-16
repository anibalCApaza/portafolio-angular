import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  imports: [],
  templateUrl: './project-item.html',
  styleUrl: './project-item.css',
})
export class ProjectItem {
  @Input() title: string = '';
  @Input() description: string = '';
}
