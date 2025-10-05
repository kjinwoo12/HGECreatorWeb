'use client';

export default function ParticipateHeaderSection({ content }) {
    return (
        <div className="bg-indigo-600 text-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {content?.title || '협업 참여하기'}
                    </h1>
                    <p className="mt-4 text-xl text-indigo-100">
                        {content?.subtitle || 'HGE Creator와 함께 게임 업계의 새로운 성공 스토리를 만들어가세요.'}
                    </p>
                </div>
            </div>
        </div>
    );
}
