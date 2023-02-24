import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  
  form!:FormGroup
  
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    
    this.form= new FormGroup({
    personalDetails:new FormGroup({
      username:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      destination:new FormControl(null,[Validators.required]),
    })
    })
    


  }

  submitData(){
    console.log(this.form);
    
  }

 
  
 
}
