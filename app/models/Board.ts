import mongoose, { Document, Model, Schema } from 'mongoose'
import type { IUser } from './User'

export interface IBoard extends Document {
  name: string
  type: string
  structure: Record<string, any> 
  admin: IUser['_id']
  users: IUser['_id'][]
  createdAt: Date
  updatedAt: Date
}

const BoardSchema = new Schema<IBoard>(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    structure: { type: Schema.Types.Mixed, default: {} },
    admin: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
)

const Board: Model<IBoard> = mongoose.models.Board || mongoose.model<IBoard>('Board', BoardSchema)
export default Board
