import { Response } from 'express'

export interface Entity {
  name: string;
  id: number
}

export interface Db {
  entities: Entity[]
}

export interface Client {
  id: number;
  res: Response
}

export enum OpType {
  Created = 'Created',
  Updated = 'Updated',
  Deleted = 'Deleted'
}
