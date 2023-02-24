import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Parcel } from './Interfaces/index';
import { ParcelService } from '../../../Services/parcel.service';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductComponent implements OnInit  {
parcel!:Parcel
show!:boolean
constructor(private route:ActivatedRoute, private router:Router,
  private parcelService:ParcelService) {
}

ngOnInit(): void {

  this.route.data.subscribe((data:Data)=>{
    this.parcel= data['parcel']
    
  })

  this.route.queryParams.subscribe((params:Params)=>{
    console.log(params['showPrice']);
    params['showPrice']==='true'?this.show=true:this.show=false
   
  })

}
Update(): void{
this.router.navigate(['edit'], {relativeTo:this.route})
}
}
