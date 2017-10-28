import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  hobbies:string[]=[];
  
  constructor(private aboutService : AboutService) { }

  ngOnInit() {
    this.aboutService.getHobbies().subscribe(hobbies => {
      this.hobbies = hobbies;
    });
  }
  addHobby(newHobby: string) {
    if (!newHobby) {
      return;
    }
    this.hobbies.push(newHobby);
  }
  deleteHobby(index: number){
    this.hobbies.splice(index, 1);
  }
}
