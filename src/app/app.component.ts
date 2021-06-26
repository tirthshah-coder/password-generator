import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwg';
  password = "";
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onChangeLength(value: string){
    this.length = parseInt(value);
  }

  onChangeUseLetters(){
    this.useLetters = !this.useLetters;  
  }

  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }

  onGenerate(){
    let numbers = "1234567890";
    let letters = "abcdefghijkmnopqrstuvwxyz";
    let symbols = "@#$!()&<>?";

    let validChars = "";
    if(this.useNumbers){
      validChars += numbers;
    }

    if(this.useLetters){
      validChars += letters;
    }

    if(this.useSymbols){
      validChars += symbols;
    }

    let generatedPassword = "";
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
