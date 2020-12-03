import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { broadcastCVData } from '../Model/brodcastCVdata';
import { BrodcastCVService } from '../Services/brodcast-cv.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UtilityComponent } from '../utility/utility.component';
import { MatSnackBar } from '@angular/material/snack-bar';



 const states = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

 @Component({
  selector: 'app-broadcast-cv',
  templateUrl: './broadcast-cv.component.html',
  styleUrls: ['./broadcast-cv.component.css']
})
export class BroadcastCVComponent implements OnInit {
  resume: string | ArrayBuffer;
   public showModal;
  closeResult = '';
  myForm: FormGroup;
  accountValidationMessage: any;
  brodcastCVdata: broadcastCVData;
  formSubmitted: boolean = false;


    constructor(private formBuilder: FormBuilder,
    private brodcastService: BrodcastCVService,
    private dialog:MatDialog,
    private snackbars: MatSnackBar,
    ) { }
 

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'email': ['', [Validators.required, Validators.email]],
      'phoneNo': [''],
      'location': [''],
      'JobFunction': [''],
      'ExpectedCTC': [''],
      'experienced': [''],
      'noticePeriod': [''],
      'file': ['']
    })
  
    
  }
  snackbar(msg){
    this.snackbars.open(msg,'ok',{duration:5000})
  }

  loadPdf(e) {
    
    var file = e.target.files[0]
    let reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result);
      this.resume = e.target.result

    }
    reader.readAsArrayBuffer(file)

  }
  register() {
    console.log(this.myForm.controls);
    
    this.dialog.open(UtilityComponent,{
      width:'350px'
    }).afterClosed().subscribe(response =>{
      console.log(response);
      
      console.log(this.myForm.controls);
      var exp
      if(this.myForm.controls.experienced.value === "true"){
        exp= true
      }else{
        exp= false
      }
      this.brodcastCVdata = new broadcastCVData(this.myForm.controls.name.value, this.myForm.controls.email.value, this.myForm.controls.phoneNo.value,
        this.myForm.controls.location.value, this.myForm.controls.JobFunction.value, this.myForm.controls.ExpectedCTC.value, exp,
        this.myForm.controls.noticePeriod.value, this.resume
      )
      console.log(this.brodcastCVdata);
      this.formSubmitted = true;
      this.brodcastService.setBroadcastData(this.brodcastCVdata).subscribe((data)=>{
        if(response == "yes"){
          this.snackbar("An OTP process is initiated")
        }else{
          this.snackbar("Thank you can for continued job search.")
        }
        console.log(data);
      },error=>{
        this.snackbar("error occured")
      });
      
    })
   
  }
  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 1 ? []
      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

}
