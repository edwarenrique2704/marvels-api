import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,  pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

const URL_API = environment.apiAvenger;
const KEY_PUBLIC = environment.public_key;
const HASH = environment.hash;

@Injectable({
  providedIn: 'root'
})
export class ServiciñoService {



  

  constructor(private http: HttpClient) { }

  getCharacters():Observable<any>{

    return this.http.get<any>(`${URL_API}/characters?ts=1&apikey=${KEY_PUBLIC}&hash=${HASH}`).pipe(map((data:any)=>data.data.results));

  }

  getCharacter(id: string):Observable<any>{

    return this.http.get(`${URL_API}/characters/${id}?ts=1&apikey=${KEY_PUBLIC}&hash=${HASH}`).pipe(map((data:any)=>data.data.results));

  }
}
