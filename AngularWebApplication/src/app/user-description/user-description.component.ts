import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.css']
})
export class UserDescriptionComponent implements OnInit {
  user;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('idUser');
    //this.user = this.userService.getUserById(id).subscribe();
    this.userService.getUserById(id).subscribe((data)=>{
      this.user=data;
    })
  }

}
