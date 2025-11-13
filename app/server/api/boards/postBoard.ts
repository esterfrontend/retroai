import Board, { type IBoard } from '~/models/Board'
import User, { type IUser } from '~/models/User'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, type, userName, userEmail } = body

  if (!name || !type || !userName || !userEmail)
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })

  try {
    let user: IUser | null = await User.findOne({ email: userEmail })
    if (!user) {
      user = await User.create({ name: userName, email: userEmail })
    }

    const board: IBoard = await Board.create({
      name,
      type,
      structure: {},
      admin: user._id,
      users: [user._id]
    })

    return { board, user }
  } catch (err) {
    console.error(err)
    throw createError({ statusCode: 500, statusMessage: 'Error creating board' })
  }
})
