'use client';

import { useDataStore } from '@/lib/dataStore';
import ParticipateHeaderSection from '@/components/sections/participate/ParticipateHeaderSection';
import ParticipateTargetSection from '@/components/sections/participate/ParticipateTargetSection';
import ParticipateRequirementsSection from '@/components/sections/participate/ParticipateRequirementsSection';
import ParticipateProcessSection from '@/components/sections/participate/ParticipateProcessSection';
import ParticipateApplicationSection from '@/components/sections/participate/ParticipateApplicationSection';
import ParticipateFAQSection from '@/components/sections/participate/ParticipateFAQSection';

export default function ParticipatePage() {
    const { siteContent } = useDataStore();
    const content = siteContent?.participate || {};
    
    const participationTypes = [
        {
            title: content?.developer_title || '게임 개발사',
            description: content?.developer_description || '인디 게임을 개발하는 회사나 개인 개발자',
            features: [
                content?.developer_feature1 || '크리에이터 매칭 서비스',
                content?.developer_feature2 || '협업 프로세스 관리',
                content?.developer_feature3 || '마케팅 전략 수립',
                content?.developer_feature4 || '성과 분석 및 보고'
            ],
            icon: '🎮'
        },
        {
            title: content?.creator_title || '크리에이터',
            description: content?.creator_description || '다양한 분야의 콘텐츠 크리에이터',
            features: [
                content?.creator_feature1 || '게임 협업 기회 제공',
                content?.creator_feature2 || '정당한 보상 보장',
                content?.creator_feature3 || '포트폴리오 관리',
                content?.creator_feature4 || '전문성 개발 지원'
            ],
            icon: '🎨'
        }
    ];

    const requirements = [
        {
            category: content?.developer_title || '게임 개발사',
            items: [
                content?.developer_req1 || '개발 중이거나 출시 예정인 게임 보유',
                content?.developer_req2 || '협업에 대한 명확한 목표와 예산',
                content?.developer_req3 || '크리에이터와의 소통 의지',
                content?.developer_req4 || '게임 관련 자료 제공 가능'
            ]
        },
        {
            category: content?.creator_title || '크리에이터',
            items: [
                content?.creator_req1 || '해당 분야 1년 이상 경력',
                content?.creator_req2 || '포트폴리오 또는 활동 실적',
                content?.creator_req3 || '정기적인 콘텐츠 제작 능력',
                content?.creator_req4 || '게임에 대한 관심과 이해'
            ]
        }
    ];

    const process = [
        {
            step: 1,
            title: content?.process_step1_title || '신청서 제출',
            description: content?.process_step1_desc || '구글 설문을 통해 협업 신청서를 제출해주세요.'
        },
        {
            step: 2,
            title: content?.process_step2_title || '검토 및 상담',
            description: content?.process_step2_desc || '2-3일 내에 전담 매니저가 연락드려 상세 상담을 진행합니다.'
        },
        {
            step: 3,
            title: content?.process_step3_title || '매칭 및 협의',
            description: content?.process_step3_desc || '적합한 크리에이터를 매칭하고 협업 조건을 협의합니다.'
        },
        {
            step: 4,
            title: content?.process_step4_title || '협업 시작',
            description: content?.process_step4_desc || '계약 체결 후 본격적인 협업을 시작합니다.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <ParticipateHeaderSection content={content} />
            <ParticipateTargetSection content={content} participationTypes={participationTypes} />
            <ParticipateRequirementsSection content={content} requirements={requirements} />
            <ParticipateProcessSection content={content} process={process} />
            <ParticipateApplicationSection content={content} />
            <ParticipateFAQSection content={content} />
        </div>
    );
}