import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {LocationBatchUpdateStrategyService} from "./locationBatchStrategy/location-batch-update.strategy.service";
import {LocationBatchCreateStrategyService} from "./locationBatchStrategy/location-batch-create.strategy.service";
import {LocationBatchBaseStrategy} from "./locationBatchStrategy/locationBatch.base.strategy";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LocationBatchDialogService} from "./location-batch-dialog.service";

@Component({
  selector: 'app-location-batch',
  templateUrl: './location-batch.component.html',
  styleUrls: ['./location-batch.component.scss']
})
export class LocationBatchComponent implements OnInit {
  public form!: FormGroup;
  private submitStrategy!: LocationBatchBaseStrategy;
  public mode: "edit" | "create" = "create";

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private readonly formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<LocationBatchComponent>,
    private readonly updateStrategyService: LocationBatchUpdateStrategyService,
    private readonly createStrategyService: LocationBatchCreateStrategyService,
  ) {
    const setupBatchModeBasedOnDialogData = () => {
      if (this.dialogData) {
        this.setupEditMode();
      } else {
        this.setupCreateMode();
      }
    }

    this.createForm();
    setupBatchModeBasedOnDialogData();
  }

  ngOnInit(): void {
  }

  private setupEditMode(): void {
    this.mode = "edit";
    this.submitStrategy = this.updateStrategyService;
    this.form.patchValue(this.dialogData);
  }

  private setupCreateMode(): void {
    this.mode = "create";
    this.submitStrategy = this.createStrategyService;
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
    this.submitStrategy.submit(this.form.value);
    this.closeDialog();
  }
}

