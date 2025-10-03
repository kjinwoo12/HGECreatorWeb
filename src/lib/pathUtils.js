/**
 * GitHub Pages basePath를 고려한 경로 생성 유틸리티
 */
export function getPublicPath(path) {
  // GitHub Pages에서 basePath가 설정된 경우
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/HGECreatorWeb')) {
    return `/HGECreatorWeb${path}`;
  }
  
  // 로컬 개발 환경에서는 그대로 사용
  return path;
}

/**
 * CSV 파일 경로 생성
 */
export function getCsvPath(filename, language = 'ko') {
  const basePath = language === 'ko' ? '/data' : `/data/${language}`;
  return getPublicPath(`${basePath}/${filename}`);
}

/**
 * 이미지 파일 경로 생성
 */
export function getImagePath(path) {
  return getPublicPath(path);
}
