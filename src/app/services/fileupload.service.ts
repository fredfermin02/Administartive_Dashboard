import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor() { }

  async updatePhoto(
    file:File,
    type:'users'|'medics'|'hospitals',
    id:string
  ){
    try {
      const url  = `${baseUrl}/uploads/${type}/${id}`
      const formData = new FormData();
      formData.append('img',file);
      

      const resp = await fetch(url, {
        method:'PUT',
        headers:{
          'x-token':localStorage.getItem('token') || ''
        },
        body: formData
      });
      const data  = await resp.json();
      if (data.nameOfFile) {
        return data.nameOfFile
      }else{
        console.log(data.msg);
        return false;
      }

    } catch (error) {
      console.log(error)
      return false
    }
  }
}
