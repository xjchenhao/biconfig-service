# biconfig-service

Business Intelligence graph configuration

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

## 环境依赖
1. 安装docker
2. 在工程根目录下执行`docker-compose up`
3. 执行`docker cp ./init.d/mongo/createGraphRecord.js biconfig-service_mongodb_1:/root && docker exec -it biconfig-service_mongodb_1 /bin/bash -c 'mongo --quiet 127.0.0.1:27017/biconfig /root/createGraphRecord.js'`
4. 配置完成