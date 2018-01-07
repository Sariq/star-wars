import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-character-info-dialog',
  templateUrl: './character-info-dialog.component.html',
  styleUrls: ['./character-info-dialog.component.scss']
})
export class CharacterInfoDialogComponent implements OnInit {

 constructor(
    public dialogRef: MatDialogRef<CharacterInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    console.log(this.data)
  }

    onCloseClick(): void {
    this.dialogRef.close();
  }
}
