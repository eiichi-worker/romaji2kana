# kana2romaji

ローマ字表記からひらがなへのコンバートをJavaScriptのみで行なう。
Google Apps Scriptでも動作可能なのでGoogle Driveのスプレッドシートでひらかなのデータをローマ字表記に変換する時とかにも使えます。

## Usage

### 基本的な使い方

    romaji2kana(string)

string : ローマ字表記の文字列。それ以外の文字列を指定しても変換されずに表示されます。

### Google Driveのスプレッドシートの関数としての使用

1. スプレッドシートを作成する（既存のものがある場合は読み込む）
1. 「ツール」メニュー内から「スクリプト エディタ」を選択
1. Apps Scriptの編集画面が開く
1. 「ファイル」右のプラスボタン（新規作成）→「スクリプト」を選択する
1. 「無題」のファイルができるので、ファイル名を「romaji2kana」と入力する（romaji2kana.gsができる）
1. GitHub内にあるromaji2kana.jsの内容をコピペする
1. 「保存ボタン（フロッピーディスクのアイコン）」をクリックする
1. ※「新しいプロジェクト名を入力してください」と言われたら適当な名前を入力して「OK」をクリックする

#### 利用例

```
=romaji2kana(LOWER(H971))
```

## 謝辞

romaji2kanaは、フォーク元の[cloneko/kana2romaji](https://github.com/cloneko/kana2romaji)をベースに作られています🙏

## License

Dual licensed under the MIT or GPL Version 3 licenses

## Author

- Copyright（c）2021 eiichi-worker <8284623+eiichi-worker@users.noreply.github.com>
- Copyright（c）2013 Yonashiro Yuu <cloneko@gmail.com>
