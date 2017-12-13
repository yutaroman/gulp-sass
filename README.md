# gulp-sass

Sass ( Scss ) のコンパイルと、Autoprefixer の設定

## Description

Browsersync を使用して、ローカルサーバーを立ち上げ、リアルタイムに Sass ( Scss ) のコンパイルと、Autoprefixer の設定を実行する。

![Derectory list](https://user-images.githubusercontent.com/7829877/33919243-f77d13ae-dffa-11e7-9db3-8752121fa295.png)

`src` ディレクトリ内のファイルを変更することで、`dist` ディレクトリにビルドされる。
そのため、`dist` ディレクトリがドキュメントルートとなる。

## Requirement

- [node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Setting

### Node.js

_Node.js は、以下のバージョン管理ツールの使用を想定_

- Mac : [nodenv](https://github.com/nodenv/nodenv)
- Windows : [nodist](https://github.com/marcelklehr/nodist)

## Install

任意のディレクトリでローカルインストール

'$ npm install'

## Usage

### gulp の実行

- default : `$ npm run gulp`
- build : `$ npm run gulp -- build`
- watch : `$ npm run gulp -- watch`

### Autoprefixer の設定

gulofile.js 内の変数 ( `OPTION_AUTOPREFIXER` ) を変更。
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[yutaroman](https://github.com/yutaroman)
