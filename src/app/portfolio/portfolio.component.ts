import { Component, ElementRef, HostListener, Pipe, PipeTransform } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


// Define la interfaz para representar la estructura del objeto
interface ApiResponse {
  status: string;
  data: Array<{
    lang: string;
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
    lang: string;
    logo: string;
    title: string;
    description: string;
    link: string;
  }>;
}

@Component({
  standalone: true,
  imports: [ RouterModule, CommonModule, TranslateModule],
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

export default class PortfolioComponent{

  public responseData: ApiResponse = {
    status: "success",
    data: [
      {
        lang: "en",
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
        lang: "en",
        logo: "/assets/images/brands/tecno_aplicada.svg",
        job: "PHP Developer",
        date: "December 2019 - March 2020",
        activities: [
          "Development of backend services for <span class='font-bold text-orange-400'>SOAP</span> and <span class='font-bold text-orange-400'>RESTful</span> APIs.",
          "Development of <span class='font-bold text-orange-400'>web applications</span> and administration panels.",
          "Performing <span class='font-bold text-orange-400'>unit testing</span> in Laravel and Angular.",
          "Using agile <span class='font-bold text-orange-400'>Scrum</span> methodology",
        ]
      },
      {
        lang: "en",
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
        lang: "en",
        logo: "/assets/images/brands/novetec.png",
        job: "Web developer",
        date: "March 2016 - Octuber 2019",
        activities: [
          "Develop <span class='font-bold text-orange-400'>web applications</span>.",
          "Develop <span class='font-bold text-orange-400'>Restful API</span> services.",
          "Develop <span class='font-bold text-orange-400'>multimedia</span> content for training."
        ]
      },
      {
        lang: "es",
        logo: "/assets/images/brands/virket_logo.svg",
        job: "Desarrollador Backend",
        date: "Septiembre 2020 - Actual",
        activities: [
          "Creación de <span class='font-bold text-orange-400'>API's</span> para la interconexión de múltiples servicios.",
          "Desarrollo <span class='font-bold text-orange-400'>microservicios</span> para la automatización de tareas y optimización de procesos.",
          "Desarrollo de <span class='font-bold text-orange-400'>apps web</span> y paneles administrativos (cms, dashboard, etc).",
          "Desarrollo de aplicaciones web responsivas <span class='font-bold text-orange-400'>amigables para el usuario</span>.",
          "Escritura de librerias y componentes <span class='font-bold text-orange-400'>reutilizables</span> para uso futuro.",
          "<span class='font-bold text-orange-400'>Optimización</span> de  applicaiones en rendimiento, tamaño y la escalabilidad.",
          "Uso de la metodología <span class='font-bold text-orange-400'>Scrum</span> para gestionar el desarrollo de proyectos.",
        ]
      },
      {
        lang: "es",
        logo: "/assets/images/brands/tecno_aplicada.svg",
        job: "Desarrollador PHP",
        date: "Diciembre 2019 - Marzo 2020",
        activities: [
          "Desarrollo de servicios backend API <span class='font-bold text-orange-400'>RESTful</span> y <span class='font-bold text-orange-400'>SOAP</span>.",
          "Desarrollo de <span class='font-bold text-orange-400'>aplicaciones web</span> y paneles de administración.",
          "Realización de <span class='font-bold text-orange-400'>pruebas unitarias</span> en Laravel y Angular.",
          "Uso de metodología ágil <span class='font-bold text-orange-400'>Scrum</span>.",
        ]
      },
      {
        lang: "es",
        logo: "/assets/images/brands/weplaycode.png",
        job: "Desarrollador Fullstack",
        date: "Noviembre 2018 - Noviembre 2019",
        activities: [
          "Desarrollo de multiples paneles administrativos para <span class='font-bold text-orange-400'>aplicaciones web</span>.",
          "Desarrollo backend de servicios <span class='font-bold text-orange-400'>API Restful</span>.",
          "Desarrollo de <span class='font-bold text-orange-400'>Apps en linea</span> para simuladores 3D (Unity 3D).",
          "Realización de <span class='font-bold text-orange-400'>pruebas unitarias</span>.",
          "Administracion de servidores <span class='font-bold text-orange-400'>VPS</span>."
        ]
      },
      {
        lang: "es",
        logo: "/assets/images/brands/novetec.png",
        job: "Desarrollador Web",
        date: "Marzo 2016 - Octubre 2019",
        activities: [
          "Desarrollo de <span class='font-bold text-orange-400'>aplicaciones web</span>.",
          "Desarrollo de servicios <span class='font-bold text-orange-400'>API Restful</span>.",
          "Desarrollo de contenido <span class='font-bold text-orange-400'>multimedia</span> para capacitación."
        ]
      }
    ]
  };

  public projectsData: ProjectsResponse = {
    status: "success",
    data: [
      {
        lang: 'en',
        logo: "/assets/images/projects/ytuquieneres.jpg",
        title: "Linkcards Website",
        description: "Website of Multi User Link Cards",
        link: "https://ytuquieneres.com"
      },
      {
        lang: 'en',
        logo: "/assets/images/projects/compuxt.jpg",
        title: "Computer Ecommerce Website",
        description: "A Powerful Ecomerce Platform",
        link: "https://compuxt.com"
      },
      {
        lang: 'en',
        logo: "/assets/images/projects/acupunturareyes.jpg",
        title: "Acupunture Reyes Webpage",
        description: "A Powerful Website (SPA)",
        link: "https://acupunturareyes.com/"
      },
      {
        lang: 'es',
        logo: "/assets/images/projects/ytuquieneres.jpg",
        title: "Linkcards Website",
        description: "Sitio web de Tarjetas de Enlace multiusuario",
        link: "https://ytuquieneres.com"
      },
      {
        lang: 'es',
        logo: "/assets/images/projects/compuxt.jpg",
        title: "Computer Ecommerce Platform",
        description: "Una poderosa Plataforma Ecommerce",
        link: "https://compuxt.com"
      },
      {
        lang: 'es',
        logo: "/assets/images/projects/acupunturareyes.jpg",
        title: "Página Web de Acupuntura Reyes",
        description: "Una Poderosa Página Web (SPA)",
        link: "https://acupunturareyes.com/"
      }
    ]
  };

  public stacks: string[] =['html5','css3','javascript','typescript','angularX','react','vue','laravel','node-js','codeigniter','php','tailwind','bootstrap','mysql','postgresql','mongo','git','linux','docker', 'digital-ocean','vs-code'];

  public menuSelected: string = 'home';

  public langSelected: string = 'en';

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {
    // this.responseData.data[0].job
    console.log(this.responseData.data[0].job);
    this.setAppLang();
  }

  ngOnInit(): void {
    this.menuSelected = 'home';

    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
      backToTopButton.addEventListener("click", () => {
        this.scrollTo(document.documentElement);
      });
    }
  }

  setAppLang():void{
    this.translate.setDefaultLang( this.langSelected );
    // this.translate.use(this.translate.getBrowserLang()!);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.langSelected = lang;
  }

  getTranslation(key: string): string {
    return this.translate.instant(key);
  }

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
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
    this.menuSelected = target.substr(1);
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


