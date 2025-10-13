/**
 * CSV 텍스트를 JavaScript 객체 배열로 파싱
 * @param {string} csvText - CSV 파일의 텍스트 내용
 * @returns {Array} 파싱된 객체 배열
 */
export function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    
    return lines.slice(1).map((line, lineIndex) => {
        const values = parseCSVLine(line);
        const obj = {};
        
        headers.forEach((header, index) => {
            let value = values[index] || '';
            
            // 특수 처리
            if (header === 'isAvailable' || header === 'featured') {
                obj[header] = value.toLowerCase() === 'true';
            } else if (header === 'specialties' || header === 'tags' || header === 'activities') {
                obj[header] = value.split(';').map(item => item.trim()).filter(item => item);
            } else {
                obj[header] = value;
            }
        });
        
        return obj;
    });
}

/**
 * CSV 라인을 파싱 (따옴표 처리 포함)
 * @param {string} line - CSV 한 줄
 * @returns {Array} 파싱된 값들의 배열
 */
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const nextChar = line[i + 1];
        
        if (char === '"' && !inQuotes) {
            inQuotes = true;
        } else if (char === '"' && inQuotes) {
            if (nextChar === '"') {
                current += '"';
                i++; // 다음 따옴표 건너뛰기
            } else {
                inQuotes = false;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    
    result.push(current.trim());
    return result;
}

/**
 * CSV 파일을 fetch로 가져와서 파싱
 * @param {string} csvPath - CSV 파일 경로 (public 폴더 기준)
 * @returns {Promise<Array>} 파싱된 데이터 배열
 */
export async function fetchCSV(csvPath) {
    try {
        const response = await fetch(csvPath);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        
        return parsedData;
    } catch (error) {
        console.error(`CSV 파일 로드 실패 (${csvPath}):`, error);
        throw error;
    }
}
