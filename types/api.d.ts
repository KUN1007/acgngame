export interface GWApi<T> {
  code: number
  data: T
  msg: string
}

export interface GWApiData<T> {
  data: GWApi<T>
  dataAll: number
  dataPerPage: number
  pageNow: number
}
