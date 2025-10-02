import { SiteContent } from '@/types/content';

export const mockSiteContent: SiteContent = {
    hero: {
        title: "한국 게임 크리에이터 생태계",
        subtitle: "HGE Creator Network",
        description: "인디 게임 개발자와 크리에이터를 연결하는 플랫폼입니다. 함께 성장하고 더 나은 게임 문화를 만들어가세요.",
        primaryButtonText: "크리에이터 찾기",
        primaryButtonLink: "/creators",
        secondaryButtonText: "협업 제안하기",
        secondaryButtonLink: "/collaboration"
    },
    coreValues: {
        title: "우리의 가치",
        subtitle: "HGE Creator가 추구하는 핵심 가치들",
        values: [
            {
                title: "상호 성장",
                description: "개발자와 크리에이터가 함께 성장할 수 있는 환경을 만듭니다",
                icon: "🌱"
            },
            {
                title: "창의적 협업",
                description: "다양한 분야의 전문가들이 창의적으로 협업할 수 있도록 지원합니다",
                icon: "🎨"
            },
            {
                title: "투명한 소통",
                description: "명확하고 투명한 소통을 통해 신뢰할 수 있는 관계를 구축합니다",
                icon: "💬"
            },
            {
                title: "지속가능한 생태계",
                description: "장기적으로 지속가능한 게임 크리에이터 생태계를 구축합니다",
                icon: "🌍"
            }
        ]
    },
    statistics: {
        creators: {
            value: "150+",
            label: "등록된 크리에이터"
        },
        projects: {
            value: "80+",
            label: "성공한 협업 프로젝트"
        },
        companies: {
            value: "45+",
            label: "파트너 게임 회사"
        }
    },
    categories: {
        title: "다양한 분야의 크리에이터",
        subtitle: "게임 개발에 필요한 모든 분야의 전문가들을 만나보세요",
        linkText: "모든 크리에이터 보기"
    },
    cta: {
        title: "지금 시작해보세요",
        description: "HGE Creator와 함께 더 나은 게임을 만들어보세요. 새로운 협업 기회가 기다리고 있습니다.",
        primaryButtonText: "협업 시작하기",
        primaryButtonLink: "/collaboration",
        secondaryButtonText: "크리에이터 등록",
        secondaryButtonLink: "/participate"
    },
    siteInfo: {
        siteName: "HGE Creator",
        siteDescription: "한국 게임 크리에이터 생태계 플랫폼",
        logoText: "HGE Creator",
        contactEmail: "contact@hgecreator.com",
        contactPhone: "02-1234-5678",
        address: "서울시 강남구 테헤란로 123, 게임타워 10층",
        businessHours: "평일 09:00 - 18:00"
    },
    navigation: {
        items: [
            { name: "홈", href: "/", order: 1 },
            { name: "크리에이터", href: "/creators", order: 2 },
            { name: "협업 방법", href: "/collaboration", order: 3 },
            { name: "성공 사례", href: "/success-stories", order: 4 },
            { name: "참여하기", href: "/participate", order: 5 }
        ]
    },
    footer: {
        description: "HGE Creator는 한국 게임 산업의 발전을 위해 개발자와 크리에이터를 연결하는 플랫폼입니다.",
        quickLinks: [
            { name: "크리에이터 찾기", href: "/creators" },
            { name: "협업 제안", href: "/collaboration" },
            { name: "성공 사례", href: "/success-stories" },
            { name: "참여 방법", href: "/participate" }
        ],
        socialLinks: [
            { platform: "YouTube", url: "https://youtube.com/@hgecreator", icon: "📺" },
            { platform: "Twitter", url: "https://twitter.com/hgecreator", icon: "🐦" },
            { platform: "Discord", url: "https://discord.gg/hgecreator", icon: "💬" },
            { platform: "Instagram", url: "https://instagram.com/hgecreator", icon: "📷" }
        ],
        copyright: "© 2024 HGE Creator. All rights reserved.",
        legalLinks: [
            { name: "이용약관", href: "/terms" },
            { name: "개인정보처리방침", href: "/privacy" }
        ]
    },
    pages: {
        collaboration: {
            hero: {
                title: "협업하는 방법",
                subtitle: "HGE Creator와 함께 성공적인 게임 프로젝트를 만들어보세요"
            },
            process: {
                title: "협업 프로세스",
                subtitle: "간단하고 체계적인 4단계 협업 과정",
                steps: [
                    {
                        step: 1,
                        title: "크리에이터 탐색",
                        description: "프로젝트에 적합한 크리에이터를 찾아보세요",
                        details: [
                            "카테고리별 크리에이터 검색",
                            "포트폴리오 및 경력 확인",
                            "이전 협업 사례 검토",
                            "평점 및 리뷰 확인"
                        ]
                    },
                    {
                        step: 2,
                        title: "협업 제안",
                        description: "원하는 크리에이터에게 협업을 제안하세요",
                        details: [
                            "프로젝트 상세 정보 작성",
                            "예산 및 일정 협의",
                            "협업 범위 명시",
                            "계약 조건 협상"
                        ]
                    },
                    {
                        step: 3,
                        title: "프로젝트 진행",
                        description: "체계적인 관리 시스템으로 프로젝트를 진행하세요",
                        details: [
                            "실시간 진행 상황 추적",
                            "중간 검토 및 피드백",
                            "일정 관리 및 조정",
                            "품질 관리 지원"
                        ]
                    },
                    {
                        step: 4,
                        title: "완료 및 평가",
                        description: "프로젝트 완료 후 결과를 평가하고 정산하세요",
                        details: [
                            "최종 결과물 검토",
                            "상호 평가 및 리뷰",
                            "정산 및 결제 처리",
                            "향후 협업 계획"
                        ]
                    }
                ]
            },
            benefits: {
                title: "협업의 장점",
                subtitle: "HGE Creator를 통한 협업이 특별한 이유",
                items: [
                    {
                        title: "검증된 크리에이터",
                        description: "엄격한 심사를 통과한 전문 크리에이터들과 협업하세요",
                        icon: "✅"
                    },
                    {
                        title: "체계적인 관리",
                        description: "프로젝트 관리 도구와 전담 매니저가 협업을 지원합니다",
                        icon: "📋"
                    },
                    {
                        title: "투명한 정산",
                        description: "명확한 계약과 투명한 정산 시스템으로 안전하게 거래하세요",
                        icon: "💰"
                    },
                    {
                        title: "지속적인 지원",
                        description: "협업 전 과정에서 전문 컨설턴트가 지원합니다",
                        icon: "🤝"
                    }
                ]
            },
            cta: {
                title: "지금 협업을 시작해보세요",
                description: "프로젝트에 적합한 크리에이터를 찾고 성공적인 협업을 시작하세요",
                buttonText: "크리에이터 찾기",
                buttonLink: "/creators"
            }
        },
        successStories: {
            hero: {
                title: "성공 사례",
                subtitle: "HGE Creator를 통해 성공한 다양한 협업 프로젝트들을 만나보세요"
            },
            statistics: {
                title: "협업 성과",
                subtitle: "숫자로 보는 HGE Creator의 성과",
                stats: [
                    {
                        label: "평균 프로젝트 성공률",
                        value: "94%",
                        description: "대부분의 프로젝트가 성공적으로 완료됩니다"
                    },
                    {
                        label: "평균 만족도",
                        value: "4.8/5",
                        description: "높은 고객 만족도를 자랑합니다"
                    },
                    {
                        label: "재협업률",
                        value: "87%",
                        description: "한번 협업한 파트너들이 다시 찾습니다"
                    }
                ]
            },
            stories: {
                title: "대표 성공 사례",
                subtitle: "실제 협업을 통해 탄생한 성공적인 프로젝트들"
            },
            cta: {
                title: "다음 성공 사례의 주인공이 되세요",
                description: "HGE Creator와 함께 여러분만의 성공 스토리를 만들어보세요",
                buttonText: "협업 시작하기",
                buttonLink: "/collaboration"
            }
        },
        participate: {
            hero: {
                title: "크리에이터로 참여하기",
                subtitle: "HGE Creator 네트워크에 참여하여 다양한 게임 프로젝트와 협업하세요"
            },
            participationTypes: {
                title: "참여 유형",
                subtitle: "다양한 방식으로 HGE Creator 생태계에 참여할 수 있습니다",
                types: [
                    {
                        title: "개인 크리에이터",
                        description: "개인 활동을 하는 크리에이터로 참여",
                        features: [
                            "개인 포트폴리오 등록",
                            "직접적인 협업 기회",
                            "자유로운 일정 관리",
                            "개인 브랜딩 지원"
                        ],
                        icon: "👤"
                    },
                    {
                        title: "크리에이터 그룹",
                        description: "팀 또는 그룹으로 활동하는 크리에이터",
                        features: [
                            "팀 포트폴리오 관리",
                            "대규모 프로젝트 참여",
                            "역할 분담 및 협업",
                            "그룹 브랜딩 지원"
                        ],
                        icon: "👥"
                    },
                    {
                        title: "전문 에이전시",
                        description: "크리에이터를 관리하는 전문 에이전시",
                        features: [
                            "다수 크리에이터 관리",
                            "전문적인 매니지먼트",
                            "대형 프로젝트 수주",
                            "비즈니스 파트너십"
                        ],
                        icon: "🏢"
                    }
                ]
            },
            requirements: {
                title: "참여 요건",
                subtitle: "분야별 참여 요건을 확인해보세요",
                categories: [
                    {
                        category: "스트리머/콘텐츠 크리에이터",
                        items: [
                            "게임 관련 콘텐츠 제작 경험 6개월 이상",
                            "월 평균 조회수 10만 이상 또는 구독자 1천명 이상",
                            "정기적인 콘텐츠 업로드 이력",
                            "게임에 대한 전문적인 이해도"
                        ]
                    },
                    {
                        category: "일러스트레이터/디자이너",
                        items: [
                            "게임 관련 일러스트 포트폴리오 10점 이상",
                            "상업적 프로젝트 참여 경험",
                            "다양한 스타일의 작업 가능",
                            "클라이언트와의 협업 경험"
                        ]
                    },
                    {
                        category: "성우/보이스 액터",
                        items: [
                            "성우 또는 보이스 액팅 경력 1년 이상",
                            "게임 캐릭터 더빙 경험",
                            "다양한 연령대 및 캐릭터 연기 가능",
                            "전문 녹음 장비 보유"
                        ]
                    },
                    {
                        category: "이벤트/마케팅 전문가",
                        items: [
                            "게임 관련 이벤트 기획 경험 3회 이상",
                            "마케팅 캠페인 성공 사례",
                            "온오프라인 이벤트 운영 경험",
                            "게임 업계 네트워크 보유"
                        ]
                    }
                ]
            },
            process: {
                title: "참여 과정",
                subtitle: "간단한 4단계로 HGE Creator에 참여하세요",
                steps: [
                    {
                        step: 1,
                        title: "지원서 작성",
                        description: "온라인 지원서를 작성하고 포트폴리오를 업로드하세요"
                    },
                    {
                        step: 2,
                        title: "심사 및 검토",
                        description: "전문가 심사위원이 지원서와 포트폴리오를 검토합니다"
                    },
                    {
                        step: 3,
                        title: "인터뷰",
                        description: "온라인 또는 오프라인 인터뷰를 통해 최종 평가를 진행합니다"
                    },
                    {
                        step: 4,
                        title: "등록 완료",
                        description: "승인 후 HGE Creator 네트워크에 정식 등록됩니다"
                    }
                ]
            },
            form: {
                title: "지원하기",
                subtitle: "아래 양식을 작성하여 HGE Creator에 지원해보세요"
            },
            faq: {
                title: "자주 묻는 질문",
                items: [
                    {
                        question: "참여비용이 있나요?",
                        answer: "HGE Creator 참여는 완전 무료입니다. 별도의 참여비용이나 수수료는 없습니다."
                    },
                    {
                        question: "심사 기간은 얼마나 걸리나요?",
                        answer: "일반적으로 지원서 제출 후 1-2주 내에 심사 결과를 안내해드립니다."
                    },
                    {
                        question: "해외 거주자도 참여할 수 있나요?",
                        answer: "네, 한국어로 소통이 가능하고 한국 게임 시장에 관심이 있다면 해외 거주자도 참여 가능합니다."
                    },
                    {
                        question: "협업 프로젝트는 어떻게 배정되나요?",
                        answer: "크리에이터의 전문 분야, 경험, 가용 시간 등을 고려하여 적합한 프로젝트를 매칭해드립니다."
                    },
                    {
                        question: "수익 배분은 어떻게 이루어지나요?",
                        answer: "프로젝트별로 사전에 협의된 조건에 따라 투명하게 정산됩니다. 플랫폼 수수료는 최소화하고 있습니다."
                    }
                ]
            },
            contact: {
                title: "문의하기",
                subtitle: "궁금한 점이 있으시면 언제든 연락해주세요"
            }
        }
    }
};
