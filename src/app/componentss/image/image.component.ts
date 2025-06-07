import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/modelss/image.interface';
import { ImagesService } from 'src/app/servicess/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image?: Image;
  showDetails = false; 

  constructor(
    private imagesService: ImagesService,          // per accedir al servei
    private activatedRoute: ActivatedRoute,        // per llegir l'id
    private router: Router                         // per redirigir si no hi ha imatge
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (!identifier) {
      this.router.navigateByUrl('/');
      return;
    }

    this.imagesService.getImageById(identifier).subscribe((image) => {
      if (!image) {
        this.router.navigateByUrl('/');
        return;
      }

      this.image = image;
      console.log('Image --> ', this.image);
    });
  }

  toggleDetails() { 
    this.showDetails = !this.showDetails;
  }
}