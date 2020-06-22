import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsinfoProvider } from '../../providers/newsinfo/newsinfo';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  response : any

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private newsinfo: NewsinfoProvider) {
                this.getdata();
  }

  getdata(){
    this.newsinfo.getIdNews().subscribe(
      berita=> {
        this.response =berita['articles']; 
       console.log(this.response);
       
      }
    )
  }





  ionViewDidLoad() {
    
  }

 

}
