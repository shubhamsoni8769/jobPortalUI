import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {

  constructor(
    private dialog:MatDialogRef<UtilityComponent>
  ) { }

  ngOnInit(): void {
  }
  closeDialog(e){
    
    this.dialog.close(e.target.value)

  }

}
