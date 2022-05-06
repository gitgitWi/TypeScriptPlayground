import './style.css';

import { getConsoleTimes } from './utils';

import { loadAppleMinutes, loadApple30Mins, loadAppleDays } from './dummy';
import { getMinMaxByLoop, getMinMaxByMath } from './targets';

window.onload = function main() {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  const Header = document.createElement('h1');
  Header.innerText = `Test Loop Performances`;
  app.append(Header);

  [loadAppleDays, loadApple30Mins, loadAppleMinutes].forEach(async (loader) => {
    await testsWithData(loader);
  });
};

async function testsWithData(loader: typeof loadAppleMinutes) {
  Object.entries(await loader()).map(([key, val]) => {
    if (!Array.isArray(val)) return;

    getConsoleTimes(() => getMinMaxByLoop(val), getMinMaxByLoop.name, {
      description: `${key}-${val.length}`,
    });

    getConsoleTimes(() => getMinMaxByMath(val), getMinMaxByMath.name, {
      description: `${key}-${val.length}`,
    });
  });

  return;
}
