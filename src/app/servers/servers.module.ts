import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ServersComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ServersComponent
  ]
})
export class ServersModule { }
