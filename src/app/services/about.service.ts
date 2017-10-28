import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AboutService {
  private hobbies:string[] = [
    'Hobby 1', 
    'Hobby 2'
  ];

  constructor() { }

  getHobbies():Observable<string[]>{
    return Observable.of(this.hobbies);
  }
}
