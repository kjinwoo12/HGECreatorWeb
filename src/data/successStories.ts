import { CollaborationCase } from '@/types/creator';

export const mockSuccessStories: CollaborationCase[] = [
    {
        id: 'story-1',
        title: '인디 RPG "몽환의 여행" 성공적인 런칭',
        description: '스트리머와 일러스트레이터의 협업을 통해 인디 RPG 게임이 성공적으로 런칭되었습니다. 사전 홍보부터 런칭 이벤트까지 체계적인 마케팅으로 첫 달 매출 목표를 200% 달성했습니다.',
        creators: [
            {
                id: '1',
                name: '게임스트리머 김민수',
                category: 'streaming',
                description: '인디 게임 전문 스트리머',
                profileImage: '/creators/streamer1.jpg',
                specialties: ['인디게임 리뷰', '실시간 게임 플레이'],
                socialLinks: { youtube: 'https://youtube.com/@gamestreamer' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: true,
                tags: ['인디게임', '스트리밍']
            },
            {
                id: '2',
                name: '일러스트레이터 박지은',
                category: 'illustration',
                description: '게임 캐릭터 디자인 전문',
                profileImage: '/creators/illustrator1.jpg',
                specialties: ['캐릭터 디자인', '프로모션 일러스트'],
                socialLinks: { instagram: 'https://instagram.com/artpark' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: true,
                tags: ['일러스트', '캐릭터디자인']
            }
        ],
        gameTitle: '몽환의 여행',
        gameCompany: '드림 인디 스튜디오',
        collaborationType: '종합 마케팅 협업',
        results: [
            '런칭 첫 달 매출 목표 200% 달성',
            '스팀 인디게임 차트 3위 진입',
            '유튜브 홍보 영상 누적 조회수 150만',
            '게임 커뮤니티 활성 사용자 5,000명 확보',
            '메타크리틱 사용자 평점 8.7/10 달성'
        ],
        images: [
            '/success-stories/dream-journey-1.jpg',
            '/success-stories/dream-journey-2.jpg',
            '/success-stories/dream-journey-3.jpg'
        ],
        date: '2024-08-15'
    },
    {
        id: 'story-2',
        title: '모바일 퍼즐게임 "브레인 챌린지" 글로벌 진출',
        description: '성우와 콘텐츠 크리에이터의 협업으로 모바일 퍼즐게임이 해외 시장에 성공적으로 진출했습니다. 다국어 더빙과 현지화된 마케팅 전략으로 글로벌 다운로드 100만을 돌파했습니다.',
        creators: [
            {
                id: '3',
                name: '성우 이성민',
                category: 'voice-acting',
                description: '게임 캐릭터 더빙 전문',
                profileImage: '/creators/voice1.jpg',
                specialties: ['캐릭터 더빙', '게임 나레이션'],
                socialLinks: { youtube: 'https://youtube.com/@voicelee' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: true,
                tags: ['성우', '더빙']
            },
            {
                id: '5',
                name: '콘텐츠 크리에이터 정다혜',
                category: 'content-creation',
                description: '게임 마케팅 콘텐츠 전문',
                profileImage: '/creators/content1.jpg',
                specialties: ['영상 편집', '소셜미디어 마케팅'],
                socialLinks: { youtube: 'https://youtube.com/@contentjung' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: true,
                tags: ['영상제작', '마케팅']
            }
        ],
        gameTitle: '브레인 챌린지',
        gameCompany: '스마트 게임즈',
        collaborationType: '글로벌 마케팅 & 현지화',
        results: [
            '글로벌 다운로드 100만 돌파',
            '구글 플레이 퍼즐게임 카테고리 1위',
            'App Store 추천 게임 선정',
            '월 활성 사용자 50만명 달성',
            '평균 플레이 시간 25분으로 업계 평균 대비 150% 높음'
        ],
        images: [
            '/success-stories/brain-challenge-1.jpg',
            '/success-stories/brain-challenge-2.jpg',
            '/success-stories/brain-challenge-3.jpg'
        ],
        date: '2024-07-20'
    },
    {
        id: 'story-3',
        title: '액션 게임 "네온 나이트" 대형 이벤트 성공',
        description: '이벤트 기획자와 다수의 크리에이터들이 협력하여 대규모 게임 런칭 이벤트를 성공적으로 개최했습니다. 온오프라인 하이브리드 이벤트로 게임 인지도를 크게 높였습니다.',
        creators: [
            {
                id: '4',
                name: '이벤트 기획자 최유진',
                category: 'event-coordination',
                description: '게임 이벤트 기획 전문',
                profileImage: '/creators/event1.jpg',
                specialties: ['게임 런칭 이벤트', '컨벤션 기획'],
                socialLinks: { twitter: 'https://twitter.com/eventchoi' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: false,
                tags: ['이벤트기획', '컨벤션']
            }
        ],
        gameTitle: '네온 나이트',
        gameCompany: '사이버 엔터테인먼트',
        collaborationType: '런칭 이벤트 기획 & 운영',
        results: [
            '런칭 이벤트 참여자 3만명 달성',
            '온라인 스트리밍 동시 시청자 15만명',
            '게임 사전예약 50만건 돌파',
            '소셜미디어 이벤트 참여 10만명',
            '게임 런칭 후 첫 주 매출 목표 300% 달성'
        ],
        images: [
            '/success-stories/neon-night-1.jpg',
            '/success-stories/neon-night-2.jpg',
            '/success-stories/neon-night-3.jpg',
            '/success-stories/neon-night-4.jpg'
        ],
        date: '2024-06-10'
    },
    {
        id: 'story-4',
        title: '인디 어드벤처 "미스터리 하우스" 크라우드펀딩 성공',
        description: '여러 분야 크리에이터들의 협업으로 인디 게임 크라우드펀딩이 목표 금액의 350%를 달성했습니다. 체계적인 콘텐츠 마케팅과 커뮤니티 관리로 강력한 팬베이스를 구축했습니다.',
        creators: [
            {
                id: '1',
                name: '게임스트리머 김민수',
                category: 'streaming',
                description: '인디 게임 전문 스트리머',
                profileImage: '/creators/streamer1.jpg',
                specialties: ['인디게임 리뷰', '실시간 게임 플레이'],
                socialLinks: { youtube: 'https://youtube.com/@gamestreamer' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: true,
                tags: ['인디게임', '스트리밍']
            },
            {
                id: '5',
                name: '콘텐츠 크리에이터 정다혜',
                category: 'content-creation',
                description: '게임 마케팅 콘텐츠 전문',
                profileImage: '/creators/content1.jpg',
                specialties: ['영상 편집', '소셜미디어 마케팅'],
                socialLinks: { youtube: 'https://youtube.com/@contentjung' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: true,
                tags: ['영상제작', '마케팅']
            }
        ],
        gameTitle: '미스터리 하우스',
        gameCompany: '퍼즐 마스터즈',
        collaborationType: '크라우드펀딩 마케팅',
        results: [
            '크라우드펀딩 목표 금액 350% 달성',
            '후원자 수 2,500명 확보',
            '데모 버전 다운로드 20만건',
            '게임 커뮤니티 가입자 8,000명',
            '게임 개발 진행률 실시간 공개로 투명성 확보'
        ],
        images: [
            '/success-stories/mystery-house-1.jpg',
            '/success-stories/mystery-house-2.jpg'
        ],
        date: '2024-05-25'
    },
    {
        id: 'story-5',
        title: '레트로 플랫포머 "픽셀 어드벤처" 리마스터 성공',
        description: '클래식 게임의 리마스터 버전 출시를 위해 원작 팬들과 새로운 플레이어 모두를 타겟으로 한 마케팅 전략을 수립했습니다. 향수 마케팅과 현대적 요소의 조화로 큰 성공을 거두었습니다.',
        creators: [
            {
                id: '2',
                name: '일러스트레이터 박지은',
                category: 'illustration',
                description: '게임 캐릭터 디자인 전문',
                profileImage: '/creators/illustrator1.jpg',
                specialties: ['캐릭터 디자인', '프로모션 일러스트'],
                socialLinks: { instagram: 'https://instagram.com/artpark' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: true,
                tags: ['일러스트', '캐릭터디자인']
            },
            {
                id: '3',
                name: '성우 이성민',
                category: 'voice-acting',
                description: '게임 캐릭터 더빙 전문',
                profileImage: '/creators/voice1.jpg',
                specialties: ['캐릭터 더빙', '게임 나레이션'],
                socialLinks: { youtube: 'https://youtube.com/@voicelee' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: true,
                tags: ['성우', '더빙']
            }
        ],
        gameTitle: '픽셀 어드벤처 리마스터',
        gameCompany: '레트로 게임즈',
        collaborationType: '리마스터 콘텐츠 제작',
        results: [
            '오리지널 대비 500% 향상된 판매량',
            '스팀 긍정적 리뷰 95% 달성',
            '레트로 게임 카테고리 베스트셀러 1위',
            '게임 패스 포함으로 신규 플레이어 100만명 유입',
            '원작 팬들의 만족도 조사 4.9/5.0 달성'
        ],
        images: [
            '/success-stories/pixel-adventure-1.jpg',
            '/success-stories/pixel-adventure-2.jpg',
            '/success-stories/pixel-adventure-3.jpg'
        ],
        date: '2024-04-12'
    },
    {
        id: 'story-6',
        title: '교육용 게임 "매스 퀘스트" 학교 도입 성공',
        description: '교육 게임의 학교 현장 도입을 위해 교육자들과 협업하여 커리큘럼에 맞는 콘텐츠를 개발했습니다. 게임화된 학습으로 학생들의 참여도와 학습 효과를 크게 향상시켰습니다.',
        creators: [
            {
                id: '5',
                name: '콘텐츠 크리에이터 정다혜',
                category: 'content-creation',
                description: '교육 콘텐츠 전문',
                profileImage: '/creators/content1.jpg',
                specialties: ['교육 영상', '커리큘럼 개발'],
                socialLinks: { youtube: 'https://youtube.com/@contentjung' },
                achievements: [],
                collaborationHistory: [],
                isAvailable: true,
                tags: ['교육', '콘텐츠제작']
            }
        ],
        gameTitle: '매스 퀘스트',
        gameCompany: '에듀 테크',
        collaborationType: '교육용 콘텐츠 개발',
        results: [
            '전국 200개 학교 도입 완료',
            '학생 수학 성취도 평균 20% 향상',
            '교사 만족도 조사 4.7/5.0 달성',
            '교육부 우수 교육 콘텐츠 선정',
            '해외 5개국 수출 계약 체결'
        ],
        images: [
            '/success-stories/math-quest-1.jpg',
            '/success-stories/math-quest-2.jpg'
        ],
        date: '2024-03-18'
    }
];

// 성공 사례 통계 데이터
export const successStatistics = {
    totalProjects: mockSuccessStories.length,
    averageSuccessRate: 94,
    averageSatisfaction: 4.8,
    repeatCollaborationRate: 87,
    totalRevenue: '15억원',
    averageProjectDuration: '3.2개월',
    topCategories: [
        { category: '콘텐츠 제작', count: 4, percentage: 67 },
        { category: '일러스트', count: 3, percentage: 50 },
        { category: '스트리밍', count: 3, percentage: 50 },
        { category: '성우', count: 2, percentage: 33 },
        { category: '이벤트 기획', count: 1, percentage: 17 }
    ]
};
