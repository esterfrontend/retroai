import User from '~/models/User'

export default defineEventHandler(async () => {
  return await User.find().sort({ createdAt: -1 })
})
