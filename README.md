## クローンの手順

1. 作業用フォルダを用意。

1. 作業用フォルダで`git clone git@github.com:kurakke/nitkit-shot.git`

1. 以下のコマンドを上から順に実行。

   1. `cd nitkit-shot`

   1. `npm install`

以下コーディングルール

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

- ブランチ名は右の形式: `issue/issueの番号`

- 例: `issue#1`に関してブランチを作成する: `issue/1`

### TypeScript(JavaScript)の命名

- 命名規則一覧

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

- 悪い例

```tsx
return <button onClick={() => dispatch(ACTION_TO_SEND_DATA)}>This is a bad example</button>;
```

- 良い例

```tsx
const submitData = () => dispatch(ACTION_TO_SEND_DATA);

return <button onClick={submitData}>This is a good example</button>;
```

### コンポーネントに子要素がない場合は、自己終了タグを使うこと

- 悪い例

```tsx
<SomeComponent variant='stuff'></SomeComponent>
```

- 良い例

```tsx
<SomeComponent variant='stuff' />
```

### 三項演算子を使用すること

- 悪い例

```tsx
const { role } = user;
if (role === ADMIN) {
  return <AdminUser />;
} else {
  return <NormalUser />;
}
```

- 良い例

```tsx
const { role } = user;
return role === ADMIN ? <AdminUser /> : <NormalUser />;
```

### 文字列変数の受け渡しには波括弧は使用しないこと

- 悪い例

```tsx
return <Navbar title={'My Special App'} />;
```

- 良い例

```tsx
return <Navbar title='My Special App' />;
```

### ブール変数の受け渡しの時、値が`true`の場合には、省略形を使うこと

- 悪い例

```tsx
return <Navbar showTitle={true} />;
```

- 良い例

```tsx
return <Navbar showTitle />;
```

### 文字列の合成にはテンプレートリテラルを使用すること

- 悪い例

```tsx
const name = 'デク';
const age = 16;
const food = 'リンゴ';

console.log(
  '私の名前は' + name + 'です。' + '年齢は' + age + '歳です。' + '好きな食べ物は' + food + 'です。',
);
//出力結果：私の名前はデクです。年齢は１６歳です。好きな食べ物はリンゴです。
```

- 良い例

```tsx
const name = 'デク';
const age = 16;
const food = 'リンゴ';

console.log(`私の名前は${name} です。年齢は${age}歳です。好きな食べ物は${food}です。`);
//出力結果：私の名前はデクです。年齢は１６歳です。好きな食べ物はリンゴです。
```

### 変数の宣言にはなるべく`const`を使用すること

## プルリクエストのルール

### タイトルには何を行なったかをわかりやすく書くこと

### 説明欄には以下のものを記述すること（表のものは状況に応じて追記）

- 対応するGitHubのissueのURL

- どのような変更・追加を行ったかの説明

| 状況                                           | 追記内容                                       |
| ---------------------------------------------- | -------------------------------------------------- |
| 問題解決のためにプルリクエストを立ち上げた場合 | どのような問題が発生し、どのように解決したかの説明 |
| 中心的に見てほしい箇所がある場合               | それがどこであるか                                 |
| プルリクエストの内容がissueの一部の場合        | どの部分を担当したか                               |
