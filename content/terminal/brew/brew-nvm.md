# brew로 nvm설치 후 해줄 일들

```zsh
brew install nvm

# 폴더 생성 - 이미 되어 있을 수도 있음
mkdir ~/.nvm

# zsh 기본설정 변경
open ~/.zshrc
```

환경 변수 설정을 해준다(여기 있는 그대로 하기보다는 nvm 설치 할때 cli상에서 안내문을 띄어줄 것이다)

```zsh
# .zshrc
export PATH=/opt/homebrew/bin:$PATH
export PATH="$PATH:$HOME/.rvm/bin"

# This loads nvm bash_completion
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

```zsh
# 명령어 인식 확인 후
nvm -v

# 마지막 lts버전 설치 후 사용
nvm install --lts
```
