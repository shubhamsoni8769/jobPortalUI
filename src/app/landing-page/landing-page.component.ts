import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrodcastCVService } from '../Services/brodcast-cv.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor( private snackbars: MatSnackBar, private broadcast:BrodcastCVService) { }

  ngOnInit(): void {
  
  }
  snackbar(){
    console.log("hello");
    this.snackbars.open("hello","yes or no")
  }

}
