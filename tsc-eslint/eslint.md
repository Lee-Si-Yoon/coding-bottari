# eslint

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
