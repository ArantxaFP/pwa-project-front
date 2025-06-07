import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/modelss/image.interface';
import { ImagesService } from 'src/app/servicess/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  loading: boolean = true;
  viewMode: 'cards' | 'table' = 'cards'; 

  constructor(private imagesService: ImagesService) {}

  //ngOnInit(): void {
    //this.loading = true;

    // Simularia 2 segons de temps càrrega per apreciar el spinner al frontal clarament però ho comento per el lighthouse
    // setTimeout(() => {
    //   this.imagesService.getAllImages().subscribe((images) => {
    //     this.images = images;
    //     this.loading = false;
    //   });
    // }, 2000);
  //}

  ngOnInit(): void {
    this.imagesService.getAllImages().subscribe((images) => {
      this.images = images;
      this.loading = false;
    });
  }

  changeView(mode: 'cards' | 'table') {
    this.viewMode = mode;
  }
}
