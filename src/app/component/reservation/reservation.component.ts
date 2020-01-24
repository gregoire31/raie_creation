import { Component, OnInit } from '@angular/core';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import { DatePipe} from '@angular/common'
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogErreurComponent } from 'src/app/dialog/dialog-erreur/dialog-erreur.component';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  date = new FormControl(new Date());
  public minDate = new Date
  public dateSelectionnee : string = ""
  public heureSelectionne : number
  public nomClient: string
  public numeroClient: string
  
  public heureJournee = [
    {
      heure: '8h',
      disponible: true
    },
    {
      heure: '9h',
      disponible: true
    },
    {
      heure: '10h',
      disponible: true
    },
    {
      heure: '11h',
      disponible: true
    },
    {
      heure: '12h',
      disponible: true
    },
    {
      heure: '13h',
      disponible: true
    },
    {
      heure: '14h',
      disponible: true
    },
    {
      heure: '15h',
      disponible: true
    },
    {
      heure: '16h',
      disponible: true
    },
    {
      heure: '17h',
      disponible: true
    },
  ]


  constructor(private rendezVousService : RendezVousService, private datePipe : DatePipe, public dialog : MatDialog) { }


  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }



  changeDateCalendrier(valeurDate) {
    this.heureSelectionne = undefined
    
    this.dateSelectionnee = this.datePipe.transform(valeurDate.value,'yyyy-MM-dd')

    for(let i = 0 ; i< this.heureJournee.length; i++){
      this.heureJournee[i] = {heure : this.heureJournee[i].heure, disponible : true}
    }
    
    this.rendezVousService.recupererListeRdv(this.datePipe.transform(this.dateSelectionnee,'yyyy-MM-dd')).subscribe(data => {

      
      

      if(data.data.length> 0 ){
        
        let reservations = data.data[0].reservation;
        
        reservations.forEach(reservation => {
          let heureJournee = this.heureJournee[reservation.heureReservation]
          this.heureJournee[reservation.heureReservation]  = reservation
          reservation.heure = heureJournee.heure
          reservation.disponible = false
          
          
        });

      }
      
      
    })


    
  }

  ngOnInit() {

    let date = new Date

    this.rendezVousService.recupererListeRdv(this.datePipe.transform(date,'yyyy-MM-dd')).subscribe(data => {
      if(data.data.length > 0){

        let reservations = data.data[0].reservation;
        
        reservations.forEach(reservation => {
          let heureJournee = this.heureJournee[reservation.heureReservation]
          this.heureJournee[reservation.heureReservation]  = reservation
          reservation.heure = heureJournee.heure
          reservation.disponible = false
          
        });
      }

    })
    
  }

  selectionHorraire(i){
  this.heureSelectionne = i
  
  }

  reserver() {

    if(this.dateSelectionnee === ""){
      this.dateSelectionnee = this.datePipe.transform(this.minDate,'yyyy-MM-dd')
    }

    if(this.heureSelectionne !== undefined && this.nomClient !== undefined && this.numeroClient !== undefined && this.dateSelectionnee !== undefined){

      this.rendezVousService.ajouterRdv(this.dateSelectionnee,this.heureSelectionne, this.nomClient, this.numeroClient).subscribe(data => {

        let reservations = data.data
          
          reservations.forEach(reservation => {
            let heureJournee = this.heureJournee[reservation.heureReservation]
            this.heureJournee[reservation.heureReservation]  = reservation
            reservation.heure = heureJournee.heure
            reservation.disponible = false
            
          });
      })
    }

    else{
      this.openDialog()
    }
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogErreurComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
