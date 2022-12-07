import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Server } from '../../interfaces/servers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private ssService : ServiceService) { }

  ngOnInit(): void {
  }

  get  servidores():Server []{
    return this.ssService.servers;
  }
}
