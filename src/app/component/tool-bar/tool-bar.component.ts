import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navigateToReservation(){
    this.router.navigate([''])
  }

  navigateToPhotos(){
    this.router.navigate(['/photos'])
  }

}
