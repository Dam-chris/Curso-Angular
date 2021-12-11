import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [
  ]
})
export class ConfirmDialogComponent   
{

  constructor( private dialogRef:MatDialogRef<ConfirmDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Heroe ) 
  {
    dialogRef.disableClose = true;
  }

  delete()
  {
    this.dialogRef.close( true );
  }
  cancel()
  {
    this.dialogRef.close( false );
  }

}
