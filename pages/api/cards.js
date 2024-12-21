import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, image_url } = req.body;
    const newCard = await prisma.card.create({
      data: { title, description, image_url },
    });
    return res.status(201).json(newCard);
  }
  // Handle other HTTP methods like GET, PUT, DELETE if necessary
}
