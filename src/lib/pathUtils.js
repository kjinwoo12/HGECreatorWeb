/**
 * 도메인 직접 연결을 위한 경로 처리 유틸리티
 * 정적 파일 경로를 올바르게 처리합니다.
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
 * 도메인 직접 연결 환경에서는 빈 문자열을 반환합니다.
 * @returns {string} basePath
 */
function getBasePath() {
    // 도메인 직접 연결 환경에서는 basePath가 필요 없음
    return '';
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