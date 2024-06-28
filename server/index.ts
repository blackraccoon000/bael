import Fastify from "fastify";
import FastifyCors from "@fastify/cors";
import {log} from "console";
import server from "./$server";

const fastify = Fastify();

// TODO: CORSの設定を追加する
fastify.register(FastifyCors, {});

server(fastify);

log("server start");

fastify.listen({port: 8888, host: "0.0.0.0"});
