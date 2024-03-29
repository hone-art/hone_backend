import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Image {
  url: string;
  filePath: string;
}

const imagesModel = {
  getById: async function (id: number) {
    const image = await prisma.image.findUnique({
      where: { id: id, },
    });

    return image;
  },

  create: async function (entry: Image) {
    const newImage = await prisma.image.create({
      data: entry,
    });

    return newImage;
  },

  delete: async function (id: number) {
    const deleteImage = await prisma.image.delete({
      where: {
        id: id,
      }
    });

    return deleteImage;
  }

}

export default imagesModel;