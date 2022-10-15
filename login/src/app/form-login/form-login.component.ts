import { Query, Component, Input, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  // create  STATIC USER-NAME
  @Input() username="";
  @Input() password = "";

  correctUsername ="aaaa"
  correctPassword = "1111"
  show = false;
  correct = false;

  constructor() { }

  submit(){
    if(this.username == this.correctUsername && this.password == this.correctPassword){
      console.log("user name is " +this.username)
      this.show = true;
      this.correct = true;
    }
    else{
      this.show = false;
    }
  }


  emptyAll(){
    this.username = "";
    this.password = "";
    this.show = false;
  }

  ngOnInit(): void {
  }


}


