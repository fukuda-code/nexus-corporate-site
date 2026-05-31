# Nexus – コーポレートサイト制作課題

🔗 [サイトを見る](https://fukuda-code.github.io/nexus-corporate-site/)

職業訓練校（3ヶ月）の個人制作課題として、7日間で架空のIT企業「Nexus」のコーポレートサイトを制作しました。
企業サイトとしての構成・デザインを意識して作成しています。

## サイト概要

クラウド・ネットワーク・システム開発・運用保守を提供するIT企業を想定したWebサイトです。  
デザインから実装まで一人で担当しました。

## ページ構成

| ページ | 概要 |
|--------|------|
| HOME | ヒーローアニメーション・サービス紹介・新着情報 |
| 会社概要 | 企業情報・ミッションの紹介 |
| 事業内容 | 4つのサービス詳細 |
| お問い合わせ | 入力フォーム |
| アクセス | 所在地・地図 |

## デザインカンプ

制作前にワイヤーフレーム・デザインカンプを作成しました。

- [TOPページ](design_top.png)
- [下層ページ](design_under.png)

## 使用技術

- HTML5 / CSS3
- JavaScript（Vanilla JS）
- [Three.js](https://threejs.org/) – ヒーローセクションのパーティクルアニメーション
- [GSAP + ScrollTrigger](https://greensock.com/gsap/) – スクロール連動アニメーション
- [Vanta.js](https://www.vantajs.com/) – インタラクティブ背景エフェクト
- Google Fonts（Inter）

## 工夫した点

- **ローディングアニメーション**  
  画面が上下に割れて開くスプリットローダーを実装。`sessionStorage` を使い初回訪問時のみ表示されるよう制御しています。

- **パーティクルアニメーション**  
  Three.js でパーティクルを生成し、マウスの動きに連動して回転するヒーロー演出を実装しました。

- **スクロールアニメーション**  
  GSAP ScrollTrigger を使い、カードが左右からスライドインする動きを実装しました。

- **レスポンシブ対応**  
  PC・スマートフォン向けに CSS を分離して管理しています（`top.css` / `top_sp.css` など）。

- **外部JSONによる動的コンテンツ**  
  新着情報を `news.json` から fetch して動的に描画しています。

## ディレクトリ構成

```
works/
├── index.html          # HOME
├── about/
│   └── index.html      # 会社概要
├── service/
│   └── index.html      # 事業内容
├── contact/
│   └── index.html      # お問い合わせ
├── access/
│   └── index.html      # アクセス
└── assets/
    ├── css/            # ページ別・共通CSS
    ├── js/             # JavaScript
    ├── images/         # 画像素材
    └── data/
        └── news.json   # 新着情報データ
```

## 制作期間

7日

## 画像素材

Storyset / unDraw / Unsplash
