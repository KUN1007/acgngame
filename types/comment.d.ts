import type { GWApiData } from './api'

interface Publisher {
  contribution: number
  group: string
  icon: string
  id: number
  uid: string
  username: string
}

export interface Comment {
  content: string
  gameId: string
  id: number
  publisher: Publisher
  reply_to: number
  status: number
  timestamp: Date
}

export type CommentResponseData = GWApiData<Comment[]>
