export type Room = Readonly<{
  id: number
  imageUrl: string
  title: string
}>

export type RoomList = readonly Room[]
