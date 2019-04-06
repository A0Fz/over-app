import { Component, OnInit } from '@angular/core';
import { OverdbService } from '../services/overdb.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs1-details',
  templateUrl: './tabs1-details.page.html',
  styleUrls: ['./tabs1-details.page.scss'],
})
export class Tabs1DetailsPage implements OnInit {
   tanque:any = [];
  constructor(private OverdbService: OverdbService, private loadingController: LoadingController, private route: ActivatedRoute, private router: Router,private httpClient: HttpClient ) { }

  ngOnInit() {
    this.consultaTanque();
  }
  async consultaTanque(){
    const loading = await this.loadingController.create({
      message:'Carregando'
    });
    await loading.present();
    await this.OverdbService.getTanqueId(this.route.snapshot.paramMap.get('id')).subscribe(
      data=>{
        this.tanque = data;
        console.log(this.tanque);
        loading.dismiss();
      },
      error=>{
        console.log(error);
        loading.dismiss();
      }
    )
  }
}
