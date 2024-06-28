import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1evyzq9 } from './goodbye';
import type { Methods as Methods_1yrd359 } from './hi';
import type { Methods as Methods_mdeh7w } from './post';
import type { Methods as Methods_tli9od } from './user';
import type { Methods as Methods_1xhiioa } from './users';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8888' : baseURL).replace(/\/$/, '');
  const PATH0 = '/goodbye';
  const PATH1 = '/hi';
  const PATH2 = '/post';
  const PATH3 = '/user';
  const PATH4 = '/users';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

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
      get: (option: { query: Methods_tli9od['get']['query'], config?: T | undefined }) =>
        fetch<Methods_tli9od['get']['resBody']>(prefix, PATH3, GET, option).json(),
      $get: (option: { query: Methods_tli9od['get']['query'], config?: T | undefined }) =>
        fetch<Methods_tli9od['get']['resBody']>(prefix, PATH3, GET, option).json().then(r => r.body),
      post: (option: { body: Methods_tli9od['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_tli9od['post']['resBody']>(prefix, PATH3, POST, option).json(),
      $post: (option: { body: Methods_tli9od['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_tli9od['post']['resBody']>(prefix, PATH3, POST, option).json().then(r => r.body),
      patch: (option: { body: Methods_tli9od['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_tli9od['patch']['resBody']>(prefix, PATH3, PATCH, option).json(),
      $patch: (option: { body: Methods_tli9od['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_tli9od['patch']['resBody']>(prefix, PATH3, PATCH, option).json().then(r => r.body),
      delete: (option: { query: Methods_tli9od['delete']['query'], config?: T | undefined }) =>
        fetch(prefix, PATH3, DELETE, option).send(),
      $delete: (option: { query: Methods_tli9od['delete']['query'], config?: T | undefined }) =>
        fetch(prefix, PATH3, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_tli9od['get']['query'] } | { method: 'delete'; query: Methods_tli9od['delete']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    users: {
      get: (option: { query: Methods_1xhiioa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody']>(prefix, PATH4, GET, option).json(),
      $get: (option: { query: Methods_1xhiioa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
