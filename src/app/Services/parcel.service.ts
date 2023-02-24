import { Injectable } from '@angular/core';
import { Parcel } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  

  private parcel:Parcel[]=[
    {  
      id:1,
      name:'Phone',
      description:'Phone',
      price:'1200',
      category:'Eletronics',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Fbusiness%2F2022%2Fdec%2F15%2Ftwo-in-five-people-experienced-parcel-delivery-issues-last-christmas&psig=AOvVaw2oLEgG-NTdCdn_UpKsJPk3&ust=1677307607287000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCtyL7Rrf0CFQAAAAAdAAAAABA2'
    },
    {  
      id:2,
      name:'Food',
      description:'Chakula',
      price:'2000',
      category:'Perishable',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkenyanwallstreet.com%2Fparcel-delivery-firm-ups-partners-with-jumia-to-expand-in-africa%2F&psig=AOvVaw2oLEgG-NTdCdn_UpKsJPk3&ust=1677307607287000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCtyL7Rrf0CFQAAAAAdAAAAABBA'
    },
    {  
      id:3,
      name:'Shoes',
      description:'Viatu',
      price:'2500',
      category:'shoes',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fexpa.co.ke%2F&psig=AOvVaw2oLEgG-NTdCdn_UpKsJPk3&ust=1677307607287000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCtyL7Rrf0CFQAAAAAdAAAAABBS'
    },
    {  
      id:4,
      name:'TV',
      description:'TV set',
      price:'20000',
      category:'Electronics',
      image:'https://imgs.search.brave.com/lfgJIwPFgZqZyTt60Q-7kLXy99FBIZV4ovr:1/g:ce/aHR0cHM6Ly93d3cu/Ymlnc2FsZW1heC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDMvTmlrZS1T/Qi1EdW5rLUxvdy1Q/cmVtaXVtLVdoaXRl/LUxpZ2h0LUJsdWUt/Um95YWwtQmx1ZS04/NTQ4NjYtMDA5Lmpw/Zw'
    },
    {  
      id:5,
      name:'Bicycle',
      description:'Bicycle',
      price:'10000',
      category:'Bicycle',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emscargocarlisleltd.co.uk%2Four-services%2Fcourier%2F&psig=AOvVaw2oLEgG-NTdCdn_UpKsJPk3&ust=1677307607287000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCtyL7Rrf0CFQAAAAAdAAAAABBb'
    }
    
    ]
    constructor() { }
    getOneParcel(id:number):Parcel  {
      return this.parcel.find(x=>x.id===id) as Parcel
    }
    getParcel() :Parcel[]{
      return this.parcel
    }
    getParcelCategory():string[] {
      let category:string[]=[];
  
      for(let c of this.parcel){
        let x = category.find(p=>p===c.category)
        if(!x){
          category.push(c.category)
        }
      }
      return category;
    }
    updateParcel(id:number, parcel:Parcel){
      let index= this.parcel.findIndex(x=>x.id===id)
      this.parcel[index]=parcel
    }
      
    }
    




