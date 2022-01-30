# Todo リスト作成チーム開発（第 2 期）

## 開発メンバー

- 管理： ジュンペイ　（Junkichi89）
- リーダー: yuri-i 　（Issue 管理など）
- レビュワー: ジュンペイ, Hiro, メンバー全員
- サポート: Hiro (hirooutdoor)

- 参加メンバー
  - miho (mihomihouk)
  - 中植　　（insideplant）　　+ デザイン作成
  - ayaka 　　（ayakamiyake7）
  - yuri-i 　（london-newyork）
  - nao 　　（nao5100000）
  - Shogo 　　（washogo）
  - やぶい　　（iamyabui）

## 使用技術

- React.js (https://github.com/facebook/react)
- Next.js (https://github.com/vercel/next.js)
- chakra-ui (https://github.com/chakra-ui/chakra-ui/)

## 推奨 VScode 拡張機能

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph&ssr=false#qna) コミットの一覧 → 詳細を閲覧できる
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) ファイルの履歴などを確認できる
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

※　おすすめしたいものがあれば適宜追加する

## バージョン情報

volta で管理、volta 以外をお使いの方は自身で以下のバージョンにあわせてください。
```
"node": "14.17.0",
"yarn": "1.22.11",
```

## プロジェクトの概要

Todo リストの作成を通じて、React、Next.js の基礎、git,Github の使い方に慣れ、チーム開発を体験する
チームメンバー同士でのコードレビュー、毎週 MTG での issue やデザインについての議論など個人開発では行えない内容をカバーしていきます。

## 環境構築手順

1. `git clone https://github.com/if-tech-support/todo_team_2.git`
2. リポジトリのディレクトリへ移動
3. `yarn` // package の install
4. `yarn dev `
   上記を実行し、`http://localhost:3000/`
   以下の画像の画面が表示できるか確認をお願いします。

   ![image](https://user-images.githubusercontent.com/24813936/148723807-3b3e571b-6669-4d1c-a96f-d623f9650e09.png)

## 開発ルール

### 自主的な貢献を歓迎

チームにとっていいことを考え行動してくれる方を尊重します。
やりたいことや試してみたいことなどを自主的に提案していただき、どんどんチーム開発を盛り上げていきましょう！
基本的にはチームとして行いたいものを自由にやってもらうスタンスで進めていきます。

### git/gitHub

毎週 MTG の際にメンバーの中で翌週のプルリクに対して、レビュワーを 2 人以上決めて、順番に回していく。

#### ブランチ命名規則

issue 番号を必ず含める

**＜具体例＞**
issue#３　 Todo の作成画面の実装の場合

`git checkout -b #3-Todo-Page-Layout`

#### コミットメッセージ

#issue 番号 + 日本語で端的に

例）
`git commit -m '#3 Todo作成画面の要素を追加し、レイアウト調整' `

#### 共同でのissue作業の流れ

【担当者】
①リモートのマスター以外(main以外)のブランチを作成
・ git checkout -b リモートのマスター以外(main以外)のブランチ名（ローカルで作って）
　ex) git checkout-b #68-New-page
・ git push -u origin リモートのマスター以外(main以外)のブランチ名（リモートに登録）
　ex) git push -u origin #68-New-page

②①のブランチからローカルのブランチを作成
・git checkout -b ローカルのブランチ名 origin/①のブランチ名
　ex）git checkout -b #68-New-page-YAMADA origin/#68-New-page

　※個人が作業するブランチでは、mainが更新されてもgit pull origin mainはする必要ありません。親ブランチをmainブランチへプルリクをするタイミング（⑦）でgit pull origin mainをお願い致します。

③ローカルのブランチで作業

④①のリモートのブランチにプルリクをあげる、その際プルリク時のbaseブランチを①のブランチにする
・プルリクエストの作成方法
・プルリクエストのベースブランチを変更する

⑤④のプルリクを担当者同士でレビュー
　担当者同士で質問しあったりして意見（コード）を１つにまとめる

⑥担当者間でレビューを行い、意見がまとまれば①のブランチにプッシュを行いマージする
・main以外のブランチへのpush

⑦マスターブランチ（main）にプルリクをあげる（担当者の作業はここまで）
　①のブランチを操作してbaseブランチをmainにしてプルリクをあげる【担当者以外(レビュアー)】

⑧レビュアーする

⑨修正箇所があれば③に戻る

⑩レビューOKであればマスターブランチ（main）にマージする

複数の担当者で共同作業 - Google スライド
https://docs.google.com/presentation/d/1Lf0b8GrzmkGns8LFfZw6KkphHLzVeTl3H1Pj3E_plBM/edit#slide=id.p

