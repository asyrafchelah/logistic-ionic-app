import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LogisticsService } from '../logistics.service';


@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.page.html',
  styleUrls: ['./cargo-form.page.scss'],
})
export class CargoFormPage implements OnInit {

  cargoForm = new FormGroup({
    type: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    length: new FormControl()
  })

  typeOptions = ["Document","Parcel"]
  dimensions = [0,0,0]

  constructor(private navCtrl : NavController, private logisticService:LogisticsService) { }

  ngOnInit() {

    this.logisticService.formValues.subscribe(values => {
      console.log(values)
    })
  }


  onSelect(optionValue, fieldName){
    this.cargoForm.controls[fieldName].setValue(optionValue)
  }

  onClickNext(){
    this.logisticService.setFormValues(this.cargoForm.value, "cargo")
    this.navCtrl.navigateForward("/cargo-details-form")
  }

}
