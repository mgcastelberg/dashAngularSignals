import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent, CommonModule ],
  templateUrl: './portfoliox.component.html',
  styles: ``
})


export default class PortfolioxComponent {
  constructor(
      private elRef: ElementRef,
      private themeService: ThemeService
  ) { }

  ngOnInit(): void {

    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
      backToTopButton.addEventListener("click", () => {
        this.scrollTo(document.documentElement);
      });
    }
  }

  scrollToElement(event: Event, target: string) {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element instanceof HTMLElement) { // Check if element is of type HTMLElement
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollOffset = this.elRef.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    const sections = document.querySelectorAll('.ud-menu-scroll');
    sections.forEach((currLink: Element) => {
      const val = currLink.getAttribute('href');
      if (val) {
        const refElement = document.querySelector(val);
        if (refElement instanceof HTMLElement) { // Check if refElement is of type HTMLElement
          const scrollTopMinus = scrollPosition + 73;
          if (
            refElement.offsetTop <= scrollTopMinus &&
            (refElement.offsetTop + refElement.offsetHeight) > scrollTopMinus
          ) {
            document.querySelector('.ud-menu-scroll.active')?.classList.remove('active');
            currLink.classList.add('active');
          } else {
            currLink.classList.remove('active');
          }
        }
      }
    });

    const ud_header = document.querySelector(".ud-header") as HTMLElement; // Casting to HTMLElement
    const sticky = ud_header?.offsetTop; // Use optional chaining to avoid null error
    const logo = document.querySelectorAll(".header-logo");

    if (sticky && window.pageYOffset > sticky) { // Check if sticky is not null
      ud_header?.classList.add("sticky"); // Use optional chaining to avoid null error
    } else {
      ud_header?.classList.remove("sticky"); // Use optional chaining to avoid null error
    }

    if (logo.length) {
      // === logo change
      logo.forEach((logoItem: Element) => { // Change logoItem type to Element
        const logoImg = logoItem as HTMLImageElement; // Convert to HTMLImageElement to access src property
        if (ud_header?.classList.contains("sticky")) { // Use optional chaining to avoid null error
          logoImg.src = "assets/images/logo/logo.svg";
        } else {
          logoImg.src = "assets/images/logo/logo-white.svg";
        }
      });
    }

    if (document.documentElement.classList.contains("dark") && logo.length && ud_header?.classList.contains("sticky")) { // Use optional chaining to avoid null error
      logo.forEach((logoItem: Element) => { // Change logoItem type to Element
        const logoImg = logoItem as HTMLImageElement; // Convert to HTMLImageElement to access src property
        logoImg.src = "assets/images/logo/logo-white.svg";
      });
    }

    // show or hide the back-to-top button
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) { // Check if backToTop is not null
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        (backToTop as HTMLElement).style.display = "flex"; // Cast to HTMLElement to access style property
      } else {
        (backToTop as HTMLElement).style.display = "none"; // Cast to HTMLElement to access style property
      }
    }




  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    let navbarToggler = document.querySelector("#navbarToggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");
    if (navbarToggler && navbarCollapse) {
      if ((event.target as HTMLElement).id === 'navbarToggler') {
        navbarToggler.classList.toggle("navbarTogglerActive");
        navbarCollapse.classList.toggle("hidden");
      } else {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      }
    }
  }


  scrollTo(element: HTMLElement, to: number = 0, duration: number = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = this.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  // Example usage
  scrollTop() {
    const element = document.documentElement;
    this.scrollTo(element, 0, 1000); // Scroll to top with a duration of 1000 milliseconds
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    return this.themeService.getTheme() === 'dark';
  }

}
