import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promeses',
  templateUrl: './promeses.component.html',
  styleUrls: ['./promeses.component.css']
})
export class PromesesComponent implements OnInit {
  
  ngOnInit(): void {
    // const promes = new Promise((resolve,reject)=> {
      
    //   if (true) {
    //     resolve('Hola mundo');
    //   }else{
    //     reject('hola')
    //   }
    
    // })
    // //Este se ejecuta antes del  console.log('Fin del init')
    // //promes.then(()=>{
      // //   console.log('Termine')
      // // })
      // promes.then((mensaje)=>{
        //   console.log(mensaje)
        // })
        // .catch(error=>console.log('Error in my promise: ',error))
        
        // console.log('Fin del init')
        
    this.getUsuarios().then(usuarios => {
      console.log(usuarios)
    })
  }
  
  getUsuarios(){

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
        .then(resp=> resp.json())
        .then(body=>resolve(body.data))
        });

    }

  
}
