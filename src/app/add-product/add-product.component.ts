import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  price=""
  category=""
  image=""
  name=""
  description=""

  readValue=()=>{
    let data:any={"price":this.price,"category":this.category,"image":this.image,"name":this.name,"description":this.description}
    console.log(data)
  }

}
