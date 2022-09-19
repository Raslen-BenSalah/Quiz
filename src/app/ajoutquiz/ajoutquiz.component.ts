import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutquiz',
  templateUrl: './ajoutquiz.component.html',
  styleUrls: ['./ajoutquiz.component.css']
})
export class AjoutquizComponent implements OnInit {

  elements = [{
    id : 1 ,
    text : "",
  }];

  

  id: number = 1;



  constructor() { }

  ngOnInit(): void {
  }

  addElement(){
    this.id =this.id+1 ;
    this.elements.push({
      id : this.id ,
      text : ""
    })
    console.log(this.id);
  }

}
