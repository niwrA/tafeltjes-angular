
export class sessievraag {
  verwacht:string;
  antwoord:string;
  tijdsduur:number;

  constructor(verwacht:string, antwoord:string, tijdsduur:number) {
    this.verwacht = verwacht;
    this.antwoord = antwoord;
    this.tijdsduur = tijdsduur;
  }

  get isCorrectBeantwoord() { return this.verwacht === this.antwoord; };
}
