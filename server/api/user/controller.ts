import {PrismaClient} from "@prisma/client";
import {defineController} from "./$relay";

export default defineController(() => ({
  get: () => ({status: 200, body: "Hello"}),
  post: async () => {
    // curl -X POST http://localhost:8888/user
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
      data: {
        name: "Alice",
      },
    });
    console.log(user);
    return {
      status: 201,
      body: {
        message: "User created",
        user,
      },
    };
  },
}));
