// add-collection-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-collection-dialog',
  templateUrl: 'add-collection-dialog.component.html',
  styleUrls: ['./add-collection-dialog.component.css']
})
export class AddCollectionDialog {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCollectionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      collectionName: [data.name, [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
