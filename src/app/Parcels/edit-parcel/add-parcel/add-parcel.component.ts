
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Parcel } from 'src/app/Parcels/edit-parcel/parcel/Interfaces';
// import { AddProduct, Product } from '../../Interfaces';
import { ParcelService } from 'src/app/Services/parcel.service';
@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule]
})

export class AddParcelComponent implements OnInit{

 constructor( private fb: FormBuilder, private parcelService:ParcelService) {
        
  }

  addParcel!:FormGroup
  ngOnInit(): void {
    this.addParcel= this.fb.group({
      name:[null, Validators.required],
      description:[null, Validators.required],
      image:[null, Validators.required],
      price:[null, Validators.required]
    })
  }

  AddParcel(){
    let parcel :Parcel= {...this.addParcel.value, id:Math.floor(Math.random() *10000)};
    this.parcelService.addParcel(this.addParcel)
  }
}




