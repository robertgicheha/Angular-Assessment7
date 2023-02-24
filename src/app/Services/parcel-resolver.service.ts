import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Parcel } from '../Parcels/edit-parcel/parcel/Interfaces/index';
import { ParcelService } from './parcel.service';

@Injectable({
  providedIn: 'root'
})
export class ParcelResolverService  implements Resolve<Parcel> {

  constructor(private parcelService:ParcelService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Parcel | Observable<Parcel> | Promise<Parcel> {
   return this.parcelService.getOneParcel(+route.params['id'])
  }
}



