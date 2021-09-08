import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectService {
  user = new BehaviorSubject<string>('Roshin');
  getUser = this.user.asObservable();
  constructor() { 
    
  }
  updateUser(newUser:any){
    this.user.next(newUser);
  }
}
