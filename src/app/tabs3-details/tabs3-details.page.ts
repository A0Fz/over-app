import { Component, OnInit } from '@angular/core';
import { OverdbService } from '../services/overdb.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs3-details',
  templateUrl: './tabs3-details.page.html',
  styleUrls: ['./tabs3-details.page.scss'],
})
export class Tabs3DetailsPage implements OnInit {
  suporte:any = [];
 constructor(private OverdbService: OverdbService, private loadingController: LoadingController, private route: ActivatedRoute, private router: Router,private httpClient: HttpClient ) { }

 ngOnInit() {
   this.consultaSuporte();
 }
 async consultaSuporte(){
   const loading = await this.loadingController.create({
     message:'Carregando'
   });
   await loading.present();
   await this.OverdbService.getSupId(this.route.snapshot.paramMap.get('id')).subscribe(
     data=>{
       this.suporte = data;
       console.log(this.suporte);
       loading.dismiss();
     },
     error=>{
       console.log(error);
       loading.dismiss();
     }
   )
 }
}

