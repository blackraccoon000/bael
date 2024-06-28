import {PrismaClient} from "@prisma/client";
import {defineController} from "./$relay";

const prisma = new PrismaClient();

export default defineController(() => ({
  get: async ({query: {id}}) => {
    try {
      const user = (await prisma.user.findUnique({where: {id}})) ?? undefined;
      return {
        status: 200,
        body: user,
      };
    } catch (error) {
      return {
        status: 500,
        body: {error: "Internal Server Error"},
      };
    }
  },
  post: async ({body: {name, email, disabled}}) => {
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          disabled,
        },
      });
      return {
        status: 201,
        body: user,
      };
    } catch (error) {
      return {
        status: 500,
        body: {error: "Internal Server Error"},
      };
    }
  },
  patch: async ({body: {id, name, email, disabled}}) => {
    try {
      const user = await prisma.user.update({
        where: {id},
        data: {name, email, disabled},
      });
      return {
        status: 200,
        body: user,
      };
    } catch (error) {
      return {
        status: 500,
        body: {error: "Internal Server Error"},
      };
    }
  },
  delete: async ({query: {id}}) => {
    try {
      await prisma.user.delete({where: {id}});
      return {
        status: 204,
      };
    } catch (error) {
      return {
        status: 500,
        body: {error: "Internal Server Error"},
      };
    }
  },
}));
