import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Noticia } from '../../model/noticias';
import { NavParams } from 'ionic-angular/navigation/nav-params';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  noticias :Noticia[] = [];
}
