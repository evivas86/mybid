import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.sass']
})
export class RecoveryComponent implements OnInit {

  recoveryGroup: FormGroup;
  email: string;
  password:string;
  success:boolean;
  isHidden: boolean = false;
  hide: boolean = true;

  constructor(private spinner: NgxSpinnerService, private formbuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.recoveryGroup=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]]
    });
  }

  recover(){

    if(this.recoveryGroup.invalid){
      return;
    }

    this.spinner.show();

    this.email = this.recoveryGroup.controls.email.value;

    this.userService.recovery(this.email).subscribe(user => {
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
