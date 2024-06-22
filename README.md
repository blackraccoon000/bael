Next.js の e-commerce サイトを作成してみようというお試し作品

### 使用技術

- Next.js の AppRouter
- Next_Auth による実装
- バックエンドとの連携 frourio

### コマンド関連

- `npm run dev` 開発サーバの起動
- `npm run aspida` server/api/$api.ts を生成、更新するコマンド

### 環境変数

```
<!-- GITHUBの認証機能を使うためのIDとSECRET -->
GITHUB_ID=
GITHUB_SECRET=
<!-- 暗号化コマンド -->
SECRET=
```

SECRET は`openssl rand -base64 32`で生成する
