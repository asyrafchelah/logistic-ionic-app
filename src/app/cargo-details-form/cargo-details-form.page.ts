import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LogisticsService } from '../logistics.service';



@Component({
  selector: 'app-cargo-details-form',
  templateUrl: './cargo-details-form.page.html',
  styleUrls: ['./cargo-details-form.page.scss'],
})
export class CargoDetailsFormPage implements OnInit {

  cargoDetailsForm = new FormGroup({
    description: new FormControl(),
    disclaimer: new FormControl()
  })

  disclaimerOptions = ["hazardous", "materials", "insurance"]



  constructor(private navCtrl : NavController, private logisticService:LogisticsService) { }

  ngOnInit() {
    this.logisticService.formValues.subscribe(values => {
      console.log(values)
    })
  }

  onSelect(optionValue, fieldName){
    this.cargoDetailsForm.controls[fieldName].setValue(optionValue)
  }

  onClickNext(){
    this.logisticService.setFormValues(this.cargoDetailsForm.value, "cargo-details")
    this.navCtrl.navigateForward("/shipping-form")
  }

}
