import { Component, OnInit } from '@angular/core';
import { OverdbService } from '../services/overdb.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tabs2-details',
  templateUrl: './tabs2-details.page.html',
  styleUrls: ['./tabs2-details.page.scss'],
})
export class Tabs2DetailsPage implements OnInit {
  dano:any = [];
 constructor(private OverdbService: OverdbService, private loadingController: LoadingController, private route: ActivatedRoute, private router: Router,private httpClient: HttpClient ) { }

 ngOnInit() {
   this.consultaDano();
 }
 async consultaDano(){
   const loading = await this.loadingController.create({
     message:'Carregando'
   });
   await loading.present();
   await this.OverdbService.getDanoId(this.route.snapshot.paramMap.get('id')).subscribe(
     data=>{
       this.dano = data;
       console.log(this.dano);
       loading.dismiss();
     },
     error=>{
       console.log(error);
       loading.dismiss();
     }
   )
 }
}

