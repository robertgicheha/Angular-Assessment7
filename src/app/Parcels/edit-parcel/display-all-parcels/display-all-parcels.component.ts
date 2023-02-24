
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Parcel } from 'src/app/Parcels/edit-parcel/parcel/Interfaces';
import { ParcelService } from 'src/app/Services/parcel.service';
// import { Product } from '../../Interfaces';
@Component({
  selector: 'app-display-all-parcels',
  templateUrl: './display-all-parcels.component.html',
  styleUrls: ['./display-all-parcels.component.css'],
standalone: true,
  imports: [CommonModule,RouterModule]
})
export class DisplayAllParcelsComponent  implements OnInit {
  parcel:Parcel[]=[]
  constructor(private parcelService:ParcelService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
  this.route.queryParams.subscribe((params:Params)=>{
    this.parcel=this.parcelService.getParcel()
  })
  }
}

