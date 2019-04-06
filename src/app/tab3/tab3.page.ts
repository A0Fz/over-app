import { Component } from '@angular/core';
import { OverdbService } from '../services/overdb.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  suporte: [];
  param:string;
  constructor(private overdbService: OverdbService){}

  ngOnInit(){
    this.consultaSuporte();
  }

  async consultaSuporte(){
    await this.overdbService.getSuporte().subscribe(
      data=>{
        this.suporte = data;
        
      }
    ).add();
}
}
