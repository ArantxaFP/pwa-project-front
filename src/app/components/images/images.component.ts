import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  visibleImages: Image[] = [];
  itemsPerPage = 21;
  currentPage = 1;
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
      this.loadMore();  
      this.loading = false;
    });

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  loadMore() {
    const start = 0;
    const end = this.currentPage * this.itemsPerPage;
    this.visibleImages = this.images.slice(0, end);
    this.currentPage++;
  }

  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      this.visibleImages.length < this.images.length
    ) {
      this.loadMore();
    }
  }

  changeView(mode: 'cards' | 'table') {
    this.viewMode = mode;
  }
}