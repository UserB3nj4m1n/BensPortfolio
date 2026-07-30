import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsModalComponent } from '../projects-modal/projects-modal.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ProjectsModalComponent],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  isModalOpen = signal(false);

  constructor(public languageService: LanguageService, public projectsService: ProjectsService) {}

  displayProjects = computed(() => {
    const p = this.projectsService.mainProjects();
    return [...p, ...p, ...p];
  });
}
