import './style.css';

import { getConsoleTimes } from './utils';

import { loadAppleMinutes, loadApple30Mins, loadAppleDays } from './dummy';
import { getMinMaxByLoop, getMinMaxByMath, sortByArraySort } from './targets';

window.onload = function main() {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  const Header = document.createElement('h1');
  Header.innerText = `Test Loop Performances`;
  app.append(Header);

  [loadAppleDays, loadApple30Mins, loadAppleMinutes].forEach(async (loader) => {
    // await testsWithData(loader, [getMinMaxByLoop, getMinMaxByMath]);
    await testsWithData(loader, [sortByArraySort]);
  });
};

async function testsWithData(loader: typeof loadAppleMinutes, funcs: Function[]): Promise<void> {
  Object.entries(await loader()).map(([key, val]) => {
    if (!Array.isArray(val)) return;

    funcs.forEach((func) => {
      getConsoleTimes(() => func(val), func.name, {
        description: `${key}-${val.length}`,
      });
    });
  });
}
