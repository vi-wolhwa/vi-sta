import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    passWithNoTests: true,
    projects: [
      {
        // DOM-free packages. Keeping renderer here protects its server-side
        // contract: any accidental DOM usage will fail the test run.
        test: {
          name: 'node',
          environment: 'node',
          include: ['packages/{renderer,presets}/src/**/*.{test,spec}.ts'],
        },
      },
      {
        // The editor (core) and its React adapter need a DOM.
        test: {
          name: 'dom',
          environment: 'jsdom',
          include: ['packages/{core,react}/src/**/*.{test,spec}.{ts,tsx}'],
        },
      },
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      include: ['packages/*/src/**/*.{ts,tsx}'],
      exclude: ['**/*.{test,spec}.{ts,tsx}', '**/index.ts'],
    },
  },
});
