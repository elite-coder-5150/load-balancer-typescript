"use strict";
const redis = require("redis");
// @ts-ignore
import { Config } from "models/config";
const RedisConfig = (() => {
    function RedisConfig(config: Config) {
        this.host = config.host;
        this.port = config.port;
        this.db = config.db;
        this.password = config.password;
    }

    return RedisConfig;
})();

exports.RedisConfig = RedisConfig;

const RedisWeightedPool = () => {
    function RedisWeightedPool(config: Config, weight: number) {
        this.DEFAULT_REDIS_HOST = config.host;
        this.DEFAULT_REDIS_PORT = config.port;
        this.DEFAULT_REDIS_DB = config.db;
    }
};
