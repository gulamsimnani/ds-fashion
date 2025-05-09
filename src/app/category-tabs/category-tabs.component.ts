import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-category-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-tabs.component.html'
})
export class CategoryTabsComponent {
  @Input() selectedCategory: string = 'all';
  @Output() categoryChange = new EventEmitter<string>();

  categories: string[] = ['all', 'slim', 'straight', 'tapered','loose'];

  setCategory(category: string) {
    this.categoryChange.emit(category);
  }
}
