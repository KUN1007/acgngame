import type { GWApi } from './api'

export interface Publisher {
  id: number
  username: string
  icon: string
  contribution: number
}

export interface Game {
  id: number
  title: string
  image: string
  publisher: Publisher
  views: number
  collects: number
  tags: string
  is_del: boolean
  git: string
  time: string
  status: string
}

export interface HomeGameData {
  data: Game[]
  dataAll: number
  dataPerPage: number
  pageNow: number
}

export type HomeGameResponseData = GWApi<HomeGameData>
