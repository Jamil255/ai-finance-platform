import { currentUser } from '@clerk/nextjs/server'
import db from './prisma'
const checkUser = async () => {
  const user = await currentUser()
  if (!user) return null
  try {
    const loginUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    })
    if (loginUser) return loginUser
    const name = `${user.firstName} ${user.lastName}`
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name,
        imageUrl: user.imageUrl,
      },
    })
    return newUser
  } catch (error) {
    console.log(error.message)
  }
}
export default checkUser
