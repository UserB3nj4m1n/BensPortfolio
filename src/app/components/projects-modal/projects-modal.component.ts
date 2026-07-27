import { Component, EventEmitter, Output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-modal.component.html'
})
export class ProjectsModalComponent {
  @Output() close = new EventEmitter<void>();

  constructor(public languageService: LanguageService) {}

  mainProjects = computed(() => [
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
      image: 'portfolio.png',
      github: '#',
      demo: '#'
    },
    {
      title: this.languageService.t().PROJ_5_TITLE,
      description: this.languageService.t().PROJ_5_DESC,
      tags: ['Web Dev', 'School Project', 'E-commerce'],
      image: 'mist-game-store.png',
      github: 'https://github.com/martin852147/2025_3AI_5',
      demo: '#' // To be updated when deployed
    }
  ]);

  otherProjects = computed(() => [
    {
      title: this.languageService.t().PROJ_4_TITLE,
      description: this.languageService.t().PROJ_4_DESC,
      tags: ['Minecraft', 'Datapack', 'JSON', 'Modrinth'],
      github: '#', // No GitHub provided, will be hidden if '#' in template
      demo: 'https://modrinth.com/datapack/create-broken-bad-usable-stuff'
    }
  ]);
}
