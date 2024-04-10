import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { createRsbuild } from "@rsbuild/core";
import { describe, expect, test } from "vitest";

describe("Dev", () => {
  test("startDevServer", async () => {
    const main = join(
      dirname(fileURLToPath(import.meta.url)),
      "fixtures",
      "hello-world"
    );
    console.log(main);
    const rsbuild = await createRsbuild({
      rsbuildConfig: {
        source: { entry: { main } },
      },
    });

    const devServer = await rsbuild.createDevServer();

    const { server } = await devServer.listen();

    await expect(server.close()).resolves.toBeUndefined();
  });
});
