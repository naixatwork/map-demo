import {Component, Injector, OnInit} from '@angular/core';
import {MatFormFieldControl} from "@angular/material/form-field";
import {MatFormFieldAdapter} from "../../../shared/MatFormFieldAdapter/MatFormFieldAdapter";
import {FormBuilder} from "@angular/forms";
import {FormControlAdapter} from "../../../shared/FormControlAdapater/FormControlAdapter";
import {Location} from "../../location.type";

@Component({
  selector: 'app-location-type-controller',
  templateUrl: './location-type-controller.component.html',
  styleUrls: ['./location-type-controller.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: LocationTypeControllerComponent,
      multi: true
    }
  ]
})
export class LocationTypeControllerComponent extends MatFormFieldAdapter<string> implements OnInit {

  public readonly locationTypeOptions: Set<Location['type']['value']> = new Set([
    "cafe",
    "business",
    "store",
    "university",
  ]);

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly injector: Injector
  ) {
    super(
      LocationTypeControllerComponent.name,
      new FormControlAdapter(formBuilder.group({value: ''})),
      injector
    )
  }


  ngOnInit(): void {
  }

}
