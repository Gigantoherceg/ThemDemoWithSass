import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: any) {}
  
  ngOnInit(): void {
    // Alapértelmezett a világos téma
   
    if (isPlatformBrowser(this.platformId)) {
      // Alapértelmezett téma beállítása
      this.renderer.addClass(document.body, 'light-theme');
    }
  }
  
  toggleTheme(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      const checkbox = event.target as HTMLInputElement;
      if (checkbox.checked) {
        this.renderer.removeClass(document.body, 'light-theme');
        this.renderer.addClass(document.body, 'dark-theme');
      } else {
        this.renderer.removeClass(document.body, 'dark-theme');
        this.renderer.addClass(document.body, 'light-theme');
      }
    }
  }
  
}
