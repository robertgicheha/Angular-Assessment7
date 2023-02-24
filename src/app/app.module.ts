import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayAllParcelsComponent } from './Parcels/edit-parcel/display-all-parcels/display-all-parcels.component';
import { HomeComponent } from './home/home.component';
import { AddParcelComponent } from './Parcels/edit-parcel/add-parcel/add-parcel.component';
import { LoginComponent } from './Auth/login/login.component';
import { EditParcelComponent } from './Parcels/edit-parcel/edit-parcel.component';
// import { CategoryComponent } from './Parcels/edit-parcel/cartegory/cartegory.component';
// import { ParcelComponent } from './Parcels/edit-parcel/parcel/parcel.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAllParcelsComponent,
    HomeComponent,
    AddParcelComponent,
    LoginComponent,
    EditParcelComponent,
    CartegotyComponent,
    ParcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
