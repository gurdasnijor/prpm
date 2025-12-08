import { afterEach, beforeEach, vi } from 'vitest';

const originalExit = process.exit;
const originalCwd = process.cwd;
const originalChdir = process.chdir;

let mockedCwd = process.cwd();

beforeEach(() => {
  mockedCwd = process.cwd();

  vi.spyOn(process, 'exit').mockImplementation(((code?: number) => {
    throw new Error(`process.exit(${code ?? 0}) called`);
  }) as typeof process.exit);

  vi.spyOn(process, 'cwd').mockImplementation(() => mockedCwd);
  vi.spyOn(process, 'chdir').mockImplementation(((dir: string) => {
    mockedCwd = dir;
  }) as typeof process.chdir);
});

afterEach(() => {
  process.exit = originalExit;
  process.cwd = originalCwd;
  process.chdir = originalChdir;
});
