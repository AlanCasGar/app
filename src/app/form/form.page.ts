import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {

  P= false;
  PT= false;
  P1= false;
  P2= false;

  E= false;
  ET= false;
  E1= false;
  E2= false;

  A= false;
  AT= false;
  A1= false;
  A2= false;

  constructor() { }

  showP1(){
    this.P1= true;
    this.P= false;
  }

  hideP1(){
    this.P1= false;
    this.P= true;
  }

  showP2(){
    this.P2= true;
    this.P= false;
  }

  hideP2(){
    this.P2= false;
    this.P= true;
  }

  showE1(){
    this.E1= true;
    this.E= false;
  }

  hideE1(){
    this.E1= false;
    this.E= true;
  }

  showE2(){
    this.E2= true;
    this.E= false;
  }

  hideE2(){
    this.E2= false;
    this.E= true;
  }

  showA1(){
    this.A1= true;
    this.A= false;
  }

  hideA1(){
    this.A1= false;
    this.A= true;
  }

  showA2(){
    this.A2= true;
    this.A= false;
  }

  hideA2(){
    this.A2= false;
    this.A= true;
  }

  p(){
    this.P = true;
    this.PT = true;
    this.E = false;
    this.ET = false;
    this.A = false;
    this.AT = false;
  }
  e(){
    this.P = false;
    this.PT = false;
    this.E = true;
    this.ET = true;
    this.A = false;
    this.AT = false;
  }
  a(){
    this.P = false;
    this.PT = false;
    this.E = false;
    this.ET = false;
    this.A = true;
    this.AT = true;
  }
}
