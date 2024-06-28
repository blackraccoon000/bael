import {User} from "@prisma/client";
import type {DefineMethods} from "aspida";

export type Methods = DefineMethods<{
  get: {
    query: {
      page?: number; // ページ番号
      perPage?: number; // 1ページあたりの表示件数
    };
    resBody: {
      users: User[];
    };
  };
}>;
