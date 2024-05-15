# coding-bottari

## Nx commands

```bash
npx nx show project <projectName> --web
npx nx graph
npx nx reset # resets ./.nx/cache, local cache
npx nx repair
```

### for this repo

package base monorepo(pnpm) + nx

```bash
pnpm install
npx nx doctoc docs
npx nx clean <projectName> # deletes ./dist with rimraf
npx nx run-many -t lint --all
npx nx format:write
```

## TODOs

1. module federation OR micro frontend로 각 앱 만들어서 한 앱에 합치기 - 각자 다른 프레임워크 및 버전도 가능해야 함
2. ts & eslint + monorepo 글쓰기
3. reuse eslint config in monorepo [link](https://medium.com/reactbrasil/reuse-your-eslint-prettier-config-in-a-monorepo-with-lerna-54c1800cacdc)

## To read

- [doctoc](https://github.com/thlorenz/doctoc)
- [mathjax syntax](https://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.html)
- [katex syntax](https://katex.org/docs/supported)
- [모듈러 산술](https://ko.wikipedia.org/wiki/%EB%AA%A8%EB%93%88%EB%9F%AC_%EC%82%B0%EC%88%A0)
- [hello world js](https://helloworldjavascript.net/)

- [lit - web component](https://lit.dev/docs/frameworks/react/)
- [luigi - web component](https://luigi-project.io/)
- [preact + react = webcomponent article](https://www.voorhoede.nl/en/blog/building-design-system-react-web-components/)

- [webpack - withWeb](https://github.com/nrwl/nx/blob/master/packages/webpack/src/plugins/nx-webpack-plugin/lib/apply-web-config.ts)
- [webpack - withReact](https://github.com/nrwl/nx/blob/master/packages/react/plugins/nx-react-webpack-plugin/lib/apply-react-config.ts)
- [webpack - withModulefederation](https://github.com/nrwl/nx/blob/master/packages/react/src/module-federation/with-module-federation.ts)
- [webpack - composeplugins](https://github.com/nrwl/nx/blob/master/packages/next/src/utils/compose-plugins.ts)

- [docker 실습](https://www.youtube.com/watch?v=HbKCxBFT2wk&list=PLRx0vPvlEmdChjc6N3JnLaX-Gihh5pHcx)

- [liveblocks - nextjs multiplayer](https://ikehakinyemi.medium.com/how-to-create-a-multiplayer-online-form-with-next-js-and-liveblocks-d90f11649dde)

- [aws FE deploy](https://medium.com/mycloudseries/frontend-deployments-in-aws-s3-cloudfront-vs-aws-amplify-vs-ec2-94f9904d934f)
- aws cloudformation
