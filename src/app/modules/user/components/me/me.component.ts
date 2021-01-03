import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPasswordStrengthComponent } from '@angular-material-extensions/password-strength';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  @ViewChild('passwordComponent', {static: true})
  passwordComponent: MatPasswordStrengthComponent;

  registerGroup: FormGroup;
  name: string;
  lastname: string;
  email: string;
  password:string;
  passwordToConfirm:string;
  onlyStringpattern = /[A-z]/;
  success:boolean;
  isHidden: boolean = false;

  constructor(private spinner: NgxSpinnerService, private formbuilder: FormBuilder, private userService: UserService) { }

  showDetails: boolean;
  color = 'black';

  ngOnInit() {

    this.registerGroup=this.formbuilder.group({
      name:['',[Validators.required,Validators.pattern(this.onlyStringpattern)]],
      lastname:['',[Validators.required,Validators.pattern(this.onlyStringpattern)]],
      email:['',[Validators.required,Validators.email]]
    });
  }

  register(){

    if(this.registerGroup.invalid){
      return;
    }

    this.spinner.show();

    this.name = this.registerGroup.controls.name.value;
    this.lastname = this.registerGroup.controls.lastname.value;
    this.email = this.registerGroup.controls.email.value;
    this.password = this.passwordComponent.passwordFormControl.value;

    /*this.userService.register(this.name,this.lastname,this.email,this.password).subscribe(user => {
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
    });*/

  }

  public keyDownFunction(event) {
    /*if(event.keyCode == 13) {
      this.register();
    }*/
  }

}
