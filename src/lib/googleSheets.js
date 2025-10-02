// TypeScript import removed

// 구글 시트 설정
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

// GoogleSheetsResponse interface removed

// Google Sheets 행 데이터 타입 (현재 사용하지 않지만 향후 확장 가능)
// interface GoogleSheetsCreatorRow {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   profileImage: string;
//   specialties: string;
//   youtubeLink: string;
//   twitchLink: string;
//   twitterLink: string;
//   instagramLink: string;
//   websiteLink: string;
//   achievements: string;
//   collaborationHistory: string;
//   isAvailable: string;
//   tags: string;
// }

class GoogleSheetsService {
    constructor() {
        this.baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
        this.sheetRange = 'Sheet1!A:O'; // A부터 O열까지 (15개 컬럼)
        
        if (!SPREADSHEET_ID || !API_KEY) {
            console.warn('Google Sheets 설정이 완료되지 않았습니다.');
        }
    }

    async getCreators() {
        if (!SPREADSHEET_ID || !API_KEY) {
            console.warn('Google Sheets가 설정되지 않았습니다. 로컬 데이터를 사용합니다.');
            return this.getFallbackData();
        }

        try {
            const url = `${this.baseUrl}/${SPREADSHEET_ID}/values/${this.sheetRange}?key=${API_KEY}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (!data.values || data.values.length < 2) {
                console.warn('Google Sheets에 데이터가 없습니다.');
                return this.getFallbackData();
            }

            // 첫 번째 행은 헤더이므로 제외
            const rows = data.values.slice(1);

            const creators = rows.map((row, index) => {
                return this.parseRowToCreator(row, index);
            }).filter(creator => creator.id && creator.name);

            return creators;
        } catch (error) {
            console.error('Google Sheets 데이터 로드 실패:', error);
            return this.getFallbackData();
        }
    }

    parseRowToCreator(row, index) {
        // 구글 시트의 컬럼 순서에 맞춰 파싱
        // A: ID, B: Name, C: Category, D: Description, E: ProfileImage, 
        // F: Specialties, G: YouTube, H: Twitch, I: Twitter, J: Instagram, 
        // K: Website, L: Achievements, M: CollaborationHistory, N: IsAvailable, O: Tags

        return {
            id: row[0] || `creator-${index + 1}`,
            name: row[1] || '',
            category: this.validateCategory(row[2] || ''),
            description: row[3] || '',
            profileImage: row[4] || '',
            specialties: this.parseStringArray(row[5] || ''),
            socialLinks: {
                youtube: row[6] || undefined,
                twitch: row[7] || undefined,
                twitter: row[8] || undefined,
                instagram: row[9] || undefined,
                website: row[10] || undefined,
            },
            achievements: this.parseStringArray(row[11] || '', '\n'),
            collaborationHistory: this.parseStringArray(row[12] || '', '\n'),
            isAvailable: row[13]?.toLowerCase() === 'true' || row[13]?.toLowerCase() === 'yes',
            tags: this.parseStringArray(row[14] || ''),
        };
    }

    validateCategory(category) {
        const validCategories = [
            'streaming', 'illustration', 'voice-acting',
            'event-coordination', 'content-creation', 'marketing'
        ];

        const lowerCategory = category.toLowerCase().replace(/[\s-]/g, '-');
        return validCategories.includes(lowerCategory)
            ? lowerCategory
            : 'content-creation';
    }

    parseStringArray(str, delimiter = ',') {
        if (!str) return [];
        return str.split(delimiter).map(item => item.trim()).filter(item => item);
    }

    getFallbackData() {
        // 로컬 백업 데이터를 가져옴 (동적 import 사용)
        try {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const { sampleCreators } = require('../data/creators');
            return sampleCreators;
        } catch (error) {
            console.error('로컬 백업 데이터 로드 실패:', error);
            return [];
        }
    }

    // 데이터 캐싱을 위한 메서드 (클라이언트 사이드에서만 동작)
    async getCachedCreators() {
        const cacheKey = 'creators-cache';
        const cacheTime = 5 * 60 * 1000; // 5분 캐시

        // 서버 사이드에서는 캐시 없이 바로 데이터 가져오기
        if (typeof window === 'undefined') {
            return await this.getCreators();
        }

        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            try {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < cacheTime) {
                    return data;
                }
            } catch (error) {
                console.error('캐시 데이터 파싱 오류:', error);
            }
        }

        const creators = await this.getCreators();

        try {
            localStorage.setItem(cacheKey, JSON.stringify({
                data: creators,
                timestamp: Date.now()
            }));
        } catch (error) {
            console.error('캐시 저장 오류:', error);
        }

        return creators;
    }

    // 수동으로 캐시 무효화
    clearCache() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('creators-cache');
        }
    }
}

// 싱글톤 인스턴스
export const googleSheetsService = new GoogleSheetsService();

// 편의 함수들
export async function getCreatorsFromSheets() {
    return await googleSheetsService.getCachedCreators();
}

export function clearCreatorsCache() {
    googleSheetsService.clearCache();
}
