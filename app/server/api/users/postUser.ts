import User from '~/models/User'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email } = body

  if (!name || !email) {
    throw createError({ statusCode: 400, statusMessage: 'Name and email are required' })
  }

  try {
    const existing = await User.findOne({ email })
    if (existing) {
      return existing
    }

    const user = await User.create({ name, email })
    return user
  } catch (err) {
    console.error('[Create user error]', err)
    throw createError({ statusCode: 500, statusMessage: 'Error creating user' })
  }
})
