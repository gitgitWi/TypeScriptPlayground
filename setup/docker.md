# Docker 관련

## export

컨테이너를 하나의 tar 파일로 만들기

- [Docker Export Docs](https://docs.docker.com/engine/reference/commandline/export/)

```bash
docker export -o [만들어지는파일명].tar [현재컨테이너이름]
```

## import

tar 파일로 export 된 컨테이너 불러오기

- [Docker Import Docs](https://docs.docker.com/engine/reference/commandline/import/)
- `.tar`, `.tar.gz`, `.tgz`, `.bzip` 등 형식을 지원하며,
- 로컬 뿐만 아니라 http 주소로 된 파일도 가능
