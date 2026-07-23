import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  constructor(public languageService: LanguageService) {}

  skillCategories = computed(() => [
    {
      name: this.languageService.t().SKILLS_CAT_FRONTEND,
      skills: ['Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      name: this.languageService.t().SKILLS_CAT_BACKEND,
      skills: ['Linux (Ubuntu)', 'Google Cloud Platform (GCP)', 'Git', 'Python', 'DNS Management']
    }
  ]);
}
