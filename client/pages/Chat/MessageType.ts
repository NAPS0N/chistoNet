export type MessageType = {
  id?: number;
  message: string;
  fromId: number;
  toId: number;
  createdAt: Date;
  updatedAt: Date;
};
