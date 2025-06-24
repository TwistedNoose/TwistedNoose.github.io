import {  Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule, ViewportScroller, isPlatformBrowser } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';



@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [ 
    trigger('navHighlight', [
      state('active', style({ color: 'black' })),
      state('inactive', style({ color: '#888' })),
      transition('* => *', animate('300ms ease')),
    ])
  ]
  
})
export class AppComponent implements OnInit {
  title = 'portfolioKyle';
  

  constructor(private scroller: ViewportScroller, @Inject(PLATFORM_ID) private platformId: object) {}

  scrollTo(sectionId: string) {
    this.scroller.scrollToAnchor(sectionId);
  }

  activeSection: string = '';

 ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.onScroll();
    
    
    }
  }

  @HostListener('window:scroll', [])

  

  onScroll(): void {
    let scrollY = window.innerHeight / 2;
    let sectionIds = ['about', 'projects', 'myGoal', 'testimonial', 'footer'];
    for (let id of sectionIds) {
      let section = document.getElementById(id);
      if (section) {
        let rect = section.getBoundingClientRect();
        if (rect.top <= scrollY && rect.bottom >= scrollY) {
          this.activeSection = id;
          break
        }
      }
    }
  }

 

 

}



