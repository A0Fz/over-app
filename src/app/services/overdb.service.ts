import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { Observable, observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})

export class OverdbService {
  
  private URL_API:string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getTanque():Observable<any>{
    return this.http.get(`${this.URL_API}/tanque`,httpOptions);
  }
 //Ação de clicar e buscar os dados do personagem
  getTanqueId(id):Observable<any>{
    return this.http.get(`${this.URL_API}/tanque/${id}`,httpOptions);
  }
//Ação de clicar e buscar os dados do personagem
 //Ação de clicar e buscar os dados do personagem
 getDanoId(id):Observable<any>{
  return this.http.get(`${this.URL_API}/dano/${id}`,httpOptions);
}
//Ação de clicar e buscar os dados do personagem
 //Ação de clicar e buscar os dados do personagem
 getSupId(id):Observable<any>{
  return this.http.get(`${this.URL_API}/suporte/${id}`,httpOptions);
}
//Ação de clicar e buscar os dados do personagem
  buscaTanque(param:string){
    const url = `${this.URL_API}/tanque/${param}`;
    return this.http.get<any>(url).pipe(
      tap(_=>console.log(`O parametro requisitado foi ${param}`))
    )
  }

  getDano():Observable<any>{
    return this.http.get(`${this.URL_API}/dano`,httpOptions);
  }

  buscaDano(param:string){
    const url = `${this.URL_API}/dano?${param}`;
    return this.http.get<any>(url).pipe(
      tap(_=>console.log(`O parametro requisitado foi ${param}`))
    )
  }

  getSuporte():Observable<any>{
    return this.http.get(`${this.URL_API}/suporte`,httpOptions);
  }

  buscaSuporte(param:string){
    const url = `${this.URL_API}/suporte?${param}`;
    return this.http.get<any>(url).pipe(
      tap(_=>console.log(`O parametro requisitado foi ${param}`))
    )
  }

}
