import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface CargoFormValues {
  type: string
  weight: number
  lenght: number
  height: number
}

interface FormValues {
  cargo?: CargoFormValues
  // cpu?: CpuFormValues
  // model?: ModelFormValues
}

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {

  formValues = new BehaviorSubject<FormValues>({})
  // constructor(private http: HttpClient) {}

  setFormValues(specificFormValues, formName){
    let currentFormValues = this.formValues.getValue()
    currentFormValues[formName] = specificFormValues

    this.formValues.next(currentFormValues)
  }

  
}
