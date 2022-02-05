export function getTime() {
  // 現在の日付を取得する
  // Dateオブジェクトのインスタンス化
  const today = new Date()

  // 日時を取得
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const hours = today.getHours()
  const minutes = today.getMinutes()

  // 上記を結合
  const currentTime =
    year + '-' + month + '-' + date + ' ' + hours + ':' + minutes

  return { currentTime }
}
