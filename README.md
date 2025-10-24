# HGE Creator 웹사이트

HGE Creator는 인디 게임 개발자와 260명의 다양한 크리에이터를 연결하는 플랫폼입니다.

## 🎮 프로젝트 개요

이 웹사이트는 다음과 같은 목적으로 개발되었습니다:
- HGE Creator 관련 정보를 효과적으로 전달
- 인디 게임 개발자와 크리에이터 간의 협업 기회 제공
- 260명의 다양한 크리에이터들을 소개하고 연결

## 🚀 주요 기능

### 메인 페이지
- 히어로 섹션: HGE Creator 브랜드 소개
- 핵심 가치 섹션: 인디 게임과 크리에이터 연결의 중요성
- 통계 섹션: 260명의 크리에이터, 성공 사례 등

### 크리에이터 페이지
- 크리에이터 카드 형태의 프로필 표시
- 카테고리별 필터링 (스트리밍, 일러스트, 성우, 이벤트, 콘텐츠, 마케팅)
- 실시간 검색 기능
- 협업 가능 여부 필터링

### 협업 프로세스 페이지
- 5단계 협업 프로세스 상세 설명
- 협업 혜택 및 기대 효과
- 프로세스별 상세 가이드

### 성공 사례 페이지
- 실제 협업 성공 사례 3개 소개
- 협업 성과 통계 표시
- 고객 후기 및 증언

### 참여 방법 페이지
- 참여 대상 및 요건 안내
- 4단계 참여 프로세스
- 상세한 협업 신청 폼
- FAQ 섹션

## 🛠 기술 스택

- **Frontend Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Font**: Noto Sans KR
- **Build Tool**: Turbopack
- **Linting**: ESLint
- **Data Source**: Google Sheets API (동적 데이터 관리)
- **Caching**: LocalStorage (5분 캐시)

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── collaboration/      # 협업 프로세스 페이지
│   ├── creators/          # 크리에이터 목록 페이지
│   ├── participate/       # 참여 방법 페이지
│   ├── success-stories/   # 성공 사례 페이지
│   ├── globals.css        # 글로벌 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx          # 메인 페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── ContactForm.tsx    # 협업 신청 폼
│   ├── CreatorCard.tsx    # 크리에이터 카드
│   ├── CreatorFilter.tsx  # 크리에이터 필터
│   ├── Footer.tsx         # 푸터
│   ├── Header.tsx         # 헤더
│   └── HeroSection.tsx    # 히어로 섹션
├── data/                  # 데이터 파일
│   └── creators.ts        # 크리에이터 샘플 데이터
├── types/                 # TypeScript 타입 정의
│   └── creator.ts         # 크리에이터 관련 타입
└── lib/                   # 유틸리티 함수
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

1. 의존성 설치
```bash
npm install
```

2. 환경 변수 설정
```bash
cp .env.local.example .env.local
# .env.local 파일을 편집하여 Google Sheets API 설정
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드

프로덕션 빌드:
```bash
npm run build
```

빌드된 앱 실행:
```bash
npm start
```

## 📱 반응형 디자인

이 웹사이트는 다음 디바이스에 최적화되어 있습니다:
- 모바일 (320px~)
- 태블릿 (768px~)
- 데스크톱 (1024px~)

## 🎨 디자인 특징

### 브랜드 아이덴티티
- HGE Creator 로고 및 브랜딩 활용
- 게임 업계에 어울리는 모던하고 역동적인 디자인

### 색상 팔레트
- Primary: Indigo (600, 700)
- Secondary: Purple (600, 700)
- Accent: Pink (400), Green (600), Blue (600)
- Neutral: Gray (50~900)

### 타이포그래피
- Primary Font: Noto Sans KR
- 가독성이 높은 한글 폰트
- 제목과 본문의 명확한 위계

## 📊 주요 데이터

- **크리에이터 수**: 260명 (구글 시트에서 동적 관리)
- **카테고리**: 6개 (스트리밍, 일러스트, 성우, 이벤트, 콘텐츠, 마케팅)
- **성공 사례**: 3개 주요 사례
- **협업 프로세스**: 5단계 체계적 관리
- **데이터 소스**: Google Sheets API (실시간 동기화)

## 📋 구글 시트 연동

### 크리에이터 데이터 관리
1. [구글 시트 설정 가이드](./GOOGLE_SHEETS_SETUP.md) 참조
2. Google Cloud Console에서 API 키 발급
3. 크리에이터 정보 구글 시트 생성 및 공개 설정
4. 환경 변수 설정

### 콘텐츠 관리 시스템 (CMS)
1. [콘텐츠 관리 설정 가이드](./CONTENT_MANAGEMENT_SETUP.md) 참조
2. 웹사이트의 모든 텍스트를 구글 시트에서 관리
3. 실시간 콘텐츠 업데이트 가능
4. 관리자 패널을 통한 쉬운 관리

### 데이터 관리
- **실시간 업데이트**: 구글 시트 수정 시 5분 내 자동 반영
- **관리자 패널**: 우하단 설정 버튼으로 데이터 동기화
- **캐시 시스템**: 5분간 로컬 캐시로 성능 최적화
- **백업 시스템**: 구글 시트 연결 실패 시 로컬 데이터 사용

### 관리 가능한 콘텐츠
- 메인 페이지 제목, 설명, 버튼 텍스트
- 통계 숫자 및 라벨
- 네비게이션 메뉴
- 푸터 정보 및 연락처
- 각 페이지별 제목과 설명
- CTA 버튼 텍스트 및 링크

### 환경 변수
```env
# API 키 (공통)
NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY=your_api_key

# 크리에이터 데이터 시트
NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID=your_creators_sheet_id

# 콘텐츠 관리 시트 (선택사항)
NEXT_PUBLIC_CONTENT_SHEETS_SPREADSHEET_ID=your_content_sheet_id
```

## 🔧 커스터마이징

### 콘텐츠 관리
- **구글 시트 CMS**: 모든 텍스트 콘텐츠를 구글 시트에서 관리 (권장)
- **크리에이터 데이터**: 구글 시트로 실시간 관리
- **로컬 백업**: `src/data/creators.ts`와 `src/lib/contentService.ts`에서 백업 데이터

### 관리자 도구
- **크리에이터 관리**: 우하단 파란색 설정 버튼
- **콘텐츠 관리**: 우하단 녹색 편집 버튼
- **실시간 동기화**: 캐시 관리 및 수동 새로고침

### 스타일 커스터마이징
`src/app/globals.css`와 Tailwind CSS 클래스를 통해 스타일을 커스터마이징할 수 있습니다.

### 새로운 페이지 추가
1. `src/app/` 디렉토리에 새로운 폴더 생성
2. `page.tsx` 파일 추가 (자동 라우팅)
3. 콘텐츠 관리 시트에 페이지별 콘텐츠 추가

## 📞 연락처

- 이메일: kyle@hgecreator.com
- 전화: 
- 주소: 

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

---

© 2024 HGE Creator. All rights reserved.
