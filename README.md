# JavaScript/TypeScript Playground

## 프로젝트 구조

- Monorepo: `yarn workspaces`

### `labs`

> 소소한(?) 아이디어 실험 공간

- [자료구조 탐구](./playgrounds/labs/data-structure/)

  - [`Array`-`Set` 읽기 성능 비교 해보기](./playgrounds/labs/data-structure/set/README.md): 예상과 다른 결과.. 미완성

- [JS Batch 구현해보기](./playgrounds/labs/batch/README.md)

  - Zero-dependency로 batch 구현해보기
  - 아이디어만 나온 상태

- [반복문 성능 비교](./playgrounds/labs/loop-performances/)

  - `for` 문은 항상 빠를까에서 시작된 실험
  - 많은 프로그래밍 언어들이 그렇듯, JS 엔진도 최적화를 거듭하면서 짧고 보기 좋은 코드가 더 빠른 성능을 보여주기도
  - JS는 다른 언어에 비해선 느린 편이지만, 생각보다는 빠르다

- [클라이언트에서 Adapter Pattern 사용해보기](./playgrounds/labs/adapter-pattern/README.md)
  - API 스펙 변경에 좀더 유연하게 대응하기 위한 디자인 패턴 활용
  - 중요한 건 SOLID 원칙, 그 중에서도 OCP를 따르는 것..

### `utils`

> labs에서 사용할 공통 유틸
