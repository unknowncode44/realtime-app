import { Component, OnDestroy   } from '@angular/core';
import { Router                 } from '@angular/router';
import { Subscription           } from 'rxjs';

// Servicios propios
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'realtime-app';
  valueFromServer: string = ''
  private uiChangesSubscription?: Subscription;
  logged: boolean = false

  constructor(
    private sharedService : SharedService,
    private router        : Router
    ) {
      this.uiChangesSubscription = this.sharedService.event$.subscribe({
        next: () => {
          this.setLogged()
        }
      })

    
  }

  ngOnDestroy(): void {
      this.uiChangesSubscription?.unsubscribe()
  }

  setActive(): void {
    const formBx: HTMLElement | null = document.getElementById('formBx')
    const body  : HTMLElement | null = document.querySelector('body')
    formBx?.classList.add('active')
    body?.classList.add('active')
    this.router.navigate(['public/register'])
  }

  setInactive(): void {
    const formBx: HTMLElement | null = document.getElementById('formBx')
    const body  : HTMLElement | null = document.querySelector('body')
    formBx?.classList.remove('active')
    body?.classList.remove('active')
    this.router.navigate(['public/login'])
  }

  setLogged(): void {
    const container : HTMLElement | null = document.getElementById('container')
    const formBx    : HTMLElement | null = document.getElementById('formBx');
    container?.classList.add('logged')
    formBx?.classList.add('logged')
    this.logged = !this.logged
  }

  
 


}
