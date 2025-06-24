import { isPlatformBrowser, CommonModule } from '@angular/common';
import { PLATFORM_ID, AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('overlayFade', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('200ms ease-out', style({ opacity: 1 })),
        query('@staggerFade', [
          stagger(200, animateChild())
        ])
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('staggerFade', 
      [transition(':enter', 
        [style({opacity: 0}),
          animate('700ms ease-out', 
            style ({opacity: 1}))
        ])])
  ]

})
export class HomeComponent implements AfterViewInit { 


  


  



  // make the hight of project container = to the highest
  @ViewChildren('projectRef') projectRefs!: QueryList<ElementRef>;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    

   

    ngAfterViewInit() {
      this.equalizeHeights();

      if (isPlatformBrowser(this.platformId)) {
        window.addEventListener('resize', () => this.equalizeHeights());
      }

      

     

  

      





      
      
    }

   
   





    // make the hight of project container = to the highest

    equalizeHeights() {
      setTimeout(() => {
        let maxHeight = 0;

        
        this.projectRefs.forEach(ref => {
          ref.nativeElement.style.height = 'auto';
        });

        
        this.projectRefs.forEach(ref => {
          const height = ref.nativeElement.offsetHeight;
          if (height > maxHeight) maxHeight = height;
        });

        
        this.projectRefs.forEach(ref => {
          ref.nativeElement.style.height = `${maxHeight}px`;
        });
      });
  }


  











  // isImageShow = false;

  // showImage() {
  //   this.isImageShow = true
  // }

  // hideImage(){
  //   this.isImageShow = false
  // }

  // 

  // start: show software prof image on hover

  isDesktop = false;

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
          this.isDesktop = window.innerWidth > 1024;
        }
    }

  activeRow: number | null = null;

  showImage(index: number): void {
    if (this.isDesktop) {
      this.activeRow = index;
    }
  }


  hideImage(): void {
    if (this.isDesktop) {
      this.activeRow = null;
    }
  }

  // finished: show software prof image on hover



  // start: open and close casestudy

    // tell which casestudy to open

    selectedCasestudy: number | null = null;

  
    // on click

    toggleCaseStudy(index: number | null): void {
      this.selectedCasestudy = index;

      if (isPlatformBrowser(this.platformId)){

      if (index !== null) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }   }
    }

  // finish: open and close casestudy



  

}
