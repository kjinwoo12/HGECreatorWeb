'use client';

export default function ParticipateContactSection({ content }) {
    return (
        <div className="bg-purple-600 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white">
                    {content?.contact_title || '더 궁금한 점이 있으신가요?'}
                </h2>
                <p className="mt-4 text-xl text-purple-100">
                    {content?.contact_subtitle || '언제든 연락주세요. 전문 상담원이 도움을 드리겠습니다.'}
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="text-purple-100">
                        <div className="text-lg font-semibold">이메일</div>
                        <div>contact@hgecreator.com</div>
                    </div>
                    <div className="text-purple-100">
                        <div className="text-lg font-semibold">전화</div>
                        <div>02-1234-5678</div>
                    </div>
                    <div className="text-purple-100">
                        <div className="text-lg font-semibold">운영시간</div>
                        <div>평일 09:00 - 18:00</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
