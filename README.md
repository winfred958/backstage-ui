# flink-doctor-vue3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 目录结构
- dist
  - build 打包后文件
- node_modules
  - node依赖
- public
  - public 中的静态资源会被复制到 dist目录
- src
  - api: 与后端交互使用的相关方法和数据处理
  - assets: 静态资源, 例如图片, 图表, 字体 
  - components: 公共组件
  - router: vue router 配置
  - store: vuex 配置
    - global
    - modules
  - views: vue 模板, 路由对应的文件
    - 路由, 子路由
    
