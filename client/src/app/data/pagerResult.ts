export interface PagerResult<T> {
  docs: T[]
  pages: number
  total: number
}
