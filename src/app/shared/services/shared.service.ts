import { Injectable } from "@angular/core";
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private eventSubject    = new Subject<void>()
    public  event$          = this.eventSubject.asObservable()

    emitChangesOnUI() {
        this.eventSubject.next()
    }
}