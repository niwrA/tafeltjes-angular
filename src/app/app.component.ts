import { Component } from '@angular/core';
import { sessievraag } from './sessievraag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tafeltjes';
  vraag = '';
  antwoord = '';
  verwacht = '';
  resultaat = '';
  aantalgoed = 0;
  aantalfout = 0;
  gesteldom = 0; 
  sessie = new Array<sessievraag>();

  ngOnInit() {
    this.init();
  }

  vraagtijd = function () {
    return new Date().getTime();
  }
  controleer = function () {
    var tekst = 'fout! Het goede antwoord was: ';
    var tijdsduur = this.vraagtijd() - this.gesteldom
    var verwacht = this.antwoord === this.verwacht;

    var vraag = new sessievraag(this.verwacht,this.antwoord,tijdsduur);
    this.sessie.push(vraag);
    if (vraag.isCorrectBeantwoord) {
      tekst = 'goed! (' + tijdsduur/1000 + ')';
      this.aantalgoed++;
    }
    else {
      tekst = tekst + this.verwacht;
      this.aantalfout++;
    }    

    this.resultaat = tekst;   
    this.nieuwesom();
  }
  nieuwesom = function () {
    this.antwoord = '';
    let links = Math.round(Math.random() * 10);
    let rechts = Math.round(Math.random() * 10);
    this.vraag = links + ' x ' + rechts;
    this.verwacht = (links * rechts).toString();
    this.gesteldom = this.vraagtijd();
  }
  herstart = function () {
    this.aantalgoed = 0;
    this.aantalfout = 0;
    this.init();
  }
  // toetsingedrukt = function (event: KeyboardEvent) {
  //   if(event.keyCode === 13){
  //     this.controleer();
  //   }
  // } 
  init = function () {
    this.nieuwesom();
  }
}
