import { Component, Input } from '@angular/core';
import { Image } from 'src/app/modelss/image.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() images: Image[] = [];

  constructor(private router: Router) {}

  goToDetail(id: string) {
    this.router.navigate(['/image', id]);
  }
}
