import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

// Define la interfaz para representar la estructura del objeto
interface ApiResponse {
  status: string;
  data: Array<{
    logo: string;
    job: string;
    date: string;
    activities: string[];
  }>;
}

// Define la interfaz para representar la estructura del objeto
interface ProjectsResponse {
  status: string;
  data: Array<{
    logo: string;
    title: string;
    description: string;
    link: string;
  }>;
}

@Component({
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './portfolio.component.html',
  styles: `
  .glow{
    position: fixed;
    top: 15em;
    left: 50%;
    width: 40em;
    max-width: 100%;
    height: 20em;
    border-radius: 30%;
    display: block;
    background: radial-gradient(#460631aa 20%,#d886c455 100%);
    transform: translate(-50%);
    will-change: transform;
    filter: blur(100px);
    z-index: -1;
  }
  `
})
export default class PortfolioComponent {

  public responseData: ApiResponse = {
    status: "success",
    data: [
      {
        logo: "/assets/images/brands/virket_logo.svg",
        job: "Backend Developer",
        date: "September 2020 - Currently Working",
        activities: [
          "Creation of <span class='font-bold text-orange-400'>API's</span> for the interconnection of multiple services.",
          "Develop <span class='font-bold text-orange-400'>microservices</span> for task automation and process optimization.",
          "Develop panel administration <span class='font-bold text-orange-400'>web apps</span> (cms, dashboard, etc).",
          "Develop high-quality, responsive, and <span class='font-bold text-orange-400'>user-friendly</span> web applications.",
          "Write <span class='font-bold text-orange-400'>reusable</span> libraries and components for future use.",
          "<span class='font-bold text-orange-400'>Optimize</span> applications performance, size and scalability.",
          "Use of <span class='font-bold text-orange-400'>Scrum</span> methodology to manage project development",
        ]
      },
      {
        logo: "/assets/images/brands/tecno_aplicada.svg",
        job: "PHP Developer",
        date: "december 2019 - March 2020",
        activities: [
          "Development of backend services for <span class='font-bold text-orange-400'>SOAP</span> and <span class='font-bold text-orange-400'>RESTful</span> APIs.",
          "Develop panel administration <span class='font-bold text-orange-400'>web apps</span>.",
          "Performing <span class='font-bold text-orange-400'>unit testing</span> in Laravel and Angular.",
          "Using agile scrum methodology",
        ]
      },
      {
        logo: "/assets/images/brands/weplaycode.png",
        job: "Fullstack Developer",
        date: "November 2018 - November 2019",
        activities: [
          "Develop multiple dashboard management <span class='font-bold text-orange-400'>web applications</span>.",
          "Backend development of <span class='font-bold text-orange-400'>Restful API</span> services.",
          "Develop <span class='font-bold text-orange-400'>Apps</span> for 3D simulators (Unity 3D).",
          "Performing <span class='font-bold text-orange-400'>unit tests</span>.",
          "<span class='font-bold text-orange-400'>VPS</span> server administration"
        ]
      },
      {
        logo: "/assets/images/brands/novetec.png",
        job: "Web developer",
        date: "March 2016 - Octuber 2019",
        activities: [
          "Develop <span class='font-bold text-orange-400'>web applications</span>.",
          "Develop <span class='font-bold text-orange-400'>Restful API</span> services.",
          "Develop <span class='font-bold text-orange-400'>multimedia</span> content for training"
        ]
      }
    ]
  };

  public projectsData: ProjectsResponse = {
    status: "success",
    data: [
      {
        logo: "/assets/images/projects/ytuquieneres.jpg",
        title: "Linkcards Website",
        description: "pagina de micrositio web linkcards",
        link: "https://ytuquieneres.com"
      },
      {
        logo: "/assets/images/projects/compuxt.jpg",
        title: "Computer Ecommerce Website",
        description: "A powerful website",
        link: "https://compuxt.com"
      },
      {
        logo: "/assets/images/projects/acupunturareyes.jpg",
        title: "Acupunture Reyes Webpage",
        description: "A powerful website",
        link: "https://acupunturareyes.com/"
      }
    ]
  };

  public stacks: string[] =['html5','css3','javascript','typescript','angularX','react','vue','laravel','node-js','codeigniter','php','tailwind','bootstrap','mysql','postgresql','mongo','git','linux','docker', 'digital-ocean','vs-code'];

  constructor() {
    // this.responseData.data[0].job
    console.log(this.responseData.data[0].job);

  }

  ngOnInit(): void {

    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
      backToTopButton.addEventListener("click", () => {
        this.scrollTo(document.documentElement);
      });
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


  // Menu Scroll
  scrollToElement(event: Event, target: string) {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element instanceof HTMLElement) { // Check if element is of type HTMLElement
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  // Menu Hamburger
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


}


