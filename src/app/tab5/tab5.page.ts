import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page {

  public EDIT = false

  constructor() { }
  
  editor(){
    this.EDIT = true
  }
}
