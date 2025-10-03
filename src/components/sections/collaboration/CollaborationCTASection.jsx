export default function CollaborationCTASection({ content }) {
    return (
        <div className="bg-indigo-600 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white">
                    {content?.cta_title || '지금 바로 협업을 시작하세요'}
                </h2>
                <p className="mt-4 text-xl text-indigo-100">
                    {content?.cta_subtitle || '전문적인 협업 프로세스로 여러분의 게임을 성공으로 이끌어드리겠습니다.'}
                </p>
                <div className="mt-8">
                    <a
                        href="/participate"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition-colors"
                    >
                        {content?.cta_button || '협업 신청하기'}
                    </a>
                </div>
            </div>
        </div>
    );
}
