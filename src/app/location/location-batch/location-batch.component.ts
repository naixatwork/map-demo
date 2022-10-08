import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-location-batch',
  templateUrl: './location-batch.component.html',
  styleUrls: ['./location-batch.component.scss']
})
export class LocationBatchComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: [{value: 'cafe'}, [Validators.required]]
    })

    this.createForm();
  }

  ngOnInit(): void {
  }

  public createForm(): void {

  }
}
