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


> > > > > > > 807936ecc8420d917a999cf65c670f9e695677f5
> > > > > > > https://volta.sh/

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
①mainブランチを最新にした状態で対応するissueのブランチをmainを元に作成する
・ git checkout -b 対応するissueのブランチ名（ローカルで作成）
　ex) git checkout-b #68-New-page

②ローカルで作成した対応するissueのブランチをgithubへ連携する
・ git push -u origin 対応するissueのブランチ名（リモートに登録）
　ex) git push -u origin #68-New-page

③作業者がそれぞれの環境に①で作成したブランチ(対応するissueのブランチ)を元にして、作業するためのブランチを作成する
・git checkout -b 作業するためのブランチ名 origin/①で作成したブランチ名
　ex）git checkout -b #68-New-page-YAMADA origin/#68-New-page

　※個人が作業するブランチでは、mainが更新されてもgit pull origin mainはする必要ありません。親ブランチをmainブランチへプルリクをするタイミング（⑧）でgit pull origin mainをお願い致します。

④作業者が③で作成した作業ブランチで実装を進める

⑤作業ブランチをgithubに連携（リモートに登録）して、①のリモートのブランチにプルリクをあげる、その際プルリク時のbaseブランチを①のブランチにする
・プルリクエストの作成方法
・プルリクエストのベースブランチを変更する

![151705445-726f4388-1f85-48e6-9a4e-66c5596c4432](https://user-images.githubusercontent.com/78947543/151792627-e5fd4020-1ffc-4e82-a3a0-bdf1df346a9d.png)

⑥④のプルリクを担当者同士でレビュー
　担当者同士で質問しあったりして意見（コード）を１つにまとめる

⑦担当者でレビューを行い、意見がまとまればマージするプルリクを承認し、①のブランチにマージする。
→マージ後、作業者の1人がローカル環境で①のブランチを最新状態にした後、git pull origin mainを行う。（ここでコンフリクトなどが発生する場合は、解消すること）
→その後、①のブランチをgithubへ連携する（リモートの①のブランチへ反映させる）

⑧マスターブランチ（main）にプルリクをあげる（担当者の作業はここまで）
　①のブランチを操作してbaseブランチをmainにしてプルリクをあげる

【担当者以外(レビュアー)】

⑨レビューする

⑩プルリク後の修正については担当者で話し合って進める

レビューOKであればマスターブランチ（main）にマージする

複数の担当者で共同作業 - Google スライド
![複数の担当者で作業する場合どうするか](https://user-images.githubusercontent.com/78947543/151792983-c108ee4a-9e39-43f6-aec2-46120e3260f5.jpg)
