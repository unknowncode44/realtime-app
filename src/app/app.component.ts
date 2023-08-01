import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'realtime-app';
  valueFromServer: string = ''

  constructor(private router: Router) {

    
  }

  setActive(): void {
    const formBx: HTMLElement | null = document.getElementById('formBx')
    const body  : HTMLElement | null = document.querySelector('body')
    formBx?.classList.add('active')
    body?.classList.add('active')
    this.router.navigate(['public/register'])
  }

  setInactive(): void {
    this.router.navigate(['public/login'])
    const formBx: HTMLElement | null = document.getElementById('formBx')
    const body  : HTMLElement | null = document.querySelector('body')
    formBx?.classList.remove('active')
    body?.classList.remove('active')
    
    
  }

  
 


}
