export type Attendee = Readonly<{
  id: number
  imageUrl: string
  nickname: string
}>

export type AttendeeList = readonly Attendee[]
