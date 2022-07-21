# mockサーバー

json-serverを使用している。

## 使い方

JSON Serverをインストール
```
npm install -g json-server
```

サーバー立ち上げ
```
json-server --watch mock/db.json --routes mock/routes.json
```

## db.json
ここにデータを入れておく。pathに"classes/1"などと指定すると、エラーを吐く。（"/"はサポートされていない)

## routes.json
上に入れたデータとpathを対応させる。ここに書かなければ、db.jsonで指定したpathでアクセスできる。