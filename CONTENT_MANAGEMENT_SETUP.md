# 콘텐츠 관리 시스템 설정 가이드

이 가이드는 HGE Creator 웹사이트의 모든 텍스트 콘텐츠를 구글 시트를 통해 쉽게 관리하는 방법을 설명합니다.

## 📋 개요

콘텐츠 관리 시스템을 통해 다음과 같은 내용들을 구글 시트에서 직접 수정할 수 있습니다:

- 메인 페이지 제목, 설명, 버튼 텍스트
- 통계 숫자 및 라벨
- 네비게이션 메뉴
- 푸터 정보 및 연락처
- 각 페이지별 제목과 설명
- CTA 버튼 텍스트 및 링크

## 🚀 1단계: 콘텐츠 관리 시트 생성

### 1.1 새 구글 시트 생성
1. [Google Sheets](https://sheets.google.com)에 접속
2. 새 스프레드시트 생성
3. 제목을 "HGE Creator Content Management"로 변경

### 1.2 Content 시트 설정
첫 번째 시트의 이름을 "Content"로 변경하고, 다음 헤더를 A1:D1에 입력:

| A       | B   | C     | D    |
| ------- | --- | ----- | ---- |
| Section | Key | Value | Type |

### 1.3 데이터 입력 예시

```
Section | Key | Value | Type
hero | title | 인디 게임과 크리에이터를 연결 | string
hero | subtitle | 인디 게임과 | string
hero | description | 260명의 다양한 크리에이터와 함께하는... | string
hero | primaryButtonText | 크리에이터 둘러보기 | string
hero | primaryButtonLink | /creators | string
statistics | creators.value | 260+ | string
statistics | creators.label | 등록된 크리에이터 | string
coreValues | title | 인디 게임과 크리에이터의 완벽한 만남 | string
coreValues | values.0.title | 다양한 크리에이터 | string
coreValues | values.0.description | 스트리밍, 일러스트... | string
coreValues | values.0.icon | 👥 | string
```

### 1.4 Settings 시트 설정 (선택사항)
두 번째 시트를 "Settings"로 만들고, 전역 설정을 관리:

| A   | B     | C    |
| --- | ----- | ---- |
| Key | Value | Type |

```
Key | Value | Type
siteName | HGE Creator | string
contactEmail | contact@hgecreator.com | string
contactPhone | 02-1234-5678 | string
```

## 🔑 2단계: 구글 시트 설정

### 2.1 시트 공개 설정
1. 구글 시트에서 우상단 "공유" 버튼 클릭
2. "링크가 있는 모든 사용자" 선택
3. 권한을 "뷰어"로 설정
4. "완료" 클릭

### 2.2 스프레드시트 ID 확인
구글 시트 URL에서 스프레드시트 ID를 복사:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                    이 부분이 스프레드시트 ID입니다
```

## ⚙️ 3단계: 환경 변수 설정

`.env.local` 파일에 콘텐츠 시트 ID 추가:

```env
# 기존 설정
NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID=your_creators_spreadsheet_id_here

# 콘텐츠 관리용 시트 추가
NEXT_PUBLIC_CONTENT_SHEETS_SPREADSHEET_ID=your_content_spreadsheet_id_here
```

## 📊 4단계: 콘텐츠 구조 가이드

### 4.1 메인 페이지 콘텐츠

#### 히어로 섹션
```
Section: hero
- title: 메인 제목
- subtitle: 서브 제목
- description: 설명 텍스트
- primaryButtonText: 주 버튼 텍스트
- primaryButtonLink: 주 버튼 링크
- secondaryButtonText: 보조 버튼 텍스트
- secondaryButtonLink: 보조 버튼 링크
```

#### 통계 섹션
```
Section: statistics
- creators.value: 크리에이터 수 (예: 260+)
- creators.label: 크리에이터 라벨
- projects.value: 프로젝트 수 (예: 150+)
- projects.label: 프로젝트 라벨
- companies.value: 회사 수 (예: 50+)
- companies.label: 회사 라벨
```

#### 핵심 가치 섹션
```
Section: coreValues
- title: 섹션 제목
- subtitle: 섹션 부제목
- values.0.title: 첫 번째 가치 제목
- values.0.description: 첫 번째 가치 설명
- values.0.icon: 첫 번째 가치 아이콘 (이모지)
- values.1.title: 두 번째 가치 제목
- values.1.description: 두 번째 가치 설명
- values.1.icon: 두 번째 가치 아이콘
```

### 4.2 사이트 정보
```
Section: siteInfo
- siteName: 사이트 이름
- siteDescription: 사이트 설명
- logoText: 로고 텍스트
- contactEmail: 연락처 이메일
- contactPhone: 연락처 전화번호
- address: 주소
- businessHours: 운영시간
```

### 4.3 네비게이션
```
Section: navigation
- items.0.name: 첫 번째 메뉴 이름
- items.0.href: 첫 번째 메뉴 링크
- items.0.order: 첫 번째 메뉴 순서
```

### 4.4 데이터 타입

| Type    | 설명             | 예시                |
| ------- | ---------------- | ------------------- |
| string  | 일반 텍스트      | "안녕하세요"        |
| number  | 숫자             | 260                 |
| boolean | 참/거짓          | true, false         |
| array   | 배열 (쉼표 구분) | "항목1,항목2,항목3" |
| json    | JSON 객체        | {"key": "value"}    |

## 🧪 5단계: 테스트

### 5.1 로컬 테스트
1. 개발 서버 실행: `npm run dev`
2. 메인 페이지 접속
3. 우하단 녹색 "콘텐츠 관리" 버튼 클릭
4. "콘텐츠 동기화" 버튼 클릭
5. 시트 데이터가 웹사이트에 반영되는지 확인

### 5.2 콘텐츠 수정 테스트
1. 구글 시트에서 텍스트 수정
2. 웹사이트에서 "콘텐츠 동기화" 클릭
3. 변경사항이 즉시 반영되는지 확인

## 📝 6단계: 콘텐츠 관리 실전 가이드

### 6.1 일반적인 수정 사항

#### 연락처 정보 변경
```
Section: siteInfo
Key: contactEmail
Value: new-email@company.com
Type: string
```

#### 통계 숫자 업데이트
```
Section: statistics
Key: creators.value
Value: 300+
Type: string
```

#### 버튼 텍스트 변경
```
Section: hero
Key: primaryButtonText
Value: 새로운 버튼 텍스트
Type: string
```

### 6.2 복잡한 콘텐츠 관리

#### 배열 데이터 (목록)
```
Section: coreValues
Key: values.0.features
Value: 기능1,기능2,기능3
Type: array
```

#### 중첩 객체 데이터
점(.)을 사용하여 중첩 구조 표현:
```
Section: pages
Key: collaboration.hero.title
Value: 협업 프로세스
Type: string
```

## 🔧 7단계: 고급 기능

### 7.1 조건부 콘텐츠
```
Section: features
Key: showBetaFeature
Value: true
Type: boolean
```

### 7.2 다국어 지원 준비
```
Section: i18n
Key: ko.welcome
Value: 환영합니다
Type: string

Section: i18n
Key: en.welcome
Value: Welcome
Type: string
```

### 7.3 A/B 테스트 지원
```
Section: experiments
Key: heroTitleVariant
Value: A
Type: string
```

## 🚨 주의사항

### 데이터 형식
- **문자열**: 따옴표 없이 입력
- **숫자**: 숫자만 입력 (쉼표 없이)
- **배열**: 쉼표로 구분, 공백 주의
- **불린**: true 또는 false (소문자)

### 캐시 관리
- 변경사항은 5분 후 자동 반영
- 즉시 반영을 원하면 "콘텐츠 동기화" 클릭
- 문제 발생 시 "캐시 삭제" 후 새로고침

### 백업
- 구글 시트 버전 기록 활용
- 중요 변경 전 백업 시트 생성 권장
- CSV 다운로드로 로컬 백업

## 📞 지원

문제 발생 시 확인사항:
1. 구글 시트 공개 설정 확인
2. 환경 변수 설정 확인
3. 브라우저 개발자 도구 콘솔 확인
4. 데이터 형식 확인

추가 도움이 필요하면 개발팀에 문의하세요.
