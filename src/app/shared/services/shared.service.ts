import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { Subject } from 'rxjs'

const snackBarConfig: MatSnackBarConfig = {
  duration          : 5000,
  verticalPosition  : 'top',
  horizontalPosition: 'right'
}

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private eventSubject    = new Subject<void>()
    public  event$          = this.eventSubject.asObservable()

    constructor(
      private snackBar  : MatSnackBar,
    )
    {}

    emitChangesOnUI() {
        this.eventSubject.next()
    }

    displaySuccessSnackbar() {
      this.snackBar.open('Se agrego una nueva tarea','Close', snackBarConfig)
    }


}
