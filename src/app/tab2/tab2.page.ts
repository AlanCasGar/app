import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  DB: any = [];
  List: any = [];
  
  SHOW = false;
  EDIT = true;
  
  Filter: string = "";
  
  constructor(private database:DatabaseService) {}

  ngOnInit(){
    this.database.get().subscribe(data => {
      this.DB = data
    })
  }

  show(){
    this.SHOW = true
  }

  filt(){
    var filter = this.Filter

    this.List = this.DB.filter(function (el:any){
      if(filter == el.Corte){
        return el.Corte.toString().toLowerCase().includes(
          filter.toString().trim().toLowerCase
        )
      }
    })
  }
}
