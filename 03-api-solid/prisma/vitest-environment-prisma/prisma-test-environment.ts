import { Environment } from "vitest/environments";

export default <Environment>{
  name: "prisma",
  setup: async () => (
    console.log("Setup"),
    {
      teardown() {
        console.log("teardown");
      },
    }
  ),
  transformMode: "ssr",
};
