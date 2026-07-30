import { Component, EventEmitter, Output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-modal.component.html'
})
export class ProjectsModalComponent {
  @Output() close = new EventEmitter<void>();

  constructor(public languageService: LanguageService, public projectsService: ProjectsService) {}

  get mainProjects() {
    return this.projectsService.mainProjects;
  }

  get otherProjects() {
    return this.projectsService.otherProjects;
  }
}
