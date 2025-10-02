import { dataStore } from './dataStore';

class ContentService {
    async getSiteContent() {
        // 데이터 스토어에서 사이트 콘텐츠 가져오기
        return dataStore.getSiteContent();
    }
}

// 싱글톤 인스턴스
export const contentService = new ContentService();

// 편의 함수들
export async function getSiteContent() {
    return await contentService.getSiteContent();
}

export function clearContentCache() {
    // 데이터 스토어 기반으로 변경됨
}