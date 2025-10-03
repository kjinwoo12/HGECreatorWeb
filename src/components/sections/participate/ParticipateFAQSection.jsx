'use client';

export default function ParticipateFAQSection({ content }) {
    return (
        <div className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">{content?.faq_title || '자주 묻는 질문'}</h2>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {content?.faq1_question || '협업 비용은 어떻게 결정되나요?'}
                        </h3>
                        <p className="text-gray-600">
                            {content?.faq1_answer || '프로젝트 규모, 협업 유형, 기간 등을 종합적으로 고려하여 결정됩니다. 상담을 통해 예산에 맞는 최적의 방안을 제안해드립니다.'}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {content?.faq2_question || '협업 기간은 얼마나 걸리나요?'}
                        </h3>
                        <p className="text-gray-600">
                            {content?.faq2_answer || '협업 유형에 따라 다르지만, 일반적으로 2주~3개월 정도 소요됩니다. 프로젝트 특성에 맞는 일정을 협의하여 진행합니다.'}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {content?.faq3_question || '작은 인디 게임도 협업이 가능한가요?'}
                        </h3>
                        <p className="text-gray-600">
                            {content?.faq3_answer || '물론입니다. 게임 규모와 예산에 맞는 다양한 협업 옵션을 제공합니다. 작은 프로젝트도 성공적인 협업이 가능합니다.'}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {content?.faq4_question || '해외 게임도 협업 대상인가요?'}
                        </h3>
                        <p className="text-gray-600">
                            {content?.faq4_answer || '네, 해외 게임 회사와의 협업도 가능합니다. 글로벌 마케팅 경험이 있는 크리에이터들과 매칭해드립니다.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
