# workbox 仕事ボックス オープンデータ

このプロジェクトは、TELECUBEやStation Workなど、日本国内のリモートワークブースに関するオープンデータを集約・提供します。データは毎日自動更新されます。

## デモ

- **[TELECUBEの場所（地図と表）](https://code4fukui.github.io/workbox/workbox-telecube.html)**
  - インタラクティブな地図とデータ表でTELECUBEブースの場所を表示します。
- **[Station Workの場所（表）](https://code4fukui.github.io/workbox/workbox-stationwork.html)**
  - Station Work施設のリストを表形式で表示します。
- **[Station Workブース（3D VR体験）](https://code4fukui.github.io/workbox/workbox-stationwork-vr.html)**
  - WebXRを使用してStation Workブースの3Dモデルを探索できます。

## シビックオープンデータ

以下のデータセットは毎日生成・更新されます。

### Station Work

- [workbox-stationwork.csv](workbox-stationwork.csv)
- [workbox-stationwork.json](workbox-stationwork.json)
- [workbox-stationwork.glb](workbox-stationwork.glb) (3Dモデル)

### TELECUBE

- [workbox-telecube.csv](workbox-telecube.csv)
- [workbox-telecube.json](workbox-telecube.json)

## 仕組み

このリポジトリはGitHub Actionsを使用して、毎日22:15 JST（13:15 UTC）に最新データを自動取得します。

ワークフローは以下の通りです:
1.  **データ取得**: `deno/fetch.js`スクリプトが実行されます。
    - `deno/stationwork.js`はStation Work APIにPOSTリクエストを送信し、結果を`workbox-stationwork.json`と`workbox-stationwork.csv`として保存します。
    - `deno/telecube.js`はTELECUBE WordPress REST APIからデータを取得し、`workbox-telecube.json`として保存します。
2.  **データ処理**: `deno/make.js`スクリプトが実行されます。
    - `workbox-telecube.json`を読み込み、`workbox-telecube.csv`に変換します。
3.  **コミット＆プッシュ**: GitHub Actionsが更新されたデータファイルをリポジトリにコミットしてプッシュします。

自動化の設定は[`.github/workflows/scheduled-update.yml`](.github/workflows/scheduled-update.yml)に定義されています。

## データソース

- **Station Work**: [STATION WORK公式サイト](https://www.stationwork.jp/)から取得したデータ。
- **TELECUBE**: [TELECUBE SERVICE公式サイト](https://telecube.jp/)から取得したデータ。

このプロジェクトは[Code for FUKUI](https://github.com/code4fukui)によって開発されています。

## TODO

- 共通のデータ語彙を設計する。
- Station Workの各拠点に緯度・経度データを追加する。

## ライセンス

このプロジェクトはMIT Licenseの下で利用可能です。詳細は[LICENSE](LICENSE)ファイルをご覧ください。
