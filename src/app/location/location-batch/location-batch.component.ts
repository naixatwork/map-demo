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
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    })
  }
}
