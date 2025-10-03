'use client';

export default function SuccessStoriesHeaderSection({ content }) {
    return (
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {content?.title || '성공 사례'}
                    </h1>
                    <p className="mt-4 text-xl text-green-100">
                        {content?.subtitle || 'HGE Creator와 함께한 게임들의 놀라운 성공 스토리를 확인해보세요.'}
                    </p>
                </div>
            </div>
        </div>
    );
}
