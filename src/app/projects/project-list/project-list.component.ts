import { Component } from '@angular/core';
import { Project, ProjectComponent } from '../project/project.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectComponent, NgFor],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects:Project[] = [
    {title: 'Issuetracker', description: '', url:'https://github.com/dnowak94/issuetracker', images:[]}
  ];
}
