import { Component } from '@angular/core';
import { Test, TestService } from './test.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'realtime-app';

  valueFromServer: string = ''

  constructor(private testService: TestService) {
    testService.getUserById(1).subscribe({
      next: (data) => this.valueFromServer = data.title,
      error: (err) =>  console.error(err),
      complete: () => {}
    })
    
  }
  
 


}
