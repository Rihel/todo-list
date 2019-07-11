import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'todostatus'
})
export class TodostatusPipe implements PipeTransform {
  transform(value: number): string {
    return value === 0 ? '未完成' : '完成'
  }
}
