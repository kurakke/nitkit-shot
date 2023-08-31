## クローンの手順

1. 作業用フォルダを用意。

2. 作業用フォルダで`git clone git@github.com:kurakke/nitkit-shot.git`

3. 以下のコマンドを上から順に実行。

   1. `cd nitkit-shot`

   2. `npm install`

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

- ### ブランチ

  - ブランチ名は右の形式: `issue/issueの番号`

  - 例: `issue#1`に関してブランチを作成する: `issue/1`

- ### TypeScript(JavaScript)の命名

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

- ### レンダー内で関数を定義しないこと

  - 悪い例

  ```tsx
  return <button onClick={() => dispatch(ACTION_TO_SEND_DATA)}>This is a bad example</button>;
  ```

  - 良い例

  ```tsx
  const submitData = () => dispatch(ACTION_TO_SEND_DATA);

  return <button onClick={submitData}>This is a good example</button>;
  ```

- ### コンポーネントに子要素がない場合は、自己終了タグを使うこと

  - 悪い例

  ```tsx
  <SomeComponent variant='stuff'></SomeComponent>
  ```

  - 良い例

  ```tsx
  <SomeComponent variant='stuff' />
  ```

- ### 三項演算子を使用すること

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

- ### 文字列変数の受け渡しには波括弧は使用しないこと

  - 悪い例

  ```tsx
  return <Navbar title={'My Special App'} />;
  ```

  - 良い例

  ```tsx
  return <Navbar title='My Special App' />;
  ```

- ### ブール変数の受け渡しの時、値が`true`の場合には、省略形を使うこと

  - 悪い例

  ```tsx
  return <Navbar showTitle={true} />;
  ```

  - 良い例

  ```tsx
  return <Navbar showTitle />;
  ```

- ### 文字列の合成にはテンプレートリテラルを使用すること

  - 悪い例

  ```tsx
  const name = 'デク';
  const age = 16;
  const food = 'リンゴ';

  console.log(
    '私の名前は' +
      name +
      'です。' +
      '年齢は' +
      age +
      '歳です。' +
      '好きな食べ物は' +
      food +
      'です。',
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

- ### 変数の宣言にはなるべく`const`を使用すること

## プルリクエストのルール

- ### タイトルには何を行なったかをわかりやすく書くこと

- ### 説明欄には以下のものを必ず記述すること

  1. 対応するGitHubのissueのURL

  2. どのような変更・追加を行ったかの説明

- ### エラー等の問題解決のためにプルリクエストを立ち上げた場合、どのような問題が発生し、どのように解決したかを説明欄に記述すること

- ### レビュアーに重点的に見てほしい箇所がある場合それがどこであるかを説明欄で明示すること

- ### プルリクエストの内容が、issueの一部分の場合、どの部分を担当したのかを説明欄に記述すること

- ### 一度のプルリクエストでの変更量は、レビュアー側の負担を考えて、適切な大きさにすること

  - [詳しい手順](https://zenn.dev/keitakn/articles/github-code-review-reviewee#pr%E3%81%AF%E9%81%A9%E5%88%87%E3%81%AA%E5%A4%A7%E3%81%8D%E3%81%95%E3%81%AB%E5%88%86%E5%89%B2%E3%81%99%E3%82%8B)

- ### レビューコメントに対する修正を行なった際は修正内容のコミットIDのリンクをコメントに貼って返信すること

  - [詳しい手順](https://zenn.dev/keitakn/articles/github-code-review-reviewee#%E4%BF%AE%E6%AD%A3%E5%86%85%E5%AE%B9%E3%81%AE%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88id%E3%82%92%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%A7%E4%BC%9D%E3%81%88%E3%82%8B)

- ### ブランチを作成した時点で、`git commit --allow-empty`を実行して`push`した後、githubで`Draft Pull Request`を出すこと

  - [詳しい手順](https://zenn.dev/keitakn/articles/github-code-review-reviewee#%E6%97%A9%E3%82%81%E3%81%ABdraft-pull-request%E3%82%92%E5%87%BA%E3%81%99)

  - [Draft Pull Requestについて](https://github.blog/jp/2019-02-19-introducing-draft-pull-requests/)
