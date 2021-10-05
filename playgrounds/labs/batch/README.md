# Batch Processing in Browser / Node.js

[👉 GitHub Project](https://github.com/gitgitWi/TypeScriptPlayground/projects/1)

## 계기

오랜만에 패캠 강의 리스트를 보다가, Spring 쪽에서 대규모 트래픽 서비스를 위한 [Spring Batch](https://spring.io/guides/gs/batch-processing/) 관련 강의가 은근 있는 걸 보게 됨

Java는 Multi-thread 언어니까 batch 처리가 어렵지 않게 될 거 같은데,

Single-thread 언어인 JavaScript에서도 그런 대용량 처리가 가능할지(_뻗지 않을지.._) 급 궁금해짐..🧐

<br />

[`nodejs batch`](https://www.google.com/search?q=nodejs+batch&newwindow=1) 정도로 구글링해보니, 대부분 **`node-scheduler`**, **`node-cron`** 를 활용하라는 글들임

생각해보니 이미 실무에서 위 두 라이브러리를 직접 활용했었고,

사내 라이브러리 업데이트 이후에는 `Nest.js` 의 [`@nestjs/schedule`](https://docs.nestjs.com/techniques/task-scheduling)를 활용하는데, 이거 역시 위 `node-cron`을 `Nest.js`에서 wrapping 한 거임

<br />

암튼 브라우저와 `Node.js` 각각의 환경에서 batch를 어떻게 구현할 수 있는지 시도해보고,

굉장히 무쓸모일 거 같지만.. `JavaScript`로 빅데이터를 한번 돌려보도록 하자 _~~(분석 아님, 걍 돌려보는거임 🤪🤪🤪)~~_

- `VSCode` 지난 업뎃에서 추가된 [`tensorflow.js` 로 언어 자동 탐지 기능](https://code.visualstudio.com/updates/v1_60#_automatic-language-detection)이 꽤 빠른 걸 보면..
- JS로 데이터분석, 생각보다 괜찮을지도..?

## Resources; 준비물

- Kaggle 빅데이터: [Air Pollution in Seoul](https://www.kaggle.com/bappekim/air-pollution-in-seoul)
  - 이중에서 `Measurement_info.csv` 파일이 124.38MB
  - 지하철 역별 시간당 6개 오염물질/지표(SO2, NO2, CO, O3, PM10, PM2.5) 측정 결과인 듯

## Implements in **Node.js**

- 위에서 언급한 [`node-schedule`](https://github.com/node-schedule/node-schedule), [`node-cron`](https://github.com/ncb000gt/node-cron)은 말 그대로 linux의 cron을 Node.js 환경에서도 할 수 있도록 만들어 준 거
- 그러니까 특정 작업 하나하나를 특정 시점마다 작동할 수 있게 **_반복_** 설정을 해주는거지, 이게 batch process의 원래 의미와 맞나는 조금 의문이..?
  - `node-schedule`은 단순히 `timer++` 정도로 하는 거 같고.. ???
  - `node-cron` 코드를 보니 `Node.js` 코어의 `EventEmitter`를 사용하는 듯..
- 좀더 찾아보니 [`batch`](https://github.com/visionmedia/batch), [`p-limit`](https://github.com/sindresorhus/p-limit/blob/main/index.js) 등 좀더 batch 스러운 라이브러리들이 있긴 함
  - 근데 last update가 몇년전인 것도 많고, ES5 문법도 많고, TS 지원 안되는 것들도 은근 있어서 아쉬움..
  - _**그냥 직접 만들어보고, 괜찮으면 배포해보자..! 🚀🚀🚀**_
- [Stream](https://nodejs.org/api/stream.html) + [Worker threads](https://nodejs.org/api/worker_threads.html)를 이용해보면 되지 않을까?

## Implements in **Browser**

- 과연 브라우저가 버틸 수 있을지?
- 아마도 Promise + Service Worker?
- 브라우저에서 바로 fileSystem에 접근할 수 있는 API가 있다고 하던데..?
  - [FileSystem (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/FileSystem)
  - [The File System Access API: simplifying access to local files (web.dev)](https://web.dev/file-system-access/)

---

### References; 참고한거 + 그냥 같이 볼만한 거

- [Batch processing (Wikipedia_EN)](https://en.wikipedia.org/wiki/Batch_processing)
  - 영어 문서에는 `one-off production`, `production of a "batch" of multiple items at once, one stage at a time`, `mass production, all stages in process at once` 등
  - 뭔가 대규모 작업을 한방에 처리하는 느낌으로 정의하는데
- [일괄 처리 (Wikipedia_KO)](https://ko.wikipedia.org/wiki/일괄_처리)
  - 한국어 문서에는 batch processing에 스케쥴링 + 순차 처리 개념도 포함되는 걸로 정의하네
- [[우아한테크토크] 선착순 이벤트 서버 생존기! 47만 RPM에서 살아남다?!](https://youtu.be/MTSn93rNPPE?t=237)
