import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
@Injectable()
export class VerifyComponent implements OnInit {

  success:boolean;
  errorMessage:string;
  isHidden: boolean = false;
  token:string;

  constructor(private route: ActivatedRoute, private spinner: NgxSpinnerService, private userService: UserService) { }

  ngOnInit() {

    this.spinner.show();
    
    this.token = this.route.snapshot.url[1].path;
    console.log(this.token);

    this.userService.verify(this.token).subscribe(data => {
      console.log(data);
      this.success=true;
      this.spinner.hide();
    },error =>{
      console.log(error);
      this.success=false;
      if(error.status == "User already Verified"){
        this.errorMessage = "La cuenta ya fué anteriormente Verificada. Proceda a iniciar sesión";
      }else{
        this.errorMessage = "Ha habido un problema con la verificación de su cuenta. Por favor intente nuevamente.";
      }
      this.spinner.hide();
    });


  }

  public registerkeyDownFunction(event) {
    /*if(event.keyCode == 13) {
      this.register();
    }*/
  }

}
