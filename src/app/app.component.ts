import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  username: string = '';
  
  clickme(word1:string,word2:string) {
    let fruitsColor: string[] = ['Apple', 'red', 'Orange', 'orange', 'Banana' , 'yellow'];
    console.log('input1: ',word1);
    console.log('input2: ',word2);

   
    if(fruitsColor.includes(word1) && (fruitsColor[fruitsColor.indexOf(word1) + 1] === word2)){
      console.log('Good job!!!:');
    }else{console.log('Wrong word:')}
    
  }


}