# Shader Lab｜互動式電腦圖學知識庫

一個可以持續新增主題的繁體中文電腦圖學入門網站。本專案的核心是 `AGENTS.md`，它規定 AI 如何擴充知識卡片、維持設計一致性與驗收成果。

## 功能
- 搜尋知識主題
- 依分類篩選
- 點擊卡片閱讀詳情
- CSS 色相互動實驗
- 手機與桌面響應式排版

## 本地執行
請在專案根目錄執行 `python -m http.server 8000`，瀏覽 `http://localhost:8000`。請勿直接以 `file://` 開啟，因為瀏覽器可能阻擋 JSON 讀取。

## 部署到 GitHub Pages
1. 建立公開 GitHub Repository，例如 `shader-lab`。
2. 上傳本資料夾內全部檔案，保留原有目錄結構。
3. 到 Repository 的 Settings → Pages。
4. Source 選擇 Deploy from a branch，Branch 選 `main`，資料夾選 `/ (root)`，按 Save。
5. 等待部署完成，網站通常位於 `https://你的帳號.github.io/shader-lab/`。

## 擴充範例
請 AI 先讀 `AGENTS.md`，再依格式於 `data/topics.json` 新增主題。卡片會由 JavaScript 自動產生，無須手動修改首頁。

## 技術
HTML5、CSS3、JavaScript、JSON、GitHub Pages。無外部 API 或付費服務。
