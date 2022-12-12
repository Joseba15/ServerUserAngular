import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/users';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  user! :User;

  constructor(private route: ActivatedRoute,private ssService : ServiceService) { }

  ngOnInit(): void {
    this.ssService.getUser(this.route.snapshot.params['id'])
    .subscribe({
      next: (resp) =>{
       this.user=resp
      }
    })
  
  }

}
