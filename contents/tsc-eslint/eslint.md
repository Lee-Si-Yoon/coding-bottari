# eslint

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [저장할때 마다 eslint 돌리기](#%EC%A0%80%EC%9E%A5%ED%95%A0%EB%95%8C-%EB%A7%88%EB%8B%A4-eslint-%EB%8F%8C%EB%A6%AC%EA%B8%B0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

```bash
npx eslint --print-config <target to know> #특정 파일을 어떤 eslinctrc로 돌리고 있는지 알아내기

DEBUG=eslint:cli-engine npx eslint <directory> #eslint 돌리면 어떤 파일들이 돌려지고 있는지 알기

npx eslint <directory> --debug #verbose 모드로 돌려지는 과정 보기
```

## 저장할때 마다 eslint 돌리기

```json
// .vscode/settings.json

"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
