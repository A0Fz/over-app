import { Component } from '@angular/core';
import { OverdbService } from '../services/overdb.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tanque: [];
  param:string;
  constructor(private overdbService: OverdbService){}

  ngOnInit(){
    this.consultaTanque();
  }

  consultaTanque(){
      return this.overdbService.getTanque().subscribe(
        data=>{
          this.tanque = data;
        }
      ).add();
  }

}