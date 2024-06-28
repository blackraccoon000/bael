import {User} from "@prisma/client";
import type {DefineMethods} from "aspida";

export type Methods = DefineMethods<{
  get: {
    query: {
      id: number;
    };
    resBody?: User;
  };
  post: {
    reqBody: Pick<User, "name" | "email" | "disabled">;
    resBody: User;
  };
  patch: {
    reqBody: Pick<User, "id" | "name" | "email" | "disabled">;
    resBody: User;
  };
  delete: {
    query: {
      id: number;
    };
  };
}>;
