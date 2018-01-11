import { Component, OnInit } from '@angular/core';
import { generator } from '../generator';
import { sendRequest } from 'selenium-webdriver/http';
import { DirectiveNormalizer } from '@angular/compiler';

@Component({
  selector: 'app-oyunapp',
  templateUrl: './oyunapp.component.html',
  styleUrls: ['./oyunapp.component.css']
})
export class OyunappComponent implements OnInit {
  dizi:number[]=generator();
  dizi0:number[]=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
  cevap:string;
  constructor() {
    this.dizi0[4]=this.dizi[4];
    this.dizi0[2]=this.dizi[2];
    this.dizi0[7]=this.dizi[7];
    this.dizi0[11]=this.dizi[11];
    this.dizi0[13]=this.dizi[13];
    this.dizi0[9]=this.dizi[9];
    this.dizi0[15]=this.dizi[15];
}

  ngOnInit() {
  }
}
