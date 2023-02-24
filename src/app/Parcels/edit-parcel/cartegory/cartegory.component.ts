// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params, RouterModule } from '@angular/router';
// import { ParcelService } from 'src/app/Services/parcel.service';
// import { Parcel , AddParcel } from '../parcel/Interfaces/index';


// @Component({
//   selector: 'app-category',
//   templateUrl: './cartegory.component.html',
//   styleUrls: ['./cartegory.component.css'],
//   standalone: true,
//   imports: [CommonModule,RouterModule]
// })
// export class CategoryComponent implements OnInit {

//   parcel:Parcel[]=[]
//   constructor(private parcelService:ParcelService, private route:ActivatedRoute){}
  
//   ngOnInit(): void {
//   this.route.queryParams.subscribe((params:Params)=>{
//     this.parcel=this.parcelService.getParcelCategory(params['category'])
//   })
//   }

// }
