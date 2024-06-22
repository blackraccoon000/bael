import {defineController} from "./$relay";

export default defineController(() => ({
  get: () => ({
    status: 200,
    body: {
      hello: "goodbye",
      message: "Goodbye, World!",
    },
  }),
}));
