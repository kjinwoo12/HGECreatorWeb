const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// 크리에이터 이미지 정보
const creators = [
    { id: 1, name: "잉드", driveId: "1ULD95BOnbCBlN4K6EG4EWfpRHnfmYnmO" },
    { id: 2, name: "도영", driveId: "1TY1qkp3YzGCml94klhkUJF1DDqE-GyYE" },
    { id: 3, name: "승룡_Seungryong", driveId: "1tJt_nIOz70GX6gYW7jyvXN3v7LLqSXC7" },
    { id: 4, name: "먼지", driveId: "14_36m89rNVhT1y75bPxVm3usTyBj6yZv" },
    { id: 5, name: "하루", driveId: "1kOePgoDYWZBLW5JvaokphULJzjcivIgx" },
    { id: 6, name: "로규", driveId: "1ZQXrEVi31BharLMKlLG4ztU9ACPqx6Nu" },
    { id: 7, name: "플_렌", driveId: "1P_MdCCC7R8zWzGPMeb3vp1cT-GAGJETT" },
    { id: 8, name: "용그리는인간", driveId: "18rnVdo9y037ydmNzsnWNo4u_6DyEpWDW" },
    { id: 9, name: "나누", driveId: "1YAXmS4BtBiBu9VXVJBoKR_pfnBic64-0" },
    { id: 10, name: "해루", driveId: "1a3CRzRx8yRJB6qcEq5Y3E6BajNBtJYfP" },
    { id: 11, name: "단차2", driveId: "1ImQRLRwBu6Y3CBu6fmYP-g--NT-nUU9p" },
    { id: 12, name: "토라쿠로_소야", driveId: "1dRy9MTodQ-c9kaUatKx80J0rCcJRQn21" },
    { id: 13, name: "Katherine_Serrath", driveId: "1WUO70ou9XdM-qf-uh3Svjr2dgkyEzEsJ" },
    { id: 14, name: "라벨로시", driveId: "12s6JZXYBG2w_CK-jXGpZOjbPmCnvDwwD" },
    { id: 15, name: "칼바이스", driveId: "1bQcYmQJfGpRhnF1Ss_rNsOkTGgQSd8RO" },
    { id: 16, name: "창천", driveId: "1DEDaSxiItWl3wxCzD6ZDYQVWssdn5EWS" },
    { id: 17, name: "연주수화", driveId: "1lbF_Z6e8sqRxDaRACPPjhbUNrKSu0Fuk" },
    { id: 18, name: "류보현", driveId: "1dQ0M4FClfDtCMnZv-O_Dc8f91K4V0XpV" },
    { id: 19, name: "라엘", driveId: "1Z99JUmd0Ft63orblmJUiFP50yrJJyopt" },
    { id: 20, name: "KOMEKO", driveId: "1Ls66YKl1liT53vh88DQXdKoOHJo3l5Zx" },
    { id: 21, name: "쁘밍", driveId: "1bVNh4zblZkVf9FVM7wXoRNH7bgBM9M0D" },
    { id: 22, name: "폴라곰", driveId: "1emkg6zRTpjfmy4sQEPt3e-vqZWFyqfwO" },
    { id: 23, name: "성영재_Cookie_Violin", driveId: "1blQLZdZcNvN9BfzI1bZJy29MuPUsTA-Y" },
    { id: 24, name: "RIN", driveId: "1Xg4t5PpknPxNlDC0DiBhCx0ax6m1Rks2" }
];

// 출력 디렉토리 생성
const outputDir = path.join(__dirname, 'public', 'creators');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Google Drive 파일 다운로드 함수
function downloadImage(driveId, filename) {
    return new Promise((resolve, reject) => {
        const url = `https://drive.google.com/uc?export=download&id=${driveId}`;
        const filePath = path.join(outputDir, filename);
        
        console.log(`다운로드 중: ${filename}`);
        
        https.get(url, (response) => {
            // 리다이렉트 처리
            if (response.statusCode === 301 || response.statusCode === 302) {
                const redirectUrl = response.headers.location;
                
                const protocol = redirectUrl.startsWith('https') ? https : http;
                protocol.get(redirectUrl, (redirectResponse) => {
                    const fileStream = fs.createWriteStream(filePath);
                    redirectResponse.pipe(fileStream);
                    
                    fileStream.on('finish', () => {
                        fileStream.close();
                        console.log(`✓ 완료: ${filename}`);
                        resolve(filename);
                    });
                }).on('error', reject);
            } else {
                const fileStream = fs.createWriteStream(filePath);
                response.pipe(fileStream);
                
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`✓ 완료: ${filename}`);
                    resolve(filename);
                });
            }
        }).on('error', reject);
    });
}

// 이미지 확장자 감지 및 리네임 함수
function detectAndRenameImage(filename) {
    const filePath = path.join(outputDir, filename);
    
    if (!fs.existsSync(filePath)) {
        console.log(`파일을 찾을 수 없음: ${filename}`);
        return filename;
    }
    
    const buffer = fs.readFileSync(filePath);
    let ext = '.jpg'; // 기본 확장자
    
    // 파일 시그니처로 확장자 감지
    if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
        ext = '.jpg';
    } else if (buffer[0] === 0x89 && buffer[1] === 0x50) {
        ext = '.png';
    } else if (buffer[0] === 0x47 && buffer[1] === 0x49) {
        ext = '.gif';
    } else if (buffer[0] === 0x52 && buffer[1] === 0x49) {
        ext = '.webp';
    }
    
    // 이미 확장자가 있으면 그대로 사용
    if (path.extname(filename)) {
        return filename;
    }
    
    const newFilename = filename + ext;
    const newFilePath = path.join(outputDir, newFilename);
    
    fs.renameSync(filePath, newFilePath);
    console.log(`확장자 추가: ${filename} → ${newFilename}`);
    
    return newFilename;
}

// 모든 이미지 다운로드
async function downloadAllImages() {
    console.log('=== 크리에이터 이미지 다운로드 시작 ===\n');
    
    const results = [];
    
    for (const creator of creators) {
        try {
            const tempFilename = `${creator.name}`;
            await downloadImage(creator.driveId, tempFilename);
            
            // 잠시 대기 (Google Drive API 제한 회피)
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // 확장자 감지 및 추가
            const finalFilename = detectAndRenameImage(tempFilename);
            
            results.push({
                id: creator.id,
                name: creator.name,
                filename: finalFilename
            });
        } catch (error) {
            console.error(`✗ 실패: ${creator.name} - ${error.message}`);
            results.push({
                id: creator.id,
                name: creator.name,
                filename: 'placeholder.svg',
                error: error.message
            });
        }
    }
    
    console.log('\n=== 다운로드 완료 ===');
    console.log(`성공: ${results.filter(r => !r.error).length}개`);
    console.log(`실패: ${results.filter(r => r.error).length}개`);
    
    // 결과를 JSON 파일로 저장
    const resultPath = path.join(__dirname, 'image-download-results.json');
    fs.writeFileSync(resultPath, JSON.stringify(results, null, 2));
    console.log(`\n결과 저장: ${resultPath}`);
    
    return results;
}

// 실행
downloadAllImages().catch(console.error);

