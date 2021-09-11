# Node.js 관련

## NVM

이미 Node 14가 설치되어 있지만 여러 버전 관리 필요한 경우 설치

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

## global packages

`npm install` 시 가끔 버전 꼬이는 문제 있어서 `yarn`으로 설치

```bash
npm i -g npm yarn

yarn global add @vue/cli @nestjs/cli typescript
```

### SSL 관련 문제

- `self-signed certificate in certificate chain`
  - 인증서 관련 문제인 경우
  - => `yarn config set "strict-ssl" false`
