#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "womenhack",
  boardId: "womenhack-official",
  domain: "womenhack.com",
  npmName: "zc-womenhack-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
