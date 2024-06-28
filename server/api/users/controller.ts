import {PrismaClient} from "@prisma/client";
import {defineController} from "./$relay";

export default defineController(() => ({
  get: async ({query: {page = 1, perPage = 20}}) => {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
    });
    return {
      status: 200,
      body: {
        users,
      },
    };
  },
}));
