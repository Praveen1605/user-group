import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { UserDetailsConstants } from '../constants/user-details.constants';
import { IUserDetails } from '../model/user-details.model';

@Injectable({providedIn:'root'})
export class UserDetailsService{
    public userDetails: Array<IUserDetails> = Object.assign([]);
    public loading: boolean = false;
    public sortOrder: string = "";
    public subscription: Subscription[] = Object.assign([])
    constructor(private http: HttpClient){
    }

    public init(){
        this.loading = true;
        this.subscription.push(this.callUserDetailsApi().subscribe(response=>{
            console.log("Response After callUserDetailsApi %o", response);
            //this.sortAscendingOrder();
            this.loading = false;
        }));
    }

    public callUserDetailsApi(){
        return this.http.get<any>(UserDetailsConstants.userDetailsApi, {}).pipe(tap(apiResponse=>{
            console.log("Response from BeerCraftAPI %o", apiResponse);
            apiResponse.forEach(element => {
                const tempData:IUserDetails = Object.assign(element);
                tempData.isSelected = false;
                this.userDetails.push(tempData);
            });
        }));
    }

    public sortAscendingOrder() {
        if(this.userDetails && this.userDetails.length > 0){
            this.sortOrder = "ascending";
            this.userDetails.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        }
    }

    public sortDescendingOrder() {
        if(this.userDetails && this.userDetails.length > 0){
            this.sortOrder = "descending";
            this.userDetails.sort((a,b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
        }
    }

    public dispose() {
        if(this.subscription && this.subscription.length > 0){
            this.subscription.forEach(element => {
                element.unsubscribe()
            });
        }
    }
}