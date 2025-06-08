import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {
  @Input() image!: Image;
  @ViewChild('cardEl') cardEl!: ElementRef;

  isVisible = false;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 }
    );

    if (this.cardEl?.nativeElement) {
      observer.observe(this.cardEl.nativeElement);
    }
  }

  goToDetail(): void {
    this.router.navigate(['/image', this.image.id]);
  }
}
