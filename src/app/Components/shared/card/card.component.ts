import { Component, Input } from '@angular/core';
import { Image } from 'src/app/Models/image.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image!: Image;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/image', this.image.id]);
  }
}
