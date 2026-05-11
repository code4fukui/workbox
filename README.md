# workbox 仕事ボックス オープンデータ

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project aggregates and provides open data on remote work booths in Japan, such as TELECUBE and Station Work. Data is automatically updated daily.

このプロジェクトは、TELECUBEやStation Workなど、日本国内のリモートワークブースに関するオープンデータを集約・提供します。データは毎日自動更新されます。

## Demos

- **[TELECUBE Locations (Map & Table)](https://code4fukui.github.io/workbox/workbox-telecube.html)**
  - An interactive map and data table showing TELECUBE booth locations.
- **[Station Work Locations (Table)](https://code4fukui.github.io/workbox/workbox-stationwork.html)**
  - A data table listing Station Work facilities.
- **[Station Work Booth (3D VR Experience)](https://code4fukui.github.io/workbox/workbox-stationwork-vr.html)**
  - Explore a 3D model of a Station Work booth using WebXR.

## Civic Open Data

The following datasets are generated and updated daily.

### Station Work

- [workbox-stationwork.csv](workbox-stationwork.csv)
- [workbox-stationwork.json](workbox-stationwork.json)
- [workbox-stationwork.glb](workbox-stationwork.glb) (3D Model)

### TELECUBE

- [workbox-telecube.csv](workbox-telecube.csv)
- [workbox-telecube.json](workbox-telecube.json)

## How It Works

This repository uses a GitHub Action to automatically fetch the latest data every day at 22:15 JST (13:15 UTC).

The workflow is as follows:
1.  **Fetch Data**: The `deno/fetch.js` script is executed.
    - `deno/stationwork.js` sends a POST request to the Station Work API and saves the results as `workbox-stationwork.json` and `workbox-stationwork.csv`.
    - `deno/telecube.js` fetches data from the TELECUBE WordPress REST API and saves it as `workbox-telecube.json`.
2.  **Process Data**: The `deno/make.js` script is executed.
    - It reads `workbox-telecube.json` and converts it into `workbox-telecube.csv`.
3.  **Commit & Push**: The GitHub Action commits the updated data files back to the repository.

The automation is defined in [`.github/workflows/scheduled-update.yml`](.github/workflows/scheduled-update.yml).

## Data Sources

- **Station Work**: Data retrieved from [STATION WORK Official Website](https://www.stationwork.jp/).
- **TELECUBE**: Data retrieved from [TELECUBE SERVICE Official Website](https://telecube.jp/).

This project is developed by [Code for FUKUI](https://github.com/code4fukui).

## TODO

- Design a common data vocabulary.
- Add latitude and longitude data for Station Work locations.

## License

This project is available under the MIT License. See the [LICENSE](LICENSE) file for more info.