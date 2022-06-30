# workbox 仕事ボックス オープンデータ

## アプリ

- [仕事ボックス シビックオープンデータ - TELECUBE](https://code4fukui.github.io/workbox/workbox-telecube.html)
- [仕事ボックス シビックオープンデータ - Station Work](https://code4fukui.github.io/workbox/workbox-stationwork.html) ([3D体験](https://code4fukui.github.io/workbox/workbox-stationwork-vr.html))

## シビック オープンデータ

### Station Work

- [workbox-stationwork.csv](workbox-stationwork.csv)
- [workbox-stationwork.json](workbox-stationwork.json)
- [workbox-stationwork.glb](workbox-stationwork.glb)

### TELECUBE

- [workbox-telecube.csv](workbox-telecube.csv)
- [workbox-telecube.json](workbox-telecube.json)

## 自動更新

GitHub Actions を使って、毎日22:15頃更新

```
mkdir .github
mkdir .github/workflows
cat > .github/workflows/scheduled-update.yml << "EOF"
name: Scheduled

on:
  schedule:
    # 毎日16:15分に実行 (JST=UTC+9)
    - cron: '15 7 * * *'

jobs:
  build:
    name: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: denoland/setup-deno@v1
        with:
          deno-version: v1.x
      - name: fetch
        run: cd deno; deno run -A fetch.js; deno run -A make.js
      - name: commit and push
        run: |
          git config --global user.email "workflow@example.com"
          git config --global user.name "workflow user"
          git add .
          git commit -m 'update data' && git push ${REPO} HEAD:${{github.event.pull_request.head.ref}} || true
          git push
EOF
```

## TODO

- 語彙設計
- Station Work に緯度経度がほしい
