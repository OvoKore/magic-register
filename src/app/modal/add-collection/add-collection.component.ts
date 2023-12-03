import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent {
  form: FormGroup;
  formattedCollectionName: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      collectionName: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z0-9]*$/)]]
    });
  }

  applyMask() {
    if (this.form.controls['collectionName'].value.length > 10) {
      this.form.controls['collectionName'].setValue(this.form.controls['collectionName'].value.slice(0, 10));
    }
  }

  onNoClick(): void {
    this.activeModal.dismiss('Cancelar');
  }

  onAddClick(): void {
    if (this.form.valid) {
      this.activeModal.close(this.form.value.collectionName);
    }
  }
}
