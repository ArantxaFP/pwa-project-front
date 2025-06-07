import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './componentss/image/image.component';
import { ImagesComponent } from './componentss/images/images.component';

const routes: Routes = [
  { path: '', component: ImagesComponent },
  { path: 'image/:id', component: ImageComponent },
  { path: '**', component: ImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
