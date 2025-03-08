# Bun.js and Civet starter

This is a starter project for [Bun.js](https://bun.sh) and [Civet](https://civet.dev/getting-started).

## Getting Started

By default this workspace uses @danielx/civet/bun-civet plugin during development, Bun resolve it's [preload](https://bun.sh/docs/runtime/bunfig#preload) scripts from `bunfig.toml` file in the root of the workspace (see [Bun.js docs](https://bun.sh/docs/runtime/bunfig)).

**Note:** If you want to use your own `bunfig.toml` file, feel free to delete the `bunfig.toml` file in the root of the workspace and replace it with your own.

So, Bun.js is more then just a JavaScript runtime, it's a full-stack development environment that includes a JavaScript runtime, a TypeScript compiler, a bundler, a package manager, a plugin system, a tiny but sharp Shell API (JS/custom loader `.bun.sh`), low level FFI bindings, built-in C Compiler, a compiler for single-file executables, REPL, test-runner, HRM, HOT, debbuger, native APIs for working with SQLite, PostgreSQL, S3, HTML Parser (HTMLRewriter), suit of utilities for working, Semver, Transpiler.

So, what happens when you brings Civet to the table?

## Setup

```sh
bun install
```
Then compile the Civetman entrypoint

```sh
# prepare deps
bun prepare
```

```sh
# start dev environment
bun dev
```

```sh
# run build
bun run build
```

```sh
# Compile the CLI
Bun. install
```