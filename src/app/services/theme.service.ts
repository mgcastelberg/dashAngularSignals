import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private userTheme: string | null = localStorage.getItem('theme') || 'light'; // Default theme is light

  constructor() { }

  getTheme(): string {
    return this.userTheme ?? 'dark';
  }

  toggleTheme(): void {
    if (this.userTheme === 'dark') {
      this.userTheme = 'light';
    } else {
      this.userTheme = 'dark';
    }
    console.log(this.userTheme);
    localStorage.setItem('theme', this.userTheme);
  }

}
