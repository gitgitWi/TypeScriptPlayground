# JS/TS playground based on Docker

JavaScript/TypeScript Playground

## Build

## VSCode Extensions

컨테이너 빌드하면서 [`devcontainer.json`]('./.devcontainer/devcontainer.json')에 명시된 VSCode Extensions도 한번에 설치하려면 VSCode Remote-container 로 설치하는 것이 편함

### Extension List

remote 환경에서 추가로 설치해줘야 하는 경우만 추가

```json
{
  "extensions": [
    "ms-azuretools.vscode-docker",
    "dbaeumer.vscode-eslint",
    "mhutchie.git-graph",
    "oderwat.indent-rainbow",
    "christian-kohler.path-intellisense",
    "rvest.vs-code-prettier-eslint",
    "esbenp.prettier-vscode",
    "christian-kohler.npm-intellisense",
    "ms-vscode.vscode-typescript-next",
    "eamodio.gitlens",
    "mrmlnc.vscode-scss",
    "rangav.vscode-thunder-client",
    "octref.vetur",
    "visualstudioexptteam.vscodeintellicode",
    "sdras.vue-vscode-snippets",
    "codezombiech.gitignore",
    "gencer.html-slim-scss-css-class-completion"
  ]
}
```

## Docker

```bash
docker build -t ts-playground

docker run -d ts-playground
```
