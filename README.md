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

Updater artifact signing is currently disabled in `src-tauri/tauri.conf.json` so CI releases do not fail when signing secrets are unavailable or misconfigured. Re-enable `createUpdaterArtifacts` and provide `TAURI_SIGNING_PRIVATE_KEY` plus its password in CI when you are ready to ship signed updater artifacts. See the [Tauri updater docs](https://v2.tauri.app/plugin/updater/) for the release format and `latest.json` upload flow.

## License

MIT — see [LICENSE](./LICENSE).

⭐ [Star on GitHub](https://github.com/codewithevilxd/mcpdeck)
