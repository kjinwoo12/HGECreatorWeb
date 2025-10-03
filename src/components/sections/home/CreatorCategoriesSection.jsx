'use client';

import Link from 'next/link';

export default function CreatorCategoriesSection({ content, categories }) {
    
    return (
        <section className="py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {content?.title || '크리에이터 카테고리'}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        {content?.subtitle || '다양한 분야의 전문 크리에이터들을 만나보세요.'}
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                            <div className="text-center">
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.label}</h3>
                                <p className="text-gray-600 mb-4">{category.description}</p>
                                <Link
                                    href="/creators"
                                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
                                >
                                    {content?.link_text || '자세히 보기'}
                                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
