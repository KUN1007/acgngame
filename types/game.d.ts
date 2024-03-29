import type { GWApi } from './api'

interface DownloadLink {
  code: string
  link: string
  name: string
  status: boolean
}

interface Publisher {
  contribution: number
  group: string
  icon: string
  id: number
  uid: string
  username: string
}

export interface GameDetail {
  collects: number
  download: DownloadLink[]
  gid: string
  id: number
  image: string
  intro: string
  is_del: boolean
  publisher: Publisher
  status: string
  tags: string
  time: string
  title: string
  views: number
}

export type GameDetailResponseData = GWApi<GameDetail>
