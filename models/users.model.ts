import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const usersModel = {
  getById: async function (userId: number) {
    // WRITE CODE TO GET A USER IN DATABASE BY ID
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      return user;
    },

  create: async function (userData: object) {
    // WRITE CODE TO CREATE NEW USER IN DATABASE
    const newUser = await prisma.user.create({ data: { userData } });
    return newUser;
  
  },

  update: async function (userId: number, updateData: object) {
    // WRITE CODE TO UPDATE A USER IN DATABASE BY ID
      try {
        const updatedUser = await prisma.user.update({
          where: {
            id: userId,
          },
          data: updateData,
        });
        //console.log('User updated:', updatedUser);
        return updatedUser;
      } catch (error) {
        console.error('Error updating user');
        throw error; 
      }
    }

  }


export default usersModel;