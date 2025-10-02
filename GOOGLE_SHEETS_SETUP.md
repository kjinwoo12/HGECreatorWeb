# 구글 시트 연동 설정 가이드

이 가이드는 HGE Creator 웹사이트를 구글 시트와 연동하여 크리에이터 정보를 동적으로 관리하는 방법을 설명합니다.

## 📋 1단계: 구글 시트 준비

### 1.1 새 구글 시트 생성
1. [Google Sheets](https://sheets.google.com)에 접속
2. 새 스프레드시트 생성
3. 제목을 "HGE Creator Database"로 변경

### 1.2 헤더 행 설정
첫 번째 행(A1:O1)에 다음 헤더를 입력하세요:

| A   | B    | C        | D           | E            | F           | G       | H      | I       | J         | K       | L            | M                    | N           | O    |
| --- | ---- | -------- | ----------- | ------------ | ----------- | ------- | ------ | ------- | --------- | ------- | ------------ | -------------------- | ----------- | ---- |
| ID  | Name | Category | Description | ProfileImage | Specialties | YouTube | Twitch | Twitter | Instagram | Website | Achievements | CollaborationHistory | IsAvailable | Tags |

### 1.3 데이터 예시
두 번째 행부터 크리에이터 데이터를 입력하세요:

```
creator-1 | 게임스트리머 김민수 | streaming | 인디 게임 전문 스트리머... | /images/creator1.jpg | 인디게임 리뷰,실시간 게임 플레이,게임 QA | https://youtube.com/@streamer1 | https://twitch.tv/streamer1 | https://twitter.com/streamer1 |  | https://streamer1.com | 인디게임 소개 영상 100만 조회수 달성
게임 개발자 인터뷰 시리즈 50편 제작 | 픽셀 아트 RPG 몽환의 여행 홍보 협업
퍼즐 게임 브레인 챌린지 베타 테스트 | TRUE | 인디게임,스트리밍,RPG
```

### 1.4 카테고리 값 가이드
Category 컬럼에는 다음 값 중 하나를 사용하세요:
- `streaming` - 스트리밍 협업
- `illustration` - 일러스트
- `voice-acting` - 성우
- `event-coordination` - 이벤트 기획
- `content-creation` - 콘텐츠 제작
- `marketing` - 마케팅

### 1.5 데이터 형식 가이드
- **Specialties, Tags**: 쉼표(,)로 구분하여 입력
- **Achievements, CollaborationHistory**: 줄바꿈으로 구분하여 입력
- **IsAvailable**: TRUE 또는 FALSE (대소문자 무관)
- **소셜 링크**: 전체 URL 입력 (비어있어도 됨)

## 🔑 2단계: Google Cloud Console 설정

### 2.1 프로젝트 생성
1. [Google Cloud Console](https://console.cloud.google.com)에 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. 프로젝트 이름: "HGE Creator Website"

### 2.2 Google Sheets API 활성화
1. 좌측 메뉴에서 "API 및 서비스" > "라이브러리" 선택
2. "Google Sheets API" 검색
3. Google Sheets API 선택 후 "사용 설정" 클릭

### 2.3 API 키 생성
1. "API 및 서비스" > "사용자 인증 정보" 선택
2. "사용자 인증 정보 만들기" > "API 키" 선택
3. 생성된 API 키 복사 및 보관
4. (권장) API 키 제한 설정:
   - "HTTP 리퍼러(웹사이트)" 선택
   - 웹사이트 제한에 도메인 추가
   - API 제한에서 "Google Sheets API"만 선택

## 📄 3단계: 구글 시트 공개 설정

### 3.1 시트 공유 설정
1. 구글 시트에서 우상단 "공유" 버튼 클릭
2. "링크가 있는 모든 사용자" 선택
3. 권한을 "뷰어"로 설정
4. "완료" 클릭

### 3.2 스프레드시트 ID 확인
구글 시트 URL에서 스프레드시트 ID를 복사하세요:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                    이 부분이 스프레드시트 ID입니다
```

## ⚙️ 4단계: 환경 변수 설정

### 4.1 .env.local 파일 생성
프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 입력:

```env
# Google Sheets API 설정
NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY=여기에_API_키_입력
NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID=여기에_스프레드시트_ID_입력
```

### 4.2 Vercel 배포 시 환경 변수 설정
1. Vercel 대시보드에서 프로젝트 선택
2. "Settings" > "Environment Variables" 이동
3. 다음 변수들을 추가:
   - `NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY`
   - `NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID`

## 🧪 5단계: 테스트

### 5.1 로컬 테스트
1. 개발 서버 실행: `npm run dev`
2. `/creators` 페이지 접속
3. "데이터 새로고침" 버튼 클릭
4. 구글 시트 데이터가 로드되는지 확인

### 5.2 문제 해결
- **데이터가 로드되지 않는 경우**: 브라우저 개발자 도구의 콘솔 확인
- **API 키 오류**: Google Cloud Console에서 API 키 설정 재확인
- **권한 오류**: 구글 시트 공유 설정 재확인

## 📊 데이터 관리 팁

### 실시간 업데이트
- 구글 시트에서 데이터를 수정하면 5분 후 웹사이트에 자동 반영
- 즉시 반영을 원하면 "데이터 새로고침" 버튼 클릭

### 대량 데이터 관리
- 한 번에 여러 행을 복사/붙여넣기 가능
- CSV 파일을 구글 시트로 가져오기 가능
- 구글 폼을 통한 데이터 수집 연동 가능

### 백업 및 버전 관리
- 구글 시트 자동 버전 기록 활용
- 정기적으로 CSV 백업 권장
- 중요한 변경 사항은 별도 시트에 기록

## 🔒 보안 고려사항

### API 키 보안
- API 키를 GitHub 등 공개 저장소에 업로드하지 마세요
- `.env.local` 파일을 `.gitignore`에 추가하세요
- 정기적으로 API 키를 교체하세요

### 데이터 보안
- 민감한 개인정보는 구글 시트에 저장하지 마세요
- 필요시 구글 시트 접근 권한을 특정 사용자로 제한하세요

## 📞 지원

문제가 발생하면 다음을 확인하세요:
1. 구글 시트 URL 접근 가능 여부
2. API 키 유효성
3. 브라우저 콘솔 오류 메시지
4. 네트워크 연결 상태

추가 도움이 필요하면 개발팀에 문의하세요.
