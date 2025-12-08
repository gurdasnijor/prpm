import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.ts'],
    setupFiles: ['vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.test.ts',
        '**/scripts/**',
      ],
    },
  },
  resolve: {
    alias: {
      // Chai v4 expects this dependency but it isn't installed in CI environments
      'get-func-name': new URL('./test-stubs/get-func-name.ts', import.meta.url).pathname,
    },
  },
});
