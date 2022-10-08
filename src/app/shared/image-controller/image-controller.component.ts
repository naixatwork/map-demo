import {Component, Injector, OnInit} from '@angular/core';
import {MatFormFieldControl} from "@angular/material/form-field";
import {FormBuilder, Validators} from "@angular/forms";
import {FormControlAdapter} from "../FormControlAdapater/FormControlAdapter";
import {MatFormFieldAdapter} from "../MatFormFieldAdapter/MatFormFieldAdapter";

@Component({
  selector: 'app-image-controller',
  templateUrl: './image-controller.component.html',
  styleUrls: ['./image-controller.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: ImageControllerComponent,
      multi: true
    }
  ]
})
export class ImageControllerComponent extends MatFormFieldAdapter<{value: string}> implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly injector: Injector
  ) {
    super(
      ImageControllerComponent.name,
      new FormControlAdapter(formBuilder.group({
        value: ['', [Validators.required]]
      })),
      injector
    )
  }

  ngOnInit(): void {
  }

}
