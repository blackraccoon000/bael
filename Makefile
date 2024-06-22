include .env

# mysqlの起動
start:
	docker-compose up -d

# mysqlの停止
stop:
	docker-compose down

# dockerのプロセス確認
ps:
	docker ps

# コンテナが起動している前提、mysqlが起動しているbashに入る
bash:
	docker-compose exec -it db bash

# コンテナが起動している前提、mysqlに入る
mysql:
	docker-compose exec -it db bash -c "mysql -u ${MYSQL_USER} -p${MYSQL_PASSWORD}"

# コンテナが起動している前提、mysqlにrootユーザで入る
mysql/root:
	docker-compose exec -it db bash -c "mysql -u root -p${MYSQL_ROOT_PASS}"

# ghコマンドが必要
# 現在のリポジトリを開く
br:
	gh browse