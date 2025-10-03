'use client';

import { useDataStore } from '@/lib/dataStore';
import CollaborationHeaderSection from '@/components/sections/collaboration/CollaborationHeaderSection';
import CollaborationStepsSection from '@/components/sections/collaboration/CollaborationStepsSection';
import CollaborationBenefitsSection from '@/components/sections/collaboration/CollaborationBenefitsSection';
import CollaborationCTASection from '@/components/sections/collaboration/CollaborationCTASection';

export default function CollaborationPage() {
    const { siteContent } = useDataStore();
    const content = siteContent;
    const collaborationSteps = [
        {
            step: 1,
            title: content.collaboration?.step1_title || '프로젝트 등록',
            description: content.collaboration?.step1_description || '게임 정보와 필요한 크리에이터 유형을 등록해주세요.',
            details: [
                content.collaboration?.step1_detail1 || '게임 장르, 타겟 오디언스, 출시 일정 등 기본 정보 제공',
                content.collaboration?.step1_detail2 || '필요한 협업 유형 선택 (스트리밍, 일러스트, 성우, 이벤트 등)',
                content.collaboration?.step1_detail3 || '예산 범위와 협업 기간 설정'
            ]
        },
        {
            step: 2,
            title: content.collaboration?.step2_title || '크리에이터 매칭',
            description: content.collaboration?.step2_description || '프로젝트에 적합한 크리에이터를 추천해드립니다.',
            details: [
                content.collaboration?.step2_detail1 || 'AI 기반 매칭 시스템으로 최적의 크리에이터 선별',
                content.collaboration?.step2_detail2 || '포트폴리오, 경험, 가용성을 종합적으로 고려',
                content.collaboration?.step2_detail3 || '3-5명의 후보 크리에이터 프로필 제공'
            ]
        },
        {
            step: 3,
            title: content.collaboration?.step3_title || '협업 협의',
            description: content.collaboration?.step3_description || '선택한 크리에이터와 구체적인 협업 내용을 협의합니다.',
            details: [
                content.collaboration?.step3_detail1 || '협업 범위, 일정, 보상 등 세부 사항 논의',
                content.collaboration?.step3_detail2 || '계약서 작성 및 법적 검토 지원',
                content.collaboration?.step3_detail3 || '프로젝트 킥오프 미팅 주선'
            ]
        },
        {
            step: 4,
            title: content.collaboration?.step4_title || '협업 진행',
            description: content.collaboration?.step4_description || '전담 매니저가 협업 과정을 관리하고 지원합니다.',
            details: [
                content.collaboration?.step4_detail1 || '정기적인 진행 상황 점검 및 보고',
                content.collaboration?.step4_detail2 || '이슈 발생 시 신속한 중재 및 해결',
                content.collaboration?.step4_detail3 || '품질 관리 및 피드백 조율'
            ]
        },
        {
            step: 5,
            title: content.collaboration?.step5_title || '결과 평가',
            description: content.collaboration?.step5_description || '협업 결과를 평가하고 향후 협업을 위한 피드백을 수집합니다.',
            details: [
                content.collaboration?.step5_detail1 || '협업 성과 측정 및 분석',
                content.collaboration?.step5_detail2 || '양방향 피드백 수집 및 개선점 도출',
                content.collaboration?.step5_detail3 || '성공 사례 등록 및 홍보 지원'
            ]
        }
    ];

    const benefits = [
        {
            title: content.collaboration?.benefit1_title || '서브컬처 게임 강화',
            description: content.collaboration?.benefit1_description || '전문 크리에이터와의 협업을 통해 게임의 서브컬처적 매력을 극대화합니다.',
            icon: '🎮'
        },
        {
            title: content.collaboration?.benefit2_title || '홍보 효과 증대',
            description: content.collaboration?.benefit2_description || '크리에이터의 팬층을 활용한 자연스러운 게임 홍보가 가능합니다.',
            icon: '📢'
        },
        {
            title: content.collaboration?.benefit3_title || '컨벤션 연계',
            description: content.collaboration?.benefit3_description || '국내외 게임 컨벤션과 연계한 오프라인 홍보 기회를 제공합니다.',
            icon: '🏟️'
        },
        {
            title: content.collaboration?.benefit4_title || '코스플레이 이벤트',
            description: content.collaboration?.benefit4_description || '게임 캐릭터 코스플레이를 통한 팬 참여형 마케팅을 지원합니다.',
            icon: '👗'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <CollaborationHeaderSection content={content.collaboration} />
            <CollaborationStepsSection content={content.collaboration} steps={collaborationSteps} />
            <CollaborationBenefitsSection content={content.collaboration} benefits={benefits} />
            <CollaborationCTASection content={content.collaboration} />
        </div>
    );
}