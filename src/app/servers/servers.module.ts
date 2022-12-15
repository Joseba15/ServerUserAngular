import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { RouterModule } from '@angular/router';
import { ServerComponent } from './server/server.component';



@NgModule({
  declarations: [
    ServersComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ServersComponent,
    ServerComponent
  ]
})
export class ServersModule { }
