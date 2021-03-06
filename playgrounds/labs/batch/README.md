# Batch Processing in Browser / Node.js

[๐ GitHub Project](https://github.com/gitgitWi/TypeScriptPlayground/projects/1)

## ๊ณ๊ธฐ

์ค๋๋ง์ ํจ์บ  ๊ฐ์ ๋ฆฌ์คํธ๋ฅผ ๋ณด๋ค๊ฐ, Spring ์ชฝ์์ ๋๊ท๋ชจ ํธ๋ํฝ ์๋น์ค๋ฅผ ์ํ [Spring Batch](https://spring.io/guides/gs/batch-processing/) ๊ด๋ จ ๊ฐ์๊ฐ ์๊ทผ ์๋ ๊ฑธ ๋ณด๊ฒ ๋จ

Java๋ Multi-thread ์ธ์ด๋๊น batch ์ฒ๋ฆฌ๊ฐ ์ด๋ ต์ง ์๊ฒ ๋  ๊ฑฐ ๊ฐ์๋ฐ,

Single-thread ์ธ์ด์ธ JavaScript์์๋ ๊ทธ๋ฐ ๋์ฉ๋ ์ฒ๋ฆฌ๊ฐ ๊ฐ๋ฅํ ์ง(_๋ป์ง ์์์ง.._) ๊ธ ๊ถ๊ธํด์ง..๐ง

<br />

[`nodejs batch`](https://www.google.com/search?q=nodejs+batch&newwindow=1) ์ ๋๋ก ๊ตฌ๊ธ๋งํด๋ณด๋, ๋๋ถ๋ถ **`node-scheduler`**, **`node-cron`** ๋ฅผ ํ์ฉํ๋ผ๋ ๊ธ๋ค์

์๊ฐํด๋ณด๋ ์ด๋ฏธ ์ค๋ฌด์์ ์ ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ง์  ํ์ฉํ์๊ณ ,

์ฌ๋ด ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์๋ฐ์ดํธ ์ดํ์๋ `Nest.js` ์ [`@nestjs/schedule`](https://docs.nestjs.com/techniques/task-scheduling)๋ฅผ ํ์ฉํ๋๋ฐ, ์ด๊ฑฐ ์ญ์ ์ `node-cron`์ `Nest.js`์์ wrapping ํ ๊ฑฐ์

<br />

์ํผ ๋ธ๋ผ์ฐ์ ์ `Node.js` ๊ฐ๊ฐ์ ํ๊ฒฝ์์ batch๋ฅผ ์ด๋ป๊ฒ ๊ตฌํํ  ์ ์๋์ง ์๋ํด๋ณด๊ณ ,

๊ต์ฅํ ๋ฌด์ธ๋ชจ์ผ ๊ฑฐ ๊ฐ์ง๋ง.. `JavaScript`๋ก ๋น๋ฐ์ดํฐ๋ฅผ ํ๋ฒ ๋๋ ค๋ณด๋๋ก ํ์ _~~(๋ถ์ ์๋, ๊ฑ ๋๋ ค๋ณด๋๊ฑฐ์ ๐คช๐คช๐คช)~~_

- `VSCode` ์ง๋ ์๋์์ ์ถ๊ฐ๋ [`tensorflow.js` ๋ก ์ธ์ด ์๋ ํ์ง ๊ธฐ๋ฅ](https://code.visualstudio.com/updates/v1_60#_automatic-language-detection)์ด ๊ฝค ๋น ๋ฅธ ๊ฑธ ๋ณด๋ฉด..
- JS๋ก ๋ฐ์ดํฐ๋ถ์, ์๊ฐ๋ณด๋ค ๊ด์ฐฎ์์ง๋..?

## Resources; ์ค๋น๋ฌผ

- Kaggle ๋น๋ฐ์ดํฐ: [Air Pollution in Seoul](https://www.kaggle.com/bappekim/air-pollution-in-seoul)
  - ์ด์ค์์ `Measurement_info.csv` ํ์ผ์ด 124.38MB
  - ์งํ์ฒ  ์ญ๋ณ ์๊ฐ๋น 6๊ฐ ์ค์ผ๋ฌผ์ง/์งํ(SO2, NO2, CO, O3, PM10, PM2.5) ์ธก์  ๊ฒฐ๊ณผ์ธ ๋ฏ

## Implements in **Node.js**

- ์์์ ์ธ๊ธํ [`node-schedule`](https://github.com/node-schedule/node-schedule), [`node-cron`](https://github.com/ncb000gt/node-cron)์ ๋ง ๊ทธ๋๋ก linux์ cron์ Node.js ํ๊ฒฝ์์๋ ํ  ์ ์๋๋ก ๋ง๋ค์ด ์ค ๊ฑฐ
- ๊ทธ๋ฌ๋๊น ํน์  ์์ ํ๋ํ๋๋ฅผ ํน์  ์์ ๋ง๋ค ์๋ํ  ์ ์๊ฒ **_๋ฐ๋ณต_** ์ค์ ์ ํด์ฃผ๋๊ฑฐ์ง, ์ด๊ฒ batch process์ ์๋ ์๋ฏธ์ ๋ง๋๋ ์กฐ๊ธ ์๋ฌธ์ด..?
  - `node-schedule`์ ๋จ์ํ `timer++` ์ ๋๋ก ํ๋ ๊ฑฐ ๊ฐ๊ณ .. ???
  - `node-cron` ์ฝ๋๋ฅผ ๋ณด๋ `Node.js` ์ฝ์ด์ `EventEmitter`๋ฅผ ์ฌ์ฉํ๋ ๋ฏ..
- ์ข๋ ์ฐพ์๋ณด๋ [`batch`](https://github.com/visionmedia/batch), [`p-limit`](https://github.com/sindresorhus/p-limit/blob/main/index.js) ๋ฑ ์ข๋ batch ์ค๋ฌ์ด ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค์ด ์๊ธด ํจ
  - ๊ทผ๋ฐ last update๊ฐ ๋ช๋์ ์ธ ๊ฒ๋ ๋ง๊ณ , ES5 ๋ฌธ๋ฒ๋ ๋ง๊ณ , TS ์ง์ ์๋๋ ๊ฒ๋ค๋ ์๊ทผ ์์ด์ ์์ฌ์..
  - _**๊ทธ๋ฅ ์ง์  ๋ง๋ค์ด๋ณด๊ณ , ๊ด์ฐฎ์ผ๋ฉด ๋ฐฐํฌํด๋ณด์..! ๐๐๐**_
- [Stream](https://nodejs.org/api/stream.html) + [Worker threads](https://nodejs.org/api/worker_threads.html)๋ฅผ ์ด์ฉํด๋ณด๋ฉด ๋์ง ์์๊น?

## Implements in **Browser**

- ๊ณผ์ฐ ๋ธ๋ผ์ฐ์ ๊ฐ ๋ฒํธ ์ ์์์ง?
- ์๋ง๋ Promise + Service Worker?
- ๋ธ๋ผ์ฐ์ ์์ ๋ฐ๋ก fileSystem์ ์ ๊ทผํ  ์ ์๋ API๊ฐ ์๋ค๊ณ  ํ๋๋ฐ..?
  - [FileSystem (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/FileSystem)
  - [The File System Access API: simplifying access to local files (web.dev)](https://web.dev/file-system-access/)

---

### References; ์ฐธ๊ณ ํ๊ฑฐ + ๊ทธ๋ฅ ๊ฐ์ด ๋ณผ๋งํ ๊ฑฐ

- [Batch processing (Wikipedia_EN)](https://en.wikipedia.org/wiki/Batch_processing)
  - ์์ด ๋ฌธ์์๋ `one-off production`, `production of a "batch" of multiple items at once, one stage at a time`, `mass production, all stages in process at once` ๋ฑ
  - ๋ญ๊ฐ ๋๊ท๋ชจ ์์์ ํ๋ฐฉ์ ์ฒ๋ฆฌํ๋ ๋๋์ผ๋ก ์ ์ํ๋๋ฐ
- [์ผ๊ด ์ฒ๋ฆฌ (Wikipedia_KO)](https://ko.wikipedia.org/wiki/์ผ๊ด_์ฒ๋ฆฌ)
  - ํ๊ตญ์ด ๋ฌธ์์๋ batch processing์ ์ค์ผ์ฅด๋ง + ์์ฐจ ์ฒ๋ฆฌ ๊ฐ๋๋ ํฌํจ๋๋ ๊ฑธ๋ก ์ ์ํ๋ค
- [[์ฐ์ํํํฌํ ํฌ] ์ ์ฐฉ์ ์ด๋ฒคํธ ์๋ฒ ์์กด๊ธฐ! 47๋ง RPM์์ ์ด์๋จ๋ค?!](https://youtu.be/MTSn93rNPPE?t=237)
