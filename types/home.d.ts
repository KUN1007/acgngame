import type { GWApiData } from './api'

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
  time: Date
  status: string
}

export type HomeGameResponseData = GWApiData<Game[]>
