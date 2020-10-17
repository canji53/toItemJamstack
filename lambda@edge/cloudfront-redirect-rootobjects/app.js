/**
 * cloudfrontにリクエストされたパスからルートディレクトリ以外のパスをindex.htmlにリダイレクトする Lambda
 * これは、ルートディレクトリ以外の各ディレクトリのインデックスオブジェクトはindex.htmlを直接参照しない仕様のため
 *
 * (例)
 * https://example.com/ -> /index.html　　◯
 * https://example.com/contact/ -> /contact/ 　×
 * https://exmaple.com/contact/ -> lambda@edge -> /contact/index.html ◯
 */
exports.lambdaHandler = async (event, context, callback) => {

  // CloudFrontのイベントからリクエストを抽出
  let request = event.Records[0].cf.request;

  const oldUri = request.uri; // リクエストから変換前のURI
  const newUri = redirectUri(oldUri); // 変換条件からURIを変更

  console.log("Old URI: " + oldUri);
  console.log("New URI: " + newUri);

  // リクエストに変換後のURLを注入
  request.uri = newUri;

  // CloudFrontにコールバック
  return request;
};

/**
 * uriを条件に応じて変換
 * @param {string} uri
 */
const redirectUri = (uri) => {

  // favicon.ico はルートディレクトリにして返す
  if (uri.indexOf('favicon.ico') !== -1) {
    return '/favicon.ico';
  }

  // pathの末端が拡張子付きである場合は、そのまま返す
  if (uri.split('/').pop().search(/\./) !== -1) {
    return uri;
  }

  // 末尾に'/'がない、末尾が'.html'でない場合は、'/'を追加
  if (uri.search(/\/$/) === -1) {
    return uri + '/index.html'; // 末尾に'/'を追加
  }

  // 末尾が'/'の場合、つまり、'/xxx/' -> '/xxx/index.html' に変換
  if (uri.search(/\/$/) !== -1) {
    return uri + 'index.html'; // 末尾に'index.html'を追加
  }

  return uri;
};
