import { NgModule } from '@angular/core'
import { AdminComponent } from './admin/admin.component'
import { SharedModule } from '../shared/shared.module'
import { AdminRoutingModule } from './admin.routing'
import { TodolistComponent } from './todolist/todolist.component';
import { SettingComponent } from './setting/setting.component'

@NgModule({
  declarations: [AdminComponent, TodolistComponent, SettingComponent],
  imports: [SharedModule, AdminRoutingModule]
})
export class AdminModule {}
