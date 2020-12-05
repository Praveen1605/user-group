import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserDetails } from '../model/user-details.model';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit, OnDestroy {

  constructor(private userDetailsService: UserDetailsService) { }
  uploadedFiles: any[] = [];
  public ngOnInit(): void {
    this.userDetailsService.init();
  }

  public ngOnDestroy(): void {
    this.userDetailsService.dispose();
  }

  get userDetails():Array<IUserDetails>{
    return this.userDetailsService.userDetails;
  }

  get sortOrder():string{
    return this.userDetailsService.sortOrder;
  }

  public sortDescendingOrder(){
    this.userDetailsService.sortDescendingOrder();
  }

  public sortAscendingOrder(){
    this.userDetailsService.sortAscendingOrder();
  }

  onUpload(event) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log("After adding Image %o",this.uploadedFiles);
  }
}
