import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '../models/image.interface'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Image[]> {
    return this.http.get<any>(environment.apiUrl).pipe(
      map(response => Object.values(response.data) as Image[]) 
    );
  }

  getImageById(id: string): Observable<Image> {
    return this.http.get<any>(environment.apiUrl).pipe(
      map(response => response.data[id] as Image)
    );
  }
}
