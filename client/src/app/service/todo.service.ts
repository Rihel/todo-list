import { Injectable } from '@angular/core'
import { BaseService } from './base.service'
import { Todo } from '../data/todo'
import { PagerQuery } from '../data/pagerQuery'
import { PagerResult } from '../data/pagerResult'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private baseService: BaseService) {}
  getTodolist(data: PagerQuery) {
    return this.baseService.get<PagerQuery, PagerResult<Todo>>('/todo', data)
  }

  addTodo(data: Todo) {
    return this.baseService.post<Todo, boolean>('/todo', data)
  }

  completeTodo(id: number) {
    return this.baseService.post<any, boolean>(`/todo/${id}/complete`)
  }

  deleteTodo(id: number) {
    return this.baseService.delete<any, boolean>(`/todo/${id}`)
  }

  updateTodo(id, data: Todo) {
    return this.baseService.put<Todo, boolean>(`/todo/${id}`, data)
  }
}
