import { Observable } from "rxjs"

export interface AddParcel{
    name:string
    description:string
    image:string
    price:string
}


export interface Parcel{
    id:number
    name:string
    description:string
    image:string
    price:string
    category:string
}

export interface CanDeactivateComponent{
    canDeactive:()=> Promise<boolean> | Observable<boolean> | boolean 
}