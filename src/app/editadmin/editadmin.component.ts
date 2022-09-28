import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})

export class EditadminComponent implements OnInit {

visibility: boolean=false;
visicon: string="visibility";
input_type: string="password";

viewpass(){


  if(this.visibility){
    this.visicon = "visibility_off";
    this.input_type = "text";
    this.visibility = !this.visibility;
  } else{
    this.visicon = "visibility";
    this.input_type = "password";
    this.visibility = !this.visibility;
  }


  
  console.log(this.visibility);

}

  constructor() { }

  ngOnInit(): void {

  }

}
