import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name=""
  
  address=""
 
  
  email=""
  phone=""
  
  password=""
  confirmpassword=""

  readValue=()=>{
    {
      let data:any={
        "name":this.name,"address":this.address,
        
        
        "email":this.email,
        "phone":this.phone,
        
        "password":this.password,
        "confirmpassword":this.confirmpassword
      }
  
      console.log(data)
      
    }
  }

}
