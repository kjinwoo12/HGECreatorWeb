'use client';

export default function SuccessStoriesStatsSection({ content }) {
    return (
        <div className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        {content?.stats_title || '협업 성과'}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {content?.stats_subtitle || '숫자로 보는 HGE Creator의 성과'}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                        <div className="text-lg font-medium text-gray-900 mb-1">
                            {content?.stats_success_rate_label || '평균 프로젝트 성공률'}
                        </div>
                        <div className="text-sm text-gray-600">
                            {content?.stats_success_rate_desc || '대부분의 프로젝트가 성공적으로 완료됩니다'}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
                        <div className="text-lg font-medium text-gray-900 mb-1">
                            {content?.stats_satisfaction_label || '평균 만족도'}
                        </div>
                        <div className="text-sm text-gray-600">
                            {content?.stats_satisfaction_desc || '높은 고객 만족도를 자랑합니다'}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
                        <div className="text-lg font-medium text-gray-900 mb-1">
                            {content?.stats_repeat_rate_label || '재협업률'}
                        </div>
                        <div className="text-sm text-gray-600">
                            {content?.stats_repeat_rate_desc || '한번 협업한 파트너들이 다시 찾습니다'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
