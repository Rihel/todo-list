import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { SharedModule } from '../shared/shared.module'
import { LoginRoutingModule } from './login.routing'

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, LoginRoutingModule]
})
export class LoginModule {}
