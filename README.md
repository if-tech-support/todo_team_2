# Todoリスト作成チーム開発（第2期）
## 開発メンバー
- 管理： ジュンペイ　（Junkichi89）
- リーダー: yuri-i　（Issue管理など）
- レビュワー: ジュンペイ, Hiro, メンバー全員
- サポート: Hiro (hirooutdoor)

- 参加メンバー
  - miho (mihomihouk)
  - 中植　　（insideplant）　　+ デザイン作成
  - ayaka　　（ayakamiyake7）
  - yuri-i　（london-newyork）
  - nao　　（nao5100000）
  - Shogo　　（washogo）
  - やぶい　　（iamyabui）

## 使用技術
- React.js
- Next.js

## バージョン情報

```
"node": "14.17.0",
"yarn": "1.22.11",
"npm": "7.21.0"
```

## プロジェクトの概要

Todoリストの作成を通じて、React、Next.jsの基礎、git,Githubの使い方に慣れ、チーム開発を体験する。


## 環境構築手順
1. `git clone https://github.com/if-tech-support/todo_team_2.git`
2. リポジトリのディレクトリへ移動
3. `yarn 　//packageのinstall`
4. `yarn dev `
上記を実行し、`http://localhost:3000/`
以下の画像の画面が表示できるか確認をお願いします。
![image](https://user-images.githubusercontent.com/24813936/148723807-3b3e571b-6669-4d1c-a96f-d623f9650e09.png)

## 開発ルール

### git/gitHub

#### ブランチ命名規則
  issue番号を必ず含める
  
  **＜具体例＞**
  issue#３　Todoの作成画面の実装の場合
  
  `git checkout -b #3-Todo-Page-Layout`

#### コミットメッセージ

 #issue番号 + 日本語で端的に 
  
例）
`git commit -m  '#3 Todo作成画面の要素を追加し、レイアウト調整' `

<<<<<<< HEAD
test
=======
test
>>>>>>> 8612e10e5674783466489ef59d69e4627a3608b6
