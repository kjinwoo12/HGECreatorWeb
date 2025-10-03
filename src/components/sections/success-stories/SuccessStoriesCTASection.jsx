'use client';

export default function SuccessStoriesCTASection({ content }) {
    
    return (
        <div className="bg-green-600 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white">
                    {content?.cta_title || '다음 성공 사례의 주인공이 되어보세요'}
                </h2>
                <p className="mt-4 text-xl text-green-100">
                    {content?.cta_subtitle || '여러분의 게임도 이런 성공을 거둘 수 있습니다. 지금 바로 시작하세요.'}
                </p>
                <div className="mt-8">
                    <a
                        href="/participate"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-colors"
                    >
                        {content?.cta_button || '협업 신청하기'}
                    </a>
                </div>
            </div>
        </div>
    );
}
