import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface CargoFormValues {
  type: string
  width: number
  length: number
  height: number
}

interface CargoDetailsFormValues {
  description: string
  disclaimer: string
}

interface ScheduleFormValues {
  day: string
  time: string
}

interface ShippingFormValues {
  address: string
  state: string
  country: string
  postalcode: number
  contactnum: number
  contactname: string
}


interface FormValues {
  cargo?: CargoFormValues
  cargodetails?: CargoDetailsFormValues
  schedule?: ScheduleFormValues
  shipping?: ShippingFormValues

  // model?: ModelFormValues
}

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {

  formValues = new BehaviorSubject<FormValues>({})
  itemCarts = new BehaviorSubject([])

  constructor(private http: HttpClient ) { }

  setFormValues(specificFormValues, formName) {
    let currentFormValues = this.formValues.getValue()
    currentFormValues[formName] = specificFormValues

    this.formValues.next(currentFormValues)
  }

  saveToCart(index: number) {
    let currentValues = this.formValues.getValue()
    let tempCart = this.itemCarts.getValue()



  }

  saveToDb() {
    let currentValue = this.formValues.getValue()

    this.http.post("http://localhost:3000/logistics", {
      "type": currentValue.cargo.type,
      "width": currentValue.cargo.width,
      "height": currentValue.cargo.height,
      "length": currentValue.cargo.length,
      "description": currentValue.cargodetails.description,
      "disclaimer": currentValue.cargodetails.disclaimer,
      "day": currentValue.schedule.day,
      "time": currentValue.schedule.time,
      "address": currentValue.shipping.address,
      "state": currentValue.shipping.state,
      "country": currentValue.shipping.country,
      "postalcode": currentValue.shipping.postalcode,
      "contactnum": currentValue.shipping.contactnum,
      "contactname": currentValue.shipping.contactname
    }).subscribe(response => {
      console.log(response)
    })

  }


}
