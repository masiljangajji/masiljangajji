const fs = require("fs");
const Parser = require("rss-parser");

let text = `
### Hi there, I'm Seungjae Lee 👋

---

### 💼 Career
- **NHN AD** (2026.02.23 ~ ing)
  - AI 기반 광고 서비스 개발
- **악어에듀** (2025.06.05 ~ 2026.02.21)
  - 단대소고 입학 시험과 실력고사 대비를 위한 알고리즘 및 COS Pro 특강 진행
- **가비아** (2025.03.04 ~ 2025.05.31)
  - 하이웍스 기반 채용 서비스 개발


---

### 🚀 Activity
- **꾸밈없는 글쓰기** (2026.06.14 ~ ing)
- **표준프레임워크 오픈커뮤니티** (2025.05.19 ~ 2025.09.19)
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
- https://codestudy.org
- https://medium.com/@hjk172262

---

### ✍️ Latest Posts
`;

const parser = new Parser({
    headers: {
        Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
    },
});

(async () => {
    // codestudy.org 기술 블로그 RSS 피드
    const feed = await parser.parseURL("https://codestudy.org/feed.xml");

    // 최신 글 최대 5개의 제목·링크를 README에 추가 (글이 5개 미만이어도 안전)
    const n = Math.min(5, feed.items.length);
    for (let i = 0; i < n; i++) {
        const { title, link } = feed.items[i];
        console.log(`${i + 1}번째 게시물: ${title} (${link})`);
        text += `- <a href=${link}>${title}</a></br>\n`;
    }

    fs.writeFileSync("README.md", text, "utf8", (e) => {
        console.log(e);
    });

    console.log("업데이트 완료");
})();
