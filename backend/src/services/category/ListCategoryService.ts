import prismaClient from "../../prisma";

//findMany busca tudo que ele encontrar

class ListCategoryService {
  async execute() {
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { ListCategoryService };
