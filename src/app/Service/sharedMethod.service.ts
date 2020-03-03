import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedMethodService {

constructor(private router: Router) { }

navigate(url:string){
  this.router.navigateByUrl(url)
}

}
