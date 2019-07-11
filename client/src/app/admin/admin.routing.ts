import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './admin/admin.component'
import { TodolistComponent } from './todolist/todolist.component'
import { SettingComponent } from './setting/setting.component'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'todoList',
        component: TodolistComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
