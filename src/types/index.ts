export interface Painting {
  id: number
  title: string
  author: string
  year: number
  image: string
  description?: string
}

export interface News {
  id: number
  title: string
  date: string
  content: string
}

export interface ReviewForm {
  name: string
  email: string
  rating: string
  review: string
}
