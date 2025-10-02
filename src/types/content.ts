// 웹사이트 콘텐츠 관리를 위한 타입 정의

export interface SiteContent {
    // 메인 페이지 콘텐츠
    hero: HeroContent;
    coreValues: CoreValuesContent;
    statistics: StatisticsContent;
    categories: CategoryContent;
    cta: CTAContent;

    // 공통 콘텐츠
    siteInfo: SiteInfoContent;
    navigation: NavigationContent;
    footer: FooterContent;

    // 페이지별 콘텐츠
    pages: {
        collaboration: CollaborationPageContent;
        successStories: SuccessStoriesPageContent;
        participate: ParticipatePageContent;
    };
}

export interface HeroContent {
    title: string;
    subtitle: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
}

export interface CoreValuesContent {
    title: string;
    subtitle: string;
    values: {
        title: string;
        description: string;
        icon: string;
    }[];
}

export interface StatisticsContent {
    creators: {
        value: string;
        label: string;
    };
    projects: {
        value: string;
        label: string;
    };
    companies: {
        value: string;
        label: string;
    };
}

export interface CategoryContent {
    title: string;
    subtitle: string;
    linkText: string;
}

export interface CTAContent {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
}

export interface SiteInfoContent {
    siteName: string;
    siteDescription: string;
    logoText: string;
    contactEmail: string;
    contactPhone: string;
    address: string;
    businessHours: string;
}

export interface NavigationContent {
    items: {
        name: string;
        href: string;
        order: number;
    }[];
}

export interface FooterContent {
    description: string;
    quickLinks: {
        name: string;
        href: string;
    }[];
    socialLinks: {
        platform: string;
        url: string;
        icon: string;
    }[];
    copyright: string;
    legalLinks: {
        name: string;
        href: string;
    }[];
}

export interface CollaborationPageContent {
    hero: {
        title: string;
        subtitle: string;
    };
    process: {
        title: string;
        subtitle: string;
        steps: {
            step: number;
            title: string;
            description: string;
            details: string[];
        }[];
    };
    benefits: {
        title: string;
        subtitle: string;
        items: {
            title: string;
            description: string;
            icon: string;
        }[];
    };
    cta: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    };
}

export interface SuccessStoriesPageContent {
    hero: {
        title: string;
        subtitle: string;
    };
    statistics: {
        title: string;
        subtitle: string;
        stats: {
            label: string;
            value: string;
            description: string;
        }[];
    };
    stories: {
        title: string;
        subtitle: string;
    };
    cta: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    };
}

export interface ParticipatePageContent {
    hero: {
        title: string;
        subtitle: string;
    };
    participationTypes: {
        title: string;
        subtitle: string;
        types: {
            title: string;
            description: string;
            features: string[];
            icon: string;
        }[];
    };
    requirements: {
        title: string;
        subtitle: string;
        categories: {
            category: string;
            items: string[];
        }[];
    };
    process: {
        title: string;
        subtitle: string;
        steps: {
            step: number;
            title: string;
            description: string;
        }[];
    };
    form: {
        title: string;
        subtitle: string;
    };
    faq: {
        title: string;
        items: {
            question: string;
            answer: string;
        }[];
    };
    contact: {
        title: string;
        subtitle: string;
    };
}

// 컨텐츠 업데이트를 위한 인터페이스
export interface ContentUpdateRequest {
    section: string;
    key: string;
    value: string | object;
    timestamp: string;
    updatedBy?: string;
}
