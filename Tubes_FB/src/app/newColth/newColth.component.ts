import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarComponent } from "../avatar/avatar.component";
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-newColth',
  templateUrl: './newColth.component.html',
  styleUrls: ['./newColth.component.css']
})
export class NewColthComponent implements OnInit {

exampleFrom: FormGroup;
avatarLink: string = "https://p.ipricegroup.com/a87e6d7789d36ac021882835dfa4c4b9ce565caa_0.jpg";

validation_massage = {
  'name': [
    {type: 'required', massage:'Name is Required.'}
  ],
  'price': [
    { type : 'required' , massage: 'Price is required'}
  ],
  'stock': [
    {type : 'required', massage: 'Stock required'}
  ]
};
  constructor(
    private fb : FormBuilder,
    public dialog : MatDialog,
    private router : Router,
    
  ) { }

  ngOnInit() {
  }

}
