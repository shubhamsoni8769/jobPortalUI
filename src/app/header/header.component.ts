import { Component, OnInit } from '@angular/core';
// import { MatdialogRef } from  '@angular/material'
import { BroadcastCVComponent } from '../broadcast-cv/broadcast-cv.component';
import { ModalModule } from 'ngb-modal';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { broadcastCVData } from '../Model/brodcastCVdata';
import { BrodcastCVService } from '../Services/brodcast-cv.service';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  resume: string | ArrayBuffer;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) {}
  public showModal;
  closeResult = '';
  myForm: FormGroup;
  accountValidationMessage: any;
  brodcastCVdata: broadcastCVData;
  formSubmitted: boolean = false;

  ngOnInit(): void {
  
  }
  goToBroadcastForm(e){
    e.preventDefault();    
    this.router.navigate(['register'])
  }
}
