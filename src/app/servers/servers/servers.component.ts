import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Server } from '../../interfaces/servers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private serversService : ServiceService, private router:Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  get  servidores():Server []{
    return this.serversService.servers;
  }

  onReload(){
// this.router.navigate(['servers'], { relativeTo: this.route });

}
}
