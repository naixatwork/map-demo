import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-location-batch',
  templateUrl: './location-batch.component.html',
  styleUrls: ['./location-batch.component.scss']
})
export class LocationBatchComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<any>
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: [{value: 'cafe'}, [Validators.required]],
      coordinates: [{lat: null, lng: null}, [Validators.required]],
      imageUrl: [{value: ''}, [Validators.required]]
    })
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    console.log(this.form.value)
  }
}
