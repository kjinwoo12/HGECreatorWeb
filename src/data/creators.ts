import { Creator, CreatorCategory } from '@/types/creator';

export const sampleCreators: Creator[] = [
    {
        id: '1',
        name: '게임스트리머 김민수',
        category: 'streaming',
        description: '인디 게임 전문 스트리머로 5년간 다양한 인디 게임을 소개하며 게임 개발자와 플레이어를 연결하는 역할을 하고 있습니다.',
        profileImage: '/creators/streamer1.jpg',
        specialties: ['인디게임 리뷰', '실시간 게임 플레이', '게임 QA', '커뮤니티 관리'],
        socialLinks: {
            youtube: 'https://youtube.com/@gamestreamer',
            twitch: 'https://twitch.tv/gamestreamer',
            twitter: 'https://twitter.com/gamestreamer'
        },
        achievements: [
            '인디게임 소개 영상 100만 조회수 달성',
            '게임 개발자 인터뷰 시리즈 50편 제작',
            '인디게임 페스티벌 MC 경험 3회'
        ],
        collaborationHistory: [
            '픽셀 아트 RPG "몽환의 여행" 홍보 협업',
            '퍼즐 게임 "브레인 챌린지" 베타 테스트',
            '액션 게임 "네온 나이트" 런칭 이벤트'
        ],
        isAvailable: true,
        tags: ['인디게임', '스트리밍', 'RPG', '퍼즐게임', '리뷰']
    },
    {
        id: '2',
        name: '일러스트레이터 박지은',
        category: 'illustration',
        description: '게임 캐릭터 디자인과 프로모션 일러스트를 전문으로 하는 아티스트입니다. 특히 판타지와 SF 장르에 특화되어 있습니다.',
        profileImage: '/creators/illustrator1.jpg',
        specialties: ['캐릭터 디자인', '프로모션 일러스트', '게임 UI 디자인', '팬아트'],
        socialLinks: {
            instagram: 'https://instagram.com/artpark',
            twitter: 'https://twitter.com/artpark',
            website: 'https://parkjiart.com'
        },
        achievements: [
            '게임 아트 공모전 대상 수상',
            '인디게임 5편 캐릭터 디자인 참여',
            '게임 일러스트 개인전 개최'
        ],
        collaborationHistory: [
            '모바일 RPG "드래곤 킹덤" 캐릭터 디자인',
            '인디 게임 "스페이스 어드벤처" 프로모션 아트',
            '게임 컨벤션 굿즈 디자인'
        ],
        isAvailable: true,
        tags: ['일러스트', '캐릭터디자인', '판타지', 'SF', '프로모션']
    },
    {
        id: '3',
        name: '성우 이성민',
        category: 'voice-acting',
        description: '게임 캐릭터 더빙과 나레이션을 전문으로 하는 성우입니다. 다양한 연령대와 캐릭터 타입의 목소리 연기가 가능합니다.',
        profileImage: '/creators/voice1.jpg',
        specialties: ['캐릭터 더빙', '게임 나레이션', '트레일러 보이스오버', '라이브 더빙'],
        socialLinks: {
            youtube: 'https://youtube.com/@voicelee',
            website: 'https://leevoice.com'
        },
        achievements: [
            '모바일 게임 주요 캐릭터 더빙 20편',
            '게임 트레일러 나레이션 50편',
            '성우 어워드 신인상 수상'
        ],
        collaborationHistory: [
            'RPG "영웅의 전설" 주인공 더빙',
            '어드벤처 게임 "미스터리 하우스" 나레이션',
            '액션 게임 "워리어즈" 다중 캐릭터 더빙'
        ],
        isAvailable: true,
        tags: ['성우', '더빙', '나레이션', '캐릭터보이스', '트레일러']
    },
    {
        id: '4',
        name: '이벤트 기획자 최유진',
        category: 'event-coordination',
        description: '게임 런칭 이벤트와 컨벤션 기획을 전문으로 하는 이벤트 코디네이터입니다. 온오프라인 하이브리드 이벤트 경험이 풍부합니다.',
        profileImage: '/creators/event1.jpg',
        specialties: ['게임 런칭 이벤트', '컨벤션 기획', '온라인 이벤트', '코스플레이 이벤트'],
        socialLinks: {
            twitter: 'https://twitter.com/eventchoi',
            website: 'https://choievent.com'
        },
        achievements: [
            '게임 컨벤션 이벤트 기획 15회',
            '온라인 게임 런칭 이벤트 참여자 10만명 달성',
            '코스플레이 대회 기획 및 운영 8회'
        ],
        collaborationHistory: [
            '인디게임 페스티벌 메인 이벤트 기획',
            '모바일 게임 "킹덤 배틀" 런칭 이벤트',
            '게임 컨벤션 코스플레이 대회 운영'
        ],
        isAvailable: false,
        tags: ['이벤트기획', '컨벤션', '런칭', '코스플레이', '온라인이벤트']
    },
    {
        id: '5',
        name: '콘텐츠 크리에이터 정다혜',
        category: 'content-creation',
        description: '게임 관련 영상 콘텐츠 제작과 소셜미디어 마케팅을 전문으로 하는 크리에이터입니다.',
        profileImage: '/creators/content1.jpg',
        specialties: ['영상 편집', '소셜미디어 마케팅', '게임 리뷰 영상', '쇼츠 콘텐츠'],
        socialLinks: {
            youtube: 'https://youtube.com/@contentjung',
            instagram: 'https://instagram.com/contentjung',
            website: 'https://contentjung.com'
        },
        achievements: [
            '게임 리뷰 영상 누적 조회수 500만',
            '소셜미디어 팔로워 총 10만명',
            '게임 마케팅 캠페인 성공률 90%'
        ],
        collaborationHistory: [
            '퍼즐 게임 "브레인 파워" 마케팅 캠페인',
            '액션 게임 "스피드 러너" 리뷰 영상',
            '인디게임 개발자 인터뷰 시리즈'
        ],
        isAvailable: true,
        tags: ['영상제작', '마케팅', '소셜미디어', '리뷰', '쇼츠']
    },
    {
        id: '6',
        name: '게임 음악 작곡가 한승우',
        category: 'content-creation',
        description: '게임 사운드트랙과 효과음 제작을 전문으로 하는 작곡가입니다. 다양한 장르의 게임 음악을 작곡하며 몰입감 있는 사운드를 만들어냅니다.',
        profileImage: '/creators/composer1.jpg',
        specialties: ['게임 사운드트랙', '효과음 제작', '앰비언트 음악', '인터랙티브 오디오'],
        socialLinks: {
            youtube: 'https://youtube.com/@musichan',
            spotify: 'https://spotify.com/artist/musichan',
            website: 'https://hanmusic.com'
        },
        achievements: [
            '인디게임 음악 공모전 대상 수상',
            '게임 사운드트랙 앨범 차트 10위 진입',
            '국제 게임 오디오 어워드 노미네이트'
        ],
        collaborationHistory: [
            '호러 게임 "다크 포레스트" 사운드트랙',
            '퍼즐 게임 "젠 가든" 앰비언트 음악',
            'RPG "파이어 소드" 전투 음악'
        ],
        isAvailable: true,
        tags: ['음악', '사운드트랙', '효과음', 'RPG', '호러']
    },
    {
        id: '7',
        name: '3D 모델러 김태현',
        category: 'illustration',
        description: '게임 캐릭터와 환경 3D 모델링을 전문으로 하는 아티스트입니다. 로우폴리부터 하이폴리까지 다양한 스타일의 모델링이 가능합니다.',
        profileImage: '/creators/modeler1.jpg',
        specialties: ['캐릭터 모델링', '환경 모델링', '텍스처링', '리깅'],
        socialLinks: {
            instagram: 'https://instagram.com/3dkim',
            artstation: 'https://artstation.com/3dkim',
            website: 'https://kimtaehyun3d.com'
        },
        achievements: [
            '3D 모델링 공모전 최우수상',
            '게임 개발 컨퍼런스 포트폴리오 전시',
            'AAA 게임 외주 프로젝트 20편 참여'
        ],
        collaborationHistory: [
            '액션 게임 "워리어즈" 캐릭터 모델링',
            '시뮬레이션 게임 "시티 빌더" 건물 모델링',
            'VR 게임 "스페이스 익스플로러" 환경 제작'
        ],
        isAvailable: true,
        tags: ['3D모델링', '캐릭터', '환경', 'VR', '시뮬레이션']
    },
    {
        id: '8',
        name: '게임 번역가 이미영',
        category: 'content-creation',
        description: '게임 현지화와 번역을 전문으로 하는 번역가입니다. 영어, 일본어, 중국어 게임의 한국어 번역과 한국 게임의 해외 진출을 지원합니다.',
        profileImage: '/creators/translator1.jpg',
        specialties: ['게임 번역', '현지화', '문화 적응', '품질 관리'],
        socialLinks: {
            twitter: 'https://twitter.com/gametranslator',
            website: 'https://leetrans.com'
        },
        achievements: [
            '게임 번역 품질 어워드 수상',
            '대형 RPG 번역 프로젝트 리드',
            '게임 현지화 컨퍼런스 연사'
        ],
        collaborationHistory: [
            'JRPG "드래곤 퀘스트" 한국어 번역',
            '인디 게임 "문 라이트" 영어 번역',
            '모바일 게임 "킹덤 워" 다국어 번역'
        ],
        isAvailable: true,
        tags: ['번역', '현지화', 'JRPG', '모바일', '다국어']
    },
    {
        id: '9',
        name: 'e스포츠 해설가 박준호',
        category: 'streaming',
        description: '게임 대회 해설과 분석을 전문으로 하는 e스포츠 해설가입니다. 다양한 게임 장르의 전문적인 해설과 게임 분석 콘텐츠를 제공합니다.',
        profileImage: '/creators/caster1.jpg',
        specialties: ['게임 해설', 'e스포츠 분석', '대회 진행', '게임 이론'],
        socialLinks: {
            youtube: 'https://youtube.com/@esportspark',
            twitch: 'https://twitch.tv/esportspark',
            twitter: 'https://twitter.com/esportspark'
        },
        achievements: [
            '국내 주요 e스포츠 대회 해설 50회',
            '게임 분석 영상 누적 조회수 300만',
            'e스포츠 해설가 어워드 베스트 캐스터'
        ],
        collaborationHistory: [
            'FPS 게임 "택티컬 슈터" 대회 해설',
            'MOBA 게임 "레전드 배틀" 시즌 분석',
            '배틀로얄 게임 "서바이벌 존" 토너먼트 진행'
        ],
        isAvailable: true,
        tags: ['e스포츠', '해설', 'FPS', 'MOBA', '배틀로얄']
    },
    {
        id: '10',
        name: '게임 QA 테스터 최지훈',
        category: 'content-creation',
        description: '게임 품질 보증과 버그 테스팅을 전문으로 하는 QA 테스터입니다. 체계적인 테스팅 프로세스로 게임의 품질 향상에 기여합니다.',
        profileImage: '/creators/qa1.jpg',
        specialties: ['버그 테스팅', '품질 보증', '플레이어빌리티 평가', '테스트 케이스 작성'],
        socialLinks: {
            twitter: 'https://twitter.com/gameqa',
            website: 'https://choiqa.com'
        },
        achievements: [
            'AAA 게임 QA 프로젝트 30편 참여',
            '크리티컬 버그 발견률 업계 상위 5%',
            '게임 품질 개선 제안 채택률 90%'
        ],
        collaborationHistory: [
            'RPG "에픽 퀘스트" 출시 전 QA',
            '모바일 게임 "퍼즐 마스터" 베타 테스트',
            'VR 게임 "가상 세계" 사용성 테스트'
        ],
        isAvailable: true,
        tags: ['QA', '테스팅', '품질보증', 'RPG', 'VR']
    },
    {
        id: '11',
        name: '게임 마케터 서연주',
        category: 'marketing',
        description: '게임 마케팅 전략 수립과 실행을 전문으로 하는 마케터입니다. 데이터 기반의 마케팅으로 게임의 성공적인 런칭을 지원합니다.',
        profileImage: '/creators/marketer1.jpg',
        specialties: ['디지털 마케팅', '소셜미디어 전략', '인플루언서 마케팅', '데이터 분석'],
        socialLinks: {
            twitter: 'https://twitter.com/gamemarketer',
            instagram: 'https://instagram.com/gamemarketer',
            website: 'https://seoyeonju.com'
        },
        achievements: [
            '게임 마케팅 캠페인 ROI 평균 300%',
            '소셜미디어 팔로워 증가율 업계 1위',
            '마케팅 어워드 디지털 부문 대상'
        ],
        collaborationHistory: [
            '액션 게임 "헤로즈" 글로벌 마케팅',
            '퍼즐 게임 "브레인 워" SNS 마케팅',
            '인디 게임 "아트 월드" 크라우드펀딩 마케팅'
        ],
        isAvailable: false,
        tags: ['마케팅', '소셜미디어', '글로벌', '데이터분석', '크라우드펀딩']
    },
    {
        id: '12',
        name: '게임 UI/UX 디자이너 윤소희',
        category: 'illustration',
        description: '게임 인터페이스 디자인과 사용자 경험 설계를 전문으로 하는 디자이너입니다. 직관적이고 아름다운 게임 UI를 만듭니다.',
        profileImage: '/creators/uiux1.jpg',
        specialties: ['UI 디자인', 'UX 설계', '프로토타이핑', '사용성 테스트'],
        socialLinks: {
            behance: 'https://behance.net/yoonsohee',
            instagram: 'https://instagram.com/uiux_yoon',
            website: 'https://yoonsohee.com'
        },
        achievements: [
            'UI/UX 디자인 공모전 금상',
            '모바일 게임 UI 디자인 특허 등록',
            '게임 인터페이스 디자인 가이드북 출간'
        ],
        collaborationHistory: [
            'RPG "판타지 월드" UI 전체 디자인',
            '퍼즐 게임 "컬러 매치" 인터페이스 설계',
            '시뮬레이션 게임 "팜 라이프" UX 개선'
        ],
        isAvailable: true,
        tags: ['UI디자인', 'UX설계', '모바일', '프로토타이핑', '사용성']
    }
];

export const creatorCategories: { value: CreatorCategory; label: string; description: string }[] = [
    {
        value: 'streaming',
        label: '스트리밍 협업',
        description: '인디 게임 빌드 제공, 방송 자료, 게임 QA 등'
    },
    {
        value: 'illustration',
        label: '일러스트',
        description: '팬아트, 프로모션 일러스트, 썸네일 등'
    },
    {
        value: 'voice-acting',
        label: '성우',
        description: '캐릭터 더빙, 나레이션, 트레일러 보이스오버'
    },
    {
        value: 'event-coordination',
        label: '행사 연계',
        description: '국내외 게임 행사와의 크리에이터 협업'
    },
    {
        value: 'content-creation',
        label: '콘텐츠 제작',
        description: '영상 제작, 소셜미디어 마케팅, 리뷰 콘텐츠'
    },
    {
        value: 'marketing',
        label: '마케팅',
        description: '게임 홍보, 브랜딩, 커뮤니티 관리'
    }
];
