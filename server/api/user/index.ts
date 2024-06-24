import type {DefineMethods} from "aspida";

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    resBody: {
      message: string;
      user: {
        id: number;
        name: string | null;
      };
    };
  };
}>;
