import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  constructor(public languageService: LanguageService) {}

  projects = computed(() => [
    {
      title: this.languageService.t().PROJ_1_TITLE,
      description: this.languageService.t().PROJ_1_DESC,
      tags: ['Linux', 'GCP', 'DNS', 'Networking'],
      image: 'beyond_banner.jpg',
      github: 'https://github.com/UserB3nj4m1n/beyondsmp-web',
      demo: 'https://beyondsmp.online'
    },
    {
      title: this.languageService.t().PROJ_2_TITLE,
      description: this.languageService.t().PROJ_2_DESC,
      tags: ['Angular', 'Python', 'Full-Stack', 'Siemens'],
      image: 'clinician.png',
      github: 'https://github.com/UserB3nj4m1n/clinical-dashboard',
      demo: 'https://siemens.bensport.space'
    },
    {
      title: this.languageService.t().PROJ_3_TITLE,
      description: this.languageService.t().PROJ_3_DESC,
      tags: ['Angular 18', 'Tailwind', 'Signals'],
      image: 'https://picsum.photos/id/0/800/600',
      github: '#',
      demo: '#'
    }
  ]);

  displayProjects = computed(() => {
    const p = this.projects();
    return [...p, ...p, ...p];
  });
}
