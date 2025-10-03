export default function CollaborationHeaderSection({ content }) {
    return (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {content?.title || '협업 프로세스'}
                    </h1>
                    <p className="mt-4 text-xl text-indigo-100">
                        {content?.subtitle || '체계적이고 전문적인 협업 프로세스로 성공적인 게임 홍보를 지원합니다.'}
                    </p>
                </div>
            </div>
        </div>
    );
}
