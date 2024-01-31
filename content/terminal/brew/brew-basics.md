# Brew 기초

## 용어들

[homebrew 용어집](https://docs.brew.sh/Manpage)

- formula: brew로 바로 설치 가능한것들(Homebrew package definition)
- cask: 서드파티 프로그램들(macOS native applications)
- tap: formulae, casks 그리고 external commands들의 디렉토리

## 기능들

**install**
[homebrew](https://brew.sh/)에서 다운 받읍시다

```zsh
brew search <package> # 패키지 검색
brew install <package> # 패키지 다운로드
brew uninstall <package> # 패키지 삭제
```

**tap**
homebrew 내의 저장소

```zsh
brew tap # 가지고 있는 tap들 확인 가능
brew untap <user/repo> # tap 삭제
brew tap <user/repo> # 해당 tap 사용
```

**cask**
서드파티 프로그램 설치용

```zsh
brew install cask # 후 사용 가능
brew install --cask <package> # cask 설치
```

**mas**
app store에서 어플리케이션 설치

```zsh
brew install mas # 후 사용 가능
mas search <package> # 패키지 검색 - 설치 코드 보여줌
mas install <code> # 패키지 설치
```

**etc**
그외 기능들

```zsh
brew ls # 설치된 패키지들 확인 가능
brew update # brew 자체를 최신버전으로
brew upgrade # 설치한 것들을 최신버전으로
```
