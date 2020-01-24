import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http : HttpClient) { }



  ajouterRdv(date,heure,nomClient,numeroClient){
    const data = {
      date,
      heure,
      nomClient,
      numeroClient
    }
    return this.http.post<any>('http://localhost:3000/reservation/addReservation', data);
  }

  recupererListeRdv(date){
    const data = {
      date
    }
    return this.http.post<any>('http://localhost:3000/reservation/allReservations', data);
  }


}
