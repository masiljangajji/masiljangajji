### Hi there, I'm Seungjae Lee 👋


---

### 🌍 Opensource Contribution

- **SQLGlot**
  - **[fix(athena): route by each engine's rules when the combined tokenizer fails #8629](https://github.com/tobymao/sqlglot/pull/8629)**
- **Spring Data JPA**
  - **[Fix `Range<Score>` lower bound handling in vector search queries #4310](https://github.com/spring-projects/spring-data-jpa/pull/4310)**
- **Spring Data MongoDB**
  - **[GH-4103 - Use TypeScanner to scan for initial entities #5231](https://github.com/spring-projects/spring-data-mongodb/pull/5231)**
- **JJWT**
  - **[Align the Gson extension with Jackson's duplicate member name rejection #1073](https://github.com/jwtk/jjwt/pull/1073)**
- **LangChain4j**
  - **[fix: honor the negation in SqlFilterParser NOT BETWEEN #6063](https://github.com/langchain4j/langchain4j/pull/6063)**
  - **[fix: keep the sign of negative numbers in SqlFilterParser IN lists #6037](https://github.com/langchain4j/langchain4j/pull/6037)**
- **Exercism**
  - **[Add approaches for Parallel Letter Frequency #2863](https://github.com/exercism/java/pull/2863)**
  - **[Contribution Result](https://exercism.org/tracks/java/exercises/parallel-letter-frequency/dig_deeper)**
- **e-Government Framework**
  - **egovframe-runtime**
    - **[fix: 수식 셀을 읽으면 값을 돌려주지 못하고 예외가 새어 나가는 문제 수정 #387](https://github.com/eGovFramework/egovframe-runtime/pull/387)**
    - **[fix: 빈 행이 섞인 엑셀을 업로드하면 데이터 행이 누락되거나 업로드가 중단되는 문제 수정 #386](https://github.com/eGovFramework/egovframe-runtime/pull/386)**
    - **[fix: BaseException·BaseRuntimeException 이 전달받은 원인 예외를 보관하지 않아 getWrappedException() 이 항상 null 인 문제 수정 #350](https://github.com/eGovFramework/egovframe-runtime/pull/350)**
    - **[fix: MessageSender가 락 대기 중 interrupt를 무시해 지연 전송이 발생하는 문제 수정 #320](https://github.com/eGovFramework/egovframe-runtime/pull/320)**
    - **[fix: EgovBatchException 이 전달받은 원인 예외를 즉시 버리는 문제 수정 #307](https://github.com/eGovFramework/egovframe-runtime/pull/307)**
  - **egovframe-ai-rag**
    - **[fix: 특수문자 정리가 단위 기호와 한자와 원문자를 본문에서 지우는 문제 수정 #86](https://github.com/eGovFramework/egovframe-ai-rag/pull/86)**
    - **[fix: 비줄바꿈 공백과 전각 공백이 색인 단계에서 삭제되는 문제 수정 #85](https://github.com/eGovFramework/egovframe-ai-rag/pull/85)**
    - **[fix: 하위 폴더의 동명 문서가 같은 id 를 받아 서로의 색인을 지우는 문제 수정 #84](https://github.com/eGovFramework/egovframe-ai-rag/pull/84)**
    - **[hotfix: main 빌드 불가 — 프롬프트 템플릿 외부화 이후 잔존 테스트로 인한 컴파일 실패 수정 #74](https://github.com/eGovFramework/egovframe-ai-rag/pull/74)**
  - **egovframe-msa-edu**
    - **[fix(reserve-check-service): 예약 수정이 아직 차감되지 않은 재고를 다시 차감하는 문제 수정 #280](https://github.com/eGovFramework/egovframe-msa-edu/pull/280)**
    - **[fix(reserve-check-service): 공간 예약의 신청 기간 검증이 실행되지 않던 문제 수정 #279](https://github.com/eGovFramework/egovframe-msa-edu/pull/279)**
    - **[예약 승인·취소 중복 호출 시 재고 이중 반영 방지 #100](https://github.com/eGovFramework/egovframe-msa-edu/pull/100)**
    - **[취소된 예약이 재고 겹침 계산에 포함돼 정상 신청이 거절되는 문제 수정 #99](https://github.com/eGovFramework/egovframe-msa-edu/pull/99)**
    - **[fix: 테스트가 메인 설정 파일을 로드하지 못해 컨텍스트 기동이 실패하는 문제 수정 #98](https://github.com/eGovFramework/egovframe-msa-edu/pull/98)**
    - **[fix: 업로드 허용 확장자에서 htm/html 제거가 배포용 설정 사본에 누락된 문제 수정 #94](https://github.com/eGovFramework/egovframe-msa-edu/pull/94)**
    - **[hotfix: board-service 가 빌드되지 않는 build.gradle 문법 오류 수정 #93](https://github.com/eGovFramework/egovframe-msa-edu/pull/93)**
  - **egovframe-template-simple-backend**
    - **[fix: 존재하지 않는 게시물을 조회·수정·삭제하면 서버 오류가 나는 문제 수정 #211](https://github.com/eGovFramework/egovframe-template-simple-backend/pull/211)**
    - **[ci: 워크플로에서 테스트가 실행되지 않는 문제 수정 #188](https://github.com/eGovFramework/egovframe-template-simple-backend/pull/188)**
    - **[fix: 논리 삭제된 첨부파일이 다운로드·이미지 조회로 계속 반환되는 문제 수정 #184](https://github.com/eGovFramework/egovframe-template-simple-backend/pull/184)**
    - **[fix: 일정 삭제 시 첨부파일이 사용중 상태로 남는 문제 수정 #183](https://github.com/eGovFramework/egovframe-template-simple-backend/pull/183)**
    - **[코드 스타일 및 안전성 개선 (Override, 오탈자, 기본값 및 예외처리) #104](https://github.com/eGovFramework/egovframe-template-simple-backend/pull/104)**
    - **[refactor: 읽기 로직 개선 (StringBuilder, try-with-resource) #102](https://github.com/eGovFramework/egovframe-template-simple-backend/pull/102)**

---

### ✍️ Latest Posts
- <a href=https://codestudy.org/jjwt-duplicate-json-keys>이 이슈는 2023년 12월에 시작되었으며...[더 보기]</a></br>
- <a href=https://codestudy.org/how-i-tested-a-sql-builder>초SSS급 개발자는 테스트를 작성한다</a></br>
- <a href=https://codestudy.org/prompt-to-harness-engineering>AI 시대, 개발은 어떻게 바뀌는가</a></br>
