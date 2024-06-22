Next.js の e-commerce サイトを作成してみようというお試し作品

### 使用技術

- Next.js の AppRouter
- NextAuth による実装
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

### MySQL の設定

- .env.tmp を複製し、.env を生成
- デフォルトだと root ユーザのパスワードは root
- 下記を MySQL から設定

```
grant all privileges on bael.* to "user"@"%";
grant CREATE, ALTER, DROP ON *.* TO 'user'@'%';
flush privileges;
```

- `make mysql/root`を実行し、prisma のマイグレーションを起動できるように設定する
