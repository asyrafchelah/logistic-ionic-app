import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
})
export class SelectListComponent implements OnInit {

  @Input() options;
  @Input() selectedValue; 
  @Output() selectOption = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  onSelectOption(selectedOption){
    this.selectOption.emit(selectedOption)
  }

}
