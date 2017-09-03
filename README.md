# puppeteer
非公式の [puppeteer](https://github.com/GoogleChrome/puppeteer) docker イメージです。

コンテナ上で puppeteer を実行するとサンドボックスに関する問題が発生するため、 "--no-sandbox" を指定してサンドボックスを無効にする必要が生じます。
このイメージでは、 "--no-sandbox" が常に指定されるように変更されているため、別途 "--no-sandbox" を指定する必要は生じません。

これにより、常にサンドボックス外で実行されるため、ご利用の際はこの点にご注意ください。

## このイメージの使い方

    docker run -it --rm -v $(pwd):$(pwd) -w $(pwd) cosmicvelocity/puppeteer:latest example.js

## ライセンス
このイメージに含まれるソフトウェアのライセンス情報を表示します。

- [puppeteer](https://github.com/GoogleChrome/puppeteer/blob/master/LICENSE)
