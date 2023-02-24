import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';
import { CanDeactiveService } from './Services/can-deactivate.service';
import { ParcelResolverService } from './Services/parcel-resolver.service';



const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(h => h.HomeComponent) },
  { path: 'login', loadComponent: () => import('../app/Auth/login/login.component').then(l => l.LoginComponent) }
  ,
  {
    path: 'products', loadComponent: () => import('./Parcels/edit-parcel/display-all-parcels/display-all-parcels.component').then(p => p.DisplayAllParcelsComponent)
    , canActivateChild: [AuthGuardService], children: [
      { path: '', loadComponent: () => import('./Parcels/edit-parcel/parcel/parcel.component').then(p => p.ParcelComponent) },
      { path: 'add/new', loadComponent: () => import('./Parcels/edit-parcel/add-parcel/add-parcel.component').then(p => p.AddParcelComponent) },
      {
        path: ':id', resolve: { product: ParcelResolverService },
        loadComponent: () => import('./Parcels/edit-parcel/parcel/parcel.component').then(p => p.ParcelComponent)
      },
      {
        path: ':id/edit', canDeactivate: [CanDeactiveService],
        loadComponent: () => import('./Parcels/edit-parcel/edit-parcel.component').then(m => m.EditParcelComponent)
      },
      {
        path: 'category/all',
        loadComponent: () => import('./Parcels/edit-parcel/cartegory/cartegory.component').then(c => c.CategoryComponent)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

