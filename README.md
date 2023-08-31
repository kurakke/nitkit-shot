This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

以下コーディングルール

## クローンの手順

1. 作業用フォルダを用意。

1. 作業用フォルダで`git clone git@github.com:kurakke/nitkit-shot.git`

1. 以下のコマンドを上から順に実行。

   1. `cd food-web`

   1. `npm install`

## コミットメッセージ

- コミットメッセージは`タイトル: 詳細`の形式

- タイトル一覧

| タイトル | コミット内容               |
| -------- | -------------------------- |
| add      | 機能・ファイル等の追加     |
| fix      | バグ等の修正               |
| update   | 機能等修正（バグではない） |
| rename   | ファイル・変数等の改名     |
| move     | ファイル・フォルダの移動   |
| remove   | ファイル・コード等の削除   |
| readme   | README の追記              |

## 命名ルール

### ブランチ

- ケバブケース

- ブランチ名は右の形式: `issue/issueの番号`

例: `issue#1`に関してブランチを作成する: `issue/1`

### TypeScript(JavaScript)の命名

-命名規則一覧

| 記法               | コミット内容           | 例             |
| ------------------ | ---------------------- | -------------- |
| コンポーネント名   | アッパーキャメルケース | UserForm       |
| 変数名             | ローワーキャメルケース | sampleFunction |
| 定数名             | スネークケース         | API_URL        |
| 関数名             | ローワーキャメルケース | addNumber      |
| プロパティ名       | ローワーキャメルケース | userName       |
| クラス名           | アッパーキャメルケース | MyCar          |
| インターフェイス名 | アッパーキャメルケース | MemberProps    |

## 処理系のルール

### レンダー内で関数を定義しないこと

-悪い例

```tsx
return <button onClick={() => dispatch(ACTION_TO_SEND_DATA)}>This is a bad example</button>;
```

-良い例

```tsx
const submitData = () => dispatch(ACTION_TO_SEND_DATA);

return <button onClick={submitData}>This is a good example</button>;
```

### コンポーネントに子要素がない場合は、自己終了タグを使うこと

-悪い例

```tsx
<SomeComponent variant='stuff'></SomeComponent>
```

-良い例

```tsx
<SomeComponent variant='stuff' />
```

### 三項演算子を使用すること

-悪い例

```tsx
const { role } = user;
if (role === ADMIN) {
  return <AdminUser />;
} else {
  return <NormalUser />;
}
```

-良い例

```tsx
const { role } = user;
return role === ADMIN ? <AdminUser /> : <NormalUser />;
```

### 文字列変数の受け渡しには波括弧は使用しないこと

-悪い例

```tsx
return <Navbar title={'My Special App'} />;
```

-良い例

```tsx
return <Navbar title='My Special App' />;
```

### ブール変数の受け渡しの時、値が`true`の場合には、省略形を使うこと

-悪い例

```tsx
return <Navbar showTitle={true} />;
```

-良い例

```tsx
return <Navbar showTitle />;
```

### 文字列の合成にはテンプレートリテラルを使用すること

-悪い例

```tsx
const name = 'デク';
const age = 16;
const food = 'リンゴ';

console.log(
  '私の名前は' + name + 'です。' + '年齢は' + age + '歳です。' + '好きな食べ物は' + food + 'です。',
);
//出力結果：私の名前はデクです。年齢は１６歳です。好きな食べ物はリンゴです。
```

-良い例

```tsx
const name = "デク";
const age = 16;
const food = "リンゴ";

console.log(`私の名前は${name} です。年齢は${age}歳です。好きな食べ物は${food}です。`);
//出力結果：私の名前はデクです。年齢は１６歳です。好きな食べ物はリンゴです。
```

### 変数の宣言にはなるべく`const`を使用すること
