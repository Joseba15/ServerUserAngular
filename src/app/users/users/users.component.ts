import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { User } from '../../interfaces/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(private ssService : ServiceService) { }

  res : User[]=[];

  ngOnInit(): void {
      this.ssService.getUsers()
      .subscribe({
        next: (resp) =>{
          this.res=resp;
        }
      })

      

    }
}
