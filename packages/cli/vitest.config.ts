import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/__tests__/**/*.test.ts'],
    exclude: ['node_modules', 'dist'],
    testTimeout: 10000,
    setupFiles: ['vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.d.ts', 'src/__tests__/**', 'src/index.ts'],
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: 'coverage',
    },
    // Run tests in a single thread to avoid IPC channel errors in CI
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    clearMocks: true,
    restoreMocks: true,
  },
  resolve: {
    alias: {
      '@pr-pm/registry-client': new URL('../registry-client/src', import.meta.url).pathname,
      '@pr-pm/converters': new URL('../converters/src', import.meta.url).pathname,
      '@pr-pm/types': new URL('../types/src', import.meta.url).pathname,
    },
  },
});
