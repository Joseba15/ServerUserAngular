import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server } from '../../interfaces/servers';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  server! : Server;

  constructor(private serversService: ServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {  
  
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getserverId(params['id'])
    })
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route.snapshot.params['id']})
  }


}

