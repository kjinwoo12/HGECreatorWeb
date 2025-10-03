'use client';

import Link from 'next/link';

export default function CTASection({ content }) {
    
    return (
        <section className="py-16 bg-indigo-600">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white">
                    {content?.cta_title || '지금 바로 시작하세요'}
                </h2>
                <p className="mt-4 text-xl text-indigo-100">
                    {content?.cta_description || 'HGE Creator와 함께 여러분의 게임을 성공으로 이끌어보세요.'}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/creators"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition-colors"
                    >
                        {content?.primary_button || '크리에이터 찾기'}
                    </Link>
                    <Link
                        href="/participate"
                        className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-600 transition-colors"
                    >
                        {content?.secondary_button || '협업 시작하기'}
                    </Link>
                </div>
            </div>
        </section>
    );
}
