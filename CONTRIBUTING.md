# Contributing to MCPDeck

Thanks for your interest in contributing. MCPDeck is open source and welcomes bug fixes, new client support, marketplace additions, UI improvements, and documentation.

## Getting started

```bash
git clone https://github.com/codewithevilxd/mcpdeck.git
cd mcpdeck
pnpm install
cd src-tauri && bash scripts/prepare-sidecar.sh && cd ..
pnpm tauri dev
```

See [AGENTS.md](./AGENTS.md) for architecture and conventions.

## Issues

- Bugs → [open an issue](https://github.com/codewithevilxd/mcpdeck/issues/new)
- New client → [Client Request](https://github.com/codewithevilxd/mcpdeck/issues/new?template=client-request.md)
- New marketplace server → [Server Request](https://github.com/codewithevilxd/mcpdeck/issues/new?template=server-request.md)

## Pull requests

Keep changes focused, match existing style, and update relevant docs when behavior changes.
