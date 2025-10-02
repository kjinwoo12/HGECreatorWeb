import { mockSiteContent } from '@/data/siteContent';

class ContentService {
    async getSiteContent() {
        // 로컬 목 데이터만 사용
        return mockSiteContent;
    }
}

// 싱글톤 인스턴스
export const contentService = new ContentService();

// 편의 함수들
export async function getSiteContent() {
    return await contentService.getSiteContent();
}

export function clearContentCache() {
    // 캐시 기능 제거됨
}