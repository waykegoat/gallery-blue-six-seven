export interface IPainting {
  id: number
  title: string
  author: string
  year: number
  image: string
  description?: string
}

export interface INews {
  id: number
  title: string
  date: string
  content: string
}

export interface IReviewForm {
  name: string
  email: string
  rating: string
  review: string
}
