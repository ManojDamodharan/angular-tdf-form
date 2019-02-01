import { Component } from '@angular/core';
import { User } from './user';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public departments =["ECE","EEE","CSE","Mechanical"];
  departmentHasError = true;
  formSubmitted = false;
  userModel = new User("damodharan",23,"damodharan@gmail.com",9192939495,"default","regular",true);

  constructor(private _registerService: RegistrationService) {}

  validateDepartment(value){
    if(value == "default"){
      this.departmentHasError = true;
    }else {
      this.departmentHasError = false;
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log(this.userModel);
    this._registerService.register(this.userModel)
                              .subscribe(data => console.log("Success", data),
                                         error => console.log("Error!!!",error));

  }

}
