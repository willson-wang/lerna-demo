# lerna-monorepo-demo

## 简介（Introduction)
 
lerna 6 monorepo 模版
 
## 特性（Feature）
 
- 规范`commit message`，支持`commit message`检查
- 集成自动升级版本号与生成`changeLog.md`
- 集成github action自动发布`npm`包
- 开箱即用`scripts`命令
- 集成`eslint` 检查
- `lerna`自动管理包依赖


## 注意事项

- 根据项目情况修改 `package.json` 中 `name`、`main`、`module`、`repository`、`author` 的值，其中 `main`、`module` 可不改；


## 项目设计结构（Structure）
 
```bash
.
├── README.md
├── commitlint.config.js
├── lerna.json
├── package.json
├── packages
│   ├── cli
│   │   ├── CHANGELOG.md
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── test-lerna-cli.js
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   ├── cli-serve
│   │   ├── CHANGELOG.md
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   ├── cli-uid
│   │   ├── CHANGELOG.md
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   └── cli-utils
│       ├── CHANGELOG.md
│       ├── README.md
│       ├── package.json
│       ├── src
│       │   └── index.ts
│       └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.base.json
```
 
## 本地开发（Development）
 
### 首次开发

- git clone 项目到本地
- 修改根目录及子包目录`package.json` 中 `name`、`main`、`module`、`repository`、`author` 的值，其中 `main`、`module` 根据自己的需求调整；
- 删除原 README.md 内容，书写自己的 README.md；
- `pnpm install` 安装所有依赖及本地包依赖
- `pnpm build` 打包构建
- git add . && git commit -m 'feat: xxxx'
- `pnpm version:xxx` 生成需要发包的版本并打上tag，代码提交到远程
- github action内触发`pnpm publish-all`命令发布npm包

### N次开发

- 修改packages/xxx文件
- git add .
- git commit -m 'fix(xxx): 修复数据读取错误bug'
- git log 查看生成的版本号是否是对的
- 如果版本号不符合，执行`git reset --hard HEAD^`，删除`pnpm version:pre`命令产生的`commit`，继续执行`git tag -d vx.x.x-beta.x`，删除`pnpm version:pre`命令产生的`tag`
- 在重新git add. && git commit -m 'fix(xxx): 修复数据读取错误bug'
- 如果版本号是对的，则提交代码 git push

更多lerna使用方式参考[lerna管理monorepo多包项目](https://blog.willson-wang.com/blog/lernaguanliMonorepoxiangmushijian)


