import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  projects = [
    {
      title: 'Cloud & Linux Administrator',
      description: 'Kompletné nasadzovanie a správa herných serverov v GCP, administrácia Ubuntu Linux, sieťová konfigurácia, správa DNS cez Namecheap.',
      tags: ['Linux', 'GCP', 'DNS', 'Networking'],
      image: 'https://picsum.photos/id/1060/800/600',
      github: '#'
    },
    {
      title: 'Junior Full-Stack Developer',
      description: 'Krátkodobý intenzívny projekt a workshop zameraný na full-stack vývoj pod mentoringom inžinierov zo Siemensu (Python, Angular).',
      tags: ['Angular', 'Python', 'Full-Stack', 'Siemens'],
      image: 'https://picsum.photos/id/180/800/600',
      github: '#'
    },
    // Adding duplicated items conceptually or manually for infinite carousel if needed,
    // though the HTML can just repeat the array.
  ];

  // We duplicate the array to easily create the infinite scroll effect
  get displayProjects() {
    return [...this.projects, ...this.projects, ...this.projects];
  }
}
