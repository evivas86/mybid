import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPasswordStrengthComponent } from '@angular-material-extensions/password-strength';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
@Injectable()
export class ResetPasswordComponent implements OnInit {

  @ViewChild('passwordComponent', {static: true})
  passwordComponent: MatPasswordStrengthComponent;

  resetGroup: FormGroup;

  success:boolean;
  errorMessage:string;
  isHidden: boolean = false;
  token:string;
  email: string;
  password:string;
  passwordToConfirm:string;

  constructor(private route: ActivatedRoute, private spinner: NgxSpinnerService, private userService: UserService, private formbuilder: FormBuilder) { }

  showDetails: boolean;
  color = 'black';

  ngOnInit() {

    this.token = this.route.snapshot.url[1].path;

    this.resetGroup=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]]
    });


  }

  reset(){

    if(this.resetGroup.invalid){
      return;
    }

    this.spinner.show();

    this.email = this.resetGroup.controls.email.value;
    this.password = this.passwordComponent.passwordFormControl.value;

    this.userService.resetPassword(this.token,this.email,this.password).subscribe(user => {
      console.log('usercomponent');
      console.log(user);
      this.success=true;
      this.spinner.hide();
      this.isHidden = true;
    },error =>{
      console.log('error');
      console.log(error);
      this.success=false;
      this.spinner.hide();
      this.isHidden = true;
    });

  }

  public keyDownFunction(event) {
    /*if(event.keyCode == 13) {
      this.register();
    }*/
  }

}
