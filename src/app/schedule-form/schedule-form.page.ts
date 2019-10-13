import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LogisticsService } from '../logistics.service';


@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.page.html',
  styleUrls: ['./schedule-form.page.scss'],
})

export class ScheduleFormPage implements OnInit {

    scheduleForm = new FormGroup({
    day: new FormControl(),
    time: new FormControl(),
    })

    dayOptions = ["Monday", "Tuesday", "Wednesday","Thursay", "Friday"]
    timeOptions = ["8:00 a.m to 10:00 a.m","10:00 a.m to 12:00 p.m","12:00 p.m to 2:00 p.m","2:00 p.m to 4:00 p.m"]

  constructor(private navCtrl : NavController, private logisticService:LogisticsService) { }

  ngOnInit() {

        this.logisticService.formValues.subscribe(values => {
      console.log(values)
    })
  }

  onSelect(optionValue, fieldName){
    this.scheduleForm.controls[fieldName].setValue(optionValue)
  }

  onClickNext(){
    this.logisticService.setFormValues(this.scheduleForm.value, "schedule")
    this.navCtrl.navigateForward("/schedule-form")
  }

}
