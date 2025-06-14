import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(environment.apiUrl);
  }
  
  getImageById(id: string): Observable<Image> {
    return this.http.get<Image>(`https://picsum.photos/id/${id}/info`);
  }
}
