import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getItems() {
  return await prisma.item.findMany();
}

export async function createItem(data) {
  return await prisma.item.create({
    data,
  });
}

export async function updateItem(id, data) {
  return await prisma.item.update({
    where: { id },
    data,
  });
}

export async function deleteItem(id) {
  return await prisma.item.delete({
    where: { id },
  });
}
