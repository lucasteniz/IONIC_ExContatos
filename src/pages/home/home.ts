import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos = [
    {
    id: '1',
    nome: 'Lucas',
    telefone: '1111111111',
    email: 'lucas@gmail.com'
    },
    {
    id: '2',
    nome: 'Gabriel',
    telefone: '1111114441',
    email: 'gabriel@gmail.com'
    },
    {
    id: '3',
    nome: 'Tatiana',
    telefone: '444444444',
    email: 'tatiana@gmail.com'
    }
  ]
  constructor(public navCtrl: NavController) {

  }

  onItemClick(contato){
    console.log('item.click', contato);
  }

}