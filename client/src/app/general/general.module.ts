import { NgModule } from '@angular/core'
import { FeedbackComponent } from './feedback/feedback.component'
import { SharedModule } from '../shared/shared.module'
import { GeneralRoutingModule } from './general.routing'

@NgModule({
  declarations: [FeedbackComponent],
  imports: [SharedModule, GeneralRoutingModule]
})
export class GeneralModule {}
