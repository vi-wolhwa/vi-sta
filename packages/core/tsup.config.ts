import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false, // DTS is generated separately via `tsc -p tsconfig.build.json`
  sourcemap: true,
  clean: true,
  treeshake: true,
});
