import type { AspidaClient } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1evyzq9 } from './goodbye';
import type { Methods as Methods_1yrd359 } from './hi';
import type { Methods as Methods_mdeh7w } from './post';
import type { Methods as Methods_tli9od } from './user';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8888' : baseURL).replace(/\/$/, '');
  const PATH0 = '/goodbye';
  const PATH1 = '/hi';
  const PATH2 = '/post';
  const PATH3 = '/user';
  const GET = 'GET';
  const POST = 'POST';

  return {
    goodbye: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1evyzq9['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1evyzq9['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    hi: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1yrd359['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1yrd359['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    post: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_mdeh7w['get']['resBody']>(prefix, PATH2, GET, option).text(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_mdeh7w['get']['resBody']>(prefix, PATH2, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    user: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody']>(prefix, PATH3, GET, option).text(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody']>(prefix, PATH3, GET, option).text().then(r => r.body),
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['post']['resBody']>(prefix, PATH3, POST, option).json(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['post']['resBody']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody']>(prefix, '', GET, option).json(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody']>(prefix, '', GET, option).json().then(r => r.body),
    $path: () => `${prefix}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
