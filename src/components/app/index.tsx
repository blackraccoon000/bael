"use client";

import apiClient from "@/libs/apiClient";
import dayjs from "dayjs";
import {useCallback, useEffect, useState} from "react";
import useSWR from "swr";

const AppClient = () => {
  const {data, mutate} = useSWR("xxx", () =>
    apiClient.users.$get({query: {page: 1, perPage: 10}})
  );

  return (
    <>
      <h1>Root XXXX</h1>
      <button
        onClick={() => {
          apiClient.user
            .$post({
              body: {
                name: "Alice",
                email: null,
                disabled: false,
              },
            })
            .then((res) => {
              console.log(res);
            });
        }}
      >
        post
      </button>
      <div>
        {data?.users?.map(
          ({id, name, email, disabled, createdAt, updateAt}) => {
            const formattedCreatedAt = dayjs(createdAt).format("YYYY-MM-DD");
            const formattedUpdateAt = dayjs(updateAt).format("YYYY-MM-DD");
            return (
              <div key={id} className="border px-2 py-1">
                <span className="px-2 py-1">{id}</span>
                <span className="px-2 py-1">{name}</span>
                <span className="px-2 py-1">{email}</span>
                <span className="px-2 py-1">{disabled}</span>
                <span className="px-2 py-1">{formattedCreatedAt}</span>
                <span className="px-2 py-1">{formattedUpdateAt}</span>
                <button
                  onClick={() => {
                    apiClient.user.$get({query: {id}}).then((res) => {
                      console.log(res);
                    });
                  }}
                >
                  clickMe
                </button>
                <button
                  onClick={() => {
                    apiClient.user.$delete({query: {id}}).then((res) => {
                      console.log(res);
                    });
                    mutate();
                  }}
                >
                  delete
                </button>
              </div>
            );
          }
        )}
      </div>
      <button onClick={() => {}}>xxx</button>
    </>
  );
};

export default AppClient;
