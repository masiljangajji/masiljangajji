const fs = require("fs");
const dayjs = require("dayjs");
const Parser = require("rss-parser");
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

let text = `
### Hi there, I'm Seungjae Lee 👋
- [about me](https://masiljangajji.notion.site/255b70a0feb680c58609e715cc7e983b)

---

### 💼 Career
- **악어에듀 프로그래밍 강사** (2025.06.05 ~ ing)
  - 단대소고 입학 시험과 실력고사 대비를 위한 알고리즘 및 COS Pro 특강 진행
- **가비아 하이웍스 개발 인턴** (2025.03.04 ~ 2025.05.31)
  - 하이웍스 기반 채용 서비스 개발


---

### 🚀 Activity
- **제11회 세종대학교 SW·AI 해커톤 금상 수상** (2024.12.26 ~ 2024.12.27)  
- **SIPE 3기** (2024.11.01 ~ 2024.12.07)  
- **[kakao x goorm] 9oormthonUNIV 3기** (2024.09.06 ~ 2024.11.24)
- **NHN Academy 4기** (2023.08.28 ~ 2024.03.26)

---

### 🌍 Opensource Contribution

- **Exercism**
  - **[Add approaches for Parallel Letter Frequency #2863](https://github.com/exercism/java/pull/2863)**  
  - **[Contribution Result](https://exercism.org/tracks/java/exercises/parallel-letter-frequency/dig_deeper)** 
- **e-Government Framework**
  - **[refactor: 읽기 로직 개선 (StringBuilder,try-with-resource) #102](https://github.com/eGovFramework/egovframe-template-simple-backend/pull/102)**
  - **[코드 스타일 및 안전성 개선 (Override, 오탈자, 기본값 및 예외처리) #104](https://github.com/eGovFramework/egovframe-template-simple-backend/pull/104)**

---

### 🧪 Learning Archive

- https://github.com/users/masiljangajji/projects/1
- https://masiljangajji-coding.tistory.com/
- https://medium.com/@hjk172262

---

## Latest Posts
`;

const parser = new Parser({
    headers: {
        Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
    },
});

(async () => {
    // 피드 목록
    const feed = await parser.parseURL("https://masiljangajji-coding.tistory.com/rss");

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const { title, link, pubDate } = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);

        const date = dayjs(pubDate).add(9, "hours").format("YYYY.MM.DD HH:mm:ss");
        text += `<a href=${link}>${title}</a></br>`;
        text += `게시일자 : ${date}</br></br>`;
    }

    // README.md 파일 작성
    fs.writeFileSync("README.md", text, "utf8", (e) => {
        console.log(e);
    });

    console.log("업데이트 완료");
})();