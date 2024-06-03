import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Image {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  images:Image[];
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project:Project | undefined;
}
