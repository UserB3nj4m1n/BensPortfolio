import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend Development',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      name: 'Infrastructure & Backend',
      skills: ['Linux (Ubuntu)', 'Google Cloud Platform (GCP)', 'Git', 'Python', 'DNS Management']
    }
  ];
}
