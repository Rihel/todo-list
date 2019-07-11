import { NgModule } from '@angular/core'
import { RegisterComponent } from './register/register.component'
import { SharedModule } from '../shared/shared.module'
import { RegisterRoutingModule } from './register.routing'

@NgModule({
  declarations: [RegisterComponent],
  imports: [SharedModule, RegisterRoutingModule]
})
export class RegisterModule {}
