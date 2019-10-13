import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LogisticsService } from '../logistics.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.page.html',
  styleUrls: ['./shipping-form.page.scss'],
})
export class ShippingFormPage implements OnInit {

  shippingForm = new FormGroup({
    address: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    postalcode: new FormControl(),
    contactnum: new FormControl(),
    contactname: new FormControl()

  })
  

  constructor(private navCtrl : NavController, private logisticService:LogisticsService) { }

  ngOnInit() {

        this.logisticService.formValues.subscribe(values => {
      console.log(values)
    })
  }

  onSelect(optionValue, fieldName){
    this.shippingForm.controls[fieldName].setValue(optionValue)
  }

  onClickNext(){
    this.logisticService.setFormValues(this.shippingForm.value, "shipping")
    this.navCtrl.navigateForward("/schedule-form")
  }

}
