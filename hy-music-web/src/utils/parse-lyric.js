

// [00:31.160]如果场景里出现一架钢琴
const regexExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/

export function parseLyric(lyricString) {

  const lineLyrics = lyricString.split("\n")
  let lyrics = []
  for (let line of lineLyrics) {
    if (line) {
      const result = regexExp.exec(line)
      if (!result) continue
      const time1 = result[1] * 60 * 1000
      const time2 = result[2] * 1000
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10
      const time = time1 + time2 + time3
      const content = line.replace(regexExp, "").trim()
      const lineObj = {time, content}
      lyrics.push(lineObj)
    }
  }
  return lyrics
}