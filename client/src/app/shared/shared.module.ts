import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { HttpClientModule } from '@angular/common/http'
import { ButtonComponent } from './components/button/button.component'
import { MessageComponent } from './components/message/message.component'
import { TodostatusPipe } from './pipes/todostatus.pipe'
import { NgZorroAntdModule } from 'ng-zorro-antd'

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    ButtonComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TodostatusPipe,
    NgZorroAntdModule
  ],
  entryComponents: [MessageComponent],
  declarations: [ButtonComponent, MessageComponent, TodostatusPipe]
})
export class SharedModule {}
