import { SiteContent } from '@/types/content';
import { mockSiteContent } from '@/data/siteContent';

// 구글 시트 설정 (콘텐츠 관리용)
const CONTENT_SPREADSHEET_ID = process.env.NEXT_PUBLIC_CONTENT_SHEETS_SPREADSHEET_ID;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

interface GoogleSheetsContentResponse {
    values: string[][];
}

class ContentService {
    private baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
    private contentSheetRange = 'Content!A:D'; // 콘텐츠 시트 범위
    private settingsSheetRange = 'Settings!A:D'; // 설정 시트 범위

    constructor() {
        if (!CONTENT_SPREADSHEET_ID || !API_KEY) {
            console.warn('콘텐츠 관리 시트가 설정되지 않았습니다.');
        }
    }

    async getSiteContent(): Promise<SiteContent> {
        if (!CONTENT_SPREADSHEET_ID || !API_KEY) {
            console.warn('콘텐츠 시트가 설정되지 않았습니다. 목 데이터를 사용합니다.');
            return mockSiteContent;
        }

        try {
            // 콘텐츠 시트와 설정 시트를 병렬로 가져오기
            const [contentData, settingsData] = await Promise.all([
                this.fetchSheetData(this.contentSheetRange),
                this.fetchSheetData(this.settingsSheetRange)
            ]);

            // 데이터 파싱 및 병합
            const parsedContent = this.parseContentData(contentData);
            const parsedSettings = this.parseSettingsData(settingsData);

            return this.mergeContentData(parsedContent, parsedSettings);
        } catch (error) {
            console.error('콘텐츠 데이터 로드 실패:', error);
            return mockSiteContent;
        }
    }

    private async fetchSheetData(range: string): Promise<string[][]> {
        const url = `${this.baseUrl}/${CONTENT_SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: GoogleSheetsContentResponse = await response.json();
        return data.values || [];
    }

    private parseContentData(rows: string[][]): Partial<SiteContent> {
        const content: any = {};

        // 첫 번째 행은 헤더이므로 제외
        rows.slice(1).forEach(row => {
            const [section, key, value, type] = row;
            if (!section || !key || value === undefined) return;

            // 중첩 객체 구조 생성
            const keys = key.split('.');
            let current = content;

            for (let i = 0; i < keys.length - 1; i++) {
                if (!current[keys[i]]) {
                    current[keys[i]] = {};
                }
                current = current[keys[i]];
            }

            // 값 타입에 따른 변환
            const finalKey = keys[keys.length - 1];
            current[finalKey] = this.convertValue(value, type);
        });

        return content;
    }

    private parseSettingsData(rows: string[][]): any {
        const settings: any = {};

        rows.slice(1).forEach(row => {
            const [key, value, type] = row;
            if (!key || value === undefined) return;

            settings[key] = this.convertValue(value, type);
        });

        return settings;
    }

    private convertValue(value: string, type?: string): any {
        if (!value) return '';

        switch (type?.toLowerCase()) {
            case 'number':
                return Number(value);
            case 'boolean':
                return value.toLowerCase() === 'true';
            case 'json':
                try {
                    return JSON.parse(value);
                } catch {
                    return value;
                }
            case 'array':
                return value.split(',').map(item => item.trim());
            default:
                return value;
        }
    }

    private mergeContentData(content: Partial<SiteContent>, settings: any): SiteContent {
        // 목 데이터와 시트 데이터 병합
        return this.deepMerge(mockSiteContent, content) as SiteContent;
    }

    private deepMerge(target: any, source: any): any {
        const result = { ...target };

        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                result[key] = this.deepMerge(result[key] || {}, source[key]);
            } else {
                result[key] = source[key];
            }
        }

        return result;
    }

    private getDefaultContent(): SiteContent {
        return {
            hero: {
                title: "인디 게임과 크리에이터를 연결",
                subtitle: "인디 게임과",
                description: "260명의 다양한 크리에이터와 함께하는 인디 게임 생태계의 새로운 시작. 스트리밍, 일러스트, 성우, 이벤트까지 모든 분야의 전문가들이 여러분을 기다립니다.",
                primaryButtonText: "크리에이터 둘러보기",
                primaryButtonLink: "/creators",
                secondaryButtonText: "협업 시작하기",
                secondaryButtonLink: "/participate"
            },
            coreValues: {
                title: "인디 게임과 크리에이터의 완벽한 만남",
                subtitle: "HGE Creator는 인디 게임 개발자와 다양한 분야의 크리에이터를 연결하여 게임 업계의 새로운 가능성을 열어갑니다.",
                values: [
                    {
                        title: "다양한 크리에이터",
                        description: "스트리밍, 일러스트, 성우, 이벤트 기획 등 260명의 전문 크리에이터가 함께합니다.",
                        icon: "👥"
                    },
                    {
                        title: "빠른 매칭",
                        description: "게임의 특성과 필요에 맞는 크리에이터를 신속하게 매칭해드립니다.",
                        icon: "⚡"
                    },
                    {
                        title: "검증된 품질",
                        description: "모든 크리에이터는 엄격한 심사를 통과한 검증된 전문가들입니다.",
                        icon: "✅"
                    }
                ]
            },
            statistics: {
                creators: { value: "260+", label: "등록된 크리에이터" },
                projects: { value: "150+", label: "성공한 협업 프로젝트" },
                companies: { value: "50+", label: "파트너 게임 회사" }
            },
            categories: {
                title: "크리에이터 카테고리",
                subtitle: "다양한 분야의 전문 크리에이터들이 여러분의 게임을 빛내드립니다.",
                linkText: "자세히 보기 →"
            },
            cta: {
                title: "지금 시작하세요",
                description: "여러분의 게임에 완벽한 크리에이터를 찾아보세요. 새로운 성공 스토리를 함께 만들어갑니다.",
                primaryButtonText: "크리에이터 찾기",
                primaryButtonLink: "/creators",
                secondaryButtonText: "협업 신청하기",
                secondaryButtonLink: "/participate"
            },
            siteInfo: {
                siteName: "HGE Creator",
                siteDescription: "인디 게임과 크리에이터를 연결하는 플랫폼",
                logoText: "HGE Creator",
                contactEmail: "contact@hgecreator.com",
                contactPhone: "02-1234-5678",
                address: "서울시 강남구 테헤란로 123",
                businessHours: "평일 09:00 - 18:00"
            },
            navigation: {
                items: [
                    { name: "홈", href: "/", order: 1 },
                    { name: "크리에이터", href: "/creators", order: 2 },
                    { name: "협업 프로세스", href: "/collaboration", order: 3 },
                    { name: "성공 사례", href: "/success-stories", order: 4 },
                    { name: "참여 방법", href: "/participate", order: 5 }
                ]
            },
            footer: {
                description: "인디 게임 개발자와 260명의 다양한 크리에이터를 연결하여 게임 업계의 성장과 발전에 기여합니다.",
                quickLinks: [
                    { name: "크리에이터", href: "/creators" },
                    { name: "협업 프로세스", href: "/collaboration" },
                    { name: "성공 사례", href: "/success-stories" },
                    { name: "참여 방법", href: "/participate" }
                ],
                socialLinks: [
                    { platform: "Facebook", url: "#", icon: "facebook" },
                    { platform: "Twitter", url: "#", icon: "twitter" },
                    { platform: "YouTube", url: "#", icon: "youtube" }
                ],
                copyright: "© 2024 HGE Creator. All rights reserved.",
                legalLinks: [
                    { name: "개인정보처리방침", href: "#" },
                    { name: "이용약관", href: "#" }
                ]
            },
            pages: {
                collaboration: {
                    hero: {
                        title: "협업 프로세스",
                        subtitle: "체계적이고 전문적인 협업 프로세스로 성공적인 게임 홍보를 지원합니다."
                    },
                    process: {
                        title: "5단계 협업 프로세스",
                        subtitle: "간단한 등록부터 성과 분석까지, 모든 과정을 체계적으로 관리합니다.",
                        steps: [
                            {
                                step: 1,
                                title: "프로젝트 등록",
                                description: "게임 정보와 필요한 크리에이터 유형을 등록해주세요.",
                                details: [
                                    "게임 장르, 타겟 오디언스, 출시 일정 등 기본 정보 제공",
                                    "필요한 협업 유형 선택 (스트리밍, 일러스트, 성우, 이벤트 등)",
                                    "예산 범위와 협업 기간 설정"
                                ]
                            }
                        ]
                    },
                    benefits: {
                        title: "협업 혜택",
                        subtitle: "HGE Creator와의 협업으로 얻을 수 있는 다양한 혜택들입니다.",
                        items: [
                            {
                                title: "서브컬처 게임 강화",
                                description: "전문 크리에이터와의 협업을 통해 게임의 서브컬처적 매력을 극대화합니다.",
                                icon: "🎮"
                            }
                        ]
                    },
                    cta: {
                        title: "지금 바로 협업을 시작하세요",
                        description: "전문적인 협업 프로세스로 여러분의 게임을 성공으로 이끌어드리겠습니다.",
                        buttonText: "협업 신청하기",
                        buttonLink: "/participate"
                    }
                },
                successStories: {
                    hero: {
                        title: "성공 사례",
                        subtitle: "HGE Creator와 함께한 게임들의 놀라운 성공 스토리를 확인해보세요."
                    },
                    statistics: {
                        title: "협업 성과",
                        subtitle: "숫자로 보는 HGE Creator의 협업 성과입니다.",
                        stats: [
                            { label: "총 협업 프로젝트", value: "150+", description: "성공적으로 완료된 협업 프로젝트" },
                            { label: "평균 성과 향상", value: "300%", description: "협업 전 대비 평균 다운로드 증가율" },
                            { label: "고객 만족도", value: "98%", description: "협업 완료 후 고객 만족도 조사 결과" },
                            { label: "재협업률", value: "85%", description: "한 번 협업한 게임사의 재협업 비율" }
                        ]
                    },
                    stories: {
                        title: "주요 성공 사례",
                        subtitle: "다양한 장르의 게임들이 어떻게 성공을 이뤄냈는지 살펴보세요."
                    },
                    cta: {
                        title: "다음 성공 사례의 주인공이 되어보세요",
                        description: "여러분의 게임도 이런 성공을 거둘 수 있습니다. 지금 바로 시작하세요.",
                        buttonText: "협업 신청하기",
                        buttonLink: "/participate"
                    }
                },
                participate: {
                    hero: {
                        title: "협업 참여하기",
                        subtitle: "HGE Creator와 함께 게임 업계의 새로운 성공 스토리를 만들어가세요."
                    },
                    participationTypes: {
                        title: "참여 대상",
                        subtitle: "다양한 형태의 협업 파트너를 찾고 있습니다.",
                        types: [
                            {
                                title: "게임 개발사",
                                description: "인디 게임을 개발하는 회사나 개인 개발자",
                                features: [
                                    "크리에이터 매칭 서비스",
                                    "협업 프로세스 관리",
                                    "마케팅 전략 수립",
                                    "성과 분석 및 보고"
                                ],
                                icon: "🎮"
                            },
                            {
                                title: "크리에이터",
                                description: "다양한 분야의 콘텐츠 크리에이터",
                                features: [
                                    "게임 협업 기회 제공",
                                    "정당한 보상 보장",
                                    "포트폴리오 관리",
                                    "전문성 개발 지원"
                                ],
                                icon: "🎨"
                            }
                        ]
                    },
                    requirements: {
                        title: "참여 요건",
                        subtitle: "성공적인 협업을 위한 기본 요건들입니다.",
                        categories: [
                            {
                                category: "게임 개발사",
                                items: [
                                    "개발 중이거나 출시 예정인 게임 보유",
                                    "협업에 대한 명확한 목표와 예산",
                                    "크리에이터와의 소통 의지",
                                    "게임 관련 자료 제공 가능"
                                ]
                            },
                            {
                                category: "크리에이터",
                                items: [
                                    "해당 분야 1년 이상 경력",
                                    "포트폴리오 또는 활동 실적",
                                    "정기적인 콘텐츠 제작 능력",
                                    "게임에 대한 관심과 이해"
                                ]
                            }
                        ]
                    },
                    process: {
                        title: "참여 프로세스",
                        subtitle: "간단한 4단계로 협업을 시작할 수 있습니다.",
                        steps: [
                            { step: 1, title: "신청서 제출", description: "아래 양식을 통해 협업 신청서를 제출해주세요." },
                            { step: 2, title: "검토 및 상담", description: "2-3일 내에 전담 매니저가 연락드려 상세 상담을 진행합니다." },
                            { step: 3, title: "매칭 및 협의", description: "적합한 크리에이터를 매칭하고 협업 조건을 협의합니다." },
                            { step: 4, title: "협업 시작", description: "계약 체결 후 본격적인 협업을 시작합니다." }
                        ]
                    },
                    form: {
                        title: "협업 신청",
                        subtitle: "아래 양식을 작성하여 협업을 신청해주세요. 2-3일 내에 전담 매니저가 연락드리겠습니다."
                    },
                    faq: {
                        title: "자주 묻는 질문",
                        items: [
                            {
                                question: "협업 비용은 어떻게 결정되나요?",
                                answer: "프로젝트 규모, 협업 유형, 기간 등을 종합적으로 고려하여 결정됩니다. 상담을 통해 예산에 맞는 최적의 방안을 제안해드립니다."
                            },
                            {
                                question: "협업 기간은 얼마나 걸리나요?",
                                answer: "협업 유형에 따라 다르지만, 일반적으로 2주~3개월 정도 소요됩니다. 프로젝트 특성에 맞는 일정을 협의하여 진행합니다."
                            }
                        ]
                    },
                    contact: {
                        title: "더 궁금한 점이 있으신가요?",
                        subtitle: "언제든 연락주세요. 전문 상담원이 도움을 드리겠습니다."
                    }
                }
            }
        };
    }

    // 캐싱 관련 메서드들
    async getCachedContent(): Promise<SiteContent> {
        const cacheKey = 'site-content-cache';
        const cacheTime = 5 * 60 * 1000; // 5분 캐시

        if (typeof window === 'undefined') {
            return await this.getSiteContent();
        }

        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            try {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < cacheTime) {
                    return data;
                }
            } catch (error) {
                console.error('콘텐츠 캐시 파싱 오류:', error);
            }
        }

        const content = await this.getSiteContent();

        try {
            localStorage.setItem(cacheKey, JSON.stringify({
                data: content,
                timestamp: Date.now()
            }));
        } catch (error) {
            console.error('콘텐츠 캐시 저장 오류:', error);
        }

        return content;
    }

    clearCache() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('site-content-cache');
        }
    }
}

// 싱글톤 인스턴스
export const contentService = new ContentService();

// 편의 함수들
export async function getSiteContent(): Promise<SiteContent> {
    return await contentService.getCachedContent();
}

export function clearContentCache() {
    contentService.clearCache();
}
