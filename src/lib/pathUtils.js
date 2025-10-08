/**
 * GitHub Pages 배포 시 basePath를 고려한 경로 처리 유틸리티
 * Next.js의 basePath 설정을 활용하여 자동으로 처리됩니다.
 */

/**
 * basePath를 포함한 경로를 생성합니다.
 * Next.js가 자동으로 basePath를 처리하므로 단순히 경로만 반환합니다.
 * @param {string} path - 경로 (예: '/creators', '/participate')
 * @returns {string} 경로
 */
export function createPath(path) {
    return path;
}

/**
 * 현재 경로가 활성 경로인지 확인합니다.
 * @param {string} currentPath - 현재 경로
 * @param {string} targetPath - 확인할 경로
 * @returns {boolean} 활성 상태 여부
 */
export function isActivePath(currentPath, targetPath) {
    // 홈페이지의 경우 정확히 일치해야 함
    if (targetPath === '/') {
        return currentPath === targetPath || currentPath.endsWith('/');
    }
    
    // 다른 페이지의 경우 경로가 시작하는지 확인
    return currentPath.startsWith(targetPath);
}

/**
 * basePath를 반환합니다.
 * GitHub Pages 환경에서는 '/HGECreatorWeb'을, 로컬에서는 ''을 반환합니다.
 * @returns {string} basePath
 */
function getBasePath() {
    // 클라이언트 사이드에서만 실행
    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        // GitHub Pages에서 실행 중인 경우
        if (hostname.includes('github.io')) {
            return '/HGECreatorWeb';
        }
    }
    // SSR이거나 로컬 환경인 경우
    return process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_BASE_PATH 
        ? process.env.NEXT_PUBLIC_BASE_PATH 
        : '';
}

/**
 * CSV 파일 경로를 생성합니다.
 * @param {string} filename - CSV 파일명
 * @param {string} language - 언어 코드 ('ko', 'en', 'jp')
 * @returns {string} CSV 파일의 전체 경로
 */
export function getCsvPath(filename, language = 'ko') {
    const basePath = getBasePath();
    
    if (language === 'ko') {
        return `${basePath}/data/${filename}`;
    }
    return `${basePath}/data/${language}/${filename}`;
}

/**
 * 이미지 파일 경로를 생성합니다.
 * @param {string} imagePath - 이미지 경로
 * @returns {string} 이미지 경로
 */
export function getImagePath(imagePath) {
    const basePath = getBasePath();
    return `${basePath}${imagePath}`;
}