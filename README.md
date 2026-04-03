# MCPDeck

[![MCPDeck — MCP management, without the chaos.](https://raw.githubusercontent.com/codewithevilxd/mcpdeck/main/src/assets/mcpdeck-readme-banner.svg)](https://nishantdev.space)

[![GitHub Stars](https://img.shields.io/github/stars/codewithevilxd/mcpdeck?style=social)](https://github.com/codewithevilxd/mcpdeck)

**MCPDeck** is an open-source desktop app for managing MCP (Model Context Protocol) servers across AI clients — so Claude, Cursor, VS Code, and the tools you use stay wired up without the chaos.

- **Author:** [Nishant Gaurav](https://nishantdev.space) · [GitHub](https://github.com/codewithevilxd) · **X:** [@raj_dev_](https://x.com/raj_dev_) · **Discord:** `raj.dev_`

## Downloads

Grab the latest release from [Releases](https://github.com/codewithevilxd/mcpdeck/releases/latest):

| Platform | Artifact (pattern) |
|----------|-------------------|
| macOS Apple Silicon | `MCPDeck_*_aarch64.dmg` |
| macOS Intel | `MCPDeck_*_x64.dmg` |
| Windows | `MCPDeck_*_x64-setup.exe` |
| Linux | `MCPDeck_*_amd64.AppImage` / `.deb` |

## Development

```bash
pnpm install
cd src-tauri && bash scripts/prepare-sidecar.sh && cd ..
pnpm tauri dev
```

## Auto-updates

Releases can be signed with Tauri’s updater. Set `TAURI_SIGNING_PRIVATE_KEY` (and optional password) in CI to match the public key in `src-tauri/tauri.conf.json`. Upload `latest.json` with your release artifacts as per [Tauri updater docs](https://v2.tauri.app/plugin/updater/).

## License

MIT — see [LICENSE](./LICENSE).

⭐ [Star on GitHub](https://github.com/codewithevilxd/mcpdeck)
