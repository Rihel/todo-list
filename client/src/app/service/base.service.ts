import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap, filter, catchError } from 'rxjs/operators'
import { Result } from '../data/result'
import { NzMessageService } from 'ng-zorro-antd'

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private prefix: string = '/api'
  constructor(private http: HttpClient, private msgService: NzMessageService) {}

  get<T, R>(url, data?: T | any): Observable<Result<R>> {
    return this.http
      .get<Result<R>>(`${this.prefix}${url}`, {
        params: new HttpParams({
          fromObject: data
        }),
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .pipe(
        tap(x => {
          if (x.code !== 0) {
            this.msgService.error(x.message)
          }
        })
      )
  }

  catchError() {}

  post<T, R>(url, data?: T | any): Observable<Result<R>> {
    return this.http
      .post<Result<R>>(`${this.prefix}${url}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .pipe(
        tap(x => {
          if (x.code !== 0) {
            this.msgService.error(x.message)
          }
        })
      )
  }

  delete<T, R>(url, data?: T | any): Observable<Result<R>> {
    return this.http
      .delete<Result<R>>(`${this.prefix}${url}`, {
        params: new HttpParams({
          fromObject: data
        }),
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .pipe(
        tap(x => {
          if (x.code !== 0) {
            this.msgService.error(x.message)
          }
        })
      )
  }

  put<T, R>(url, data?: T | any): Observable<Result<R>> {
    return this.http
      .put<Result<R>>(`${this.prefix}${url}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .pipe(
        tap(x => {
          if (x.code !== 0) {
            this.msgService.error(x.message)
          }
        })
      )
  }
}
