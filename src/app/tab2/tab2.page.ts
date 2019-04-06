import { Component } from '@angular/core';
import { OverdbService } from '../services/overdb.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  dano: [];
  param:string;
  constructor(private overdbService: OverdbService){}

  ngOnInit(){
    this.consultaDano();
  }

  async consultaDano(){
    await this.overdbService.getDano().subscribe(
      data=>{
        this.dano = data;
        
      }
    ).add();
}
}
