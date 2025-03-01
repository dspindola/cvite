import { watch } from "node:fs/promises";

const ac = new AbortController();
const { signal } = ac;

const watcher = watch(process.argv.at(-1) ?? "src", {
  signal: signal,
  persistent: true,
  recursive: true,
});

async function main() {
  for await (const _ of watcher) {
    await Bun.$`bun ${Bun.resolveSync(Bun.codepark.entry!, ".")}`
      .env(process.env as any)
      .nothrow();
  }
}

main();
