import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  email: string;
  password:string;
  success:boolean;
  isHidden: boolean = false;
  hide: boolean = true;

  constructor(private spinner: NgxSpinnerService, private formbuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginGroup=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
  }

  login(){

    console.log('login');

    if(this.loginGroup.invalid){
      return;
    }

    this.spinner.show();

    this.email = this.loginGroup.controls.email.value;
    this.password = this.loginGroup.controls.password.value;

    this.userService.login(this.email,this.password).subscribe(user => {
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
