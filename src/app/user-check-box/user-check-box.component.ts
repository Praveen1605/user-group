import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUserDetails } from '../model/user-details.model';

@Component({
  selector: 'app-user-check-box',
  templateUrl: './user-check-box.component.html',
  styleUrls: ['./user-check-box.component.scss']
})
export class UserCheckBoxComponent implements OnInit {
  @Input() public userDetails:IUserDetails;
  @Output() public close = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(){
    this.userDetails.isSelected = !this.userDetails.isSelected;
    console.log("Selected Profile %o", this.userDetails);
  }
}
