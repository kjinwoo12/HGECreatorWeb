'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ContentManager from '@/components/ContentManager';
import Link from 'next/link';
import { creatorCategories } from '@/data/creators';
import { getSiteContent } from '@/lib/contentService';
import { SiteContent } from '@/types/content';

export default function Home() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContent() {
      try {
        const siteContent = await getSiteContent();
        setContent(siteContent);
      } catch (error) {
        console.error('콘텐츠 로드 실패:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContent();
  }, []);

  if (isLoading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">콘텐츠를 불러오는 중...</p>
        </div>
      </div>
    );
  }
  return (
    <>
      {/* 히어로 섹션 */}
      <HeroSection content={content.hero} statistics={content.statistics} />

      {/* 핵심 가치 섹션 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.coreValues.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {content.coreValues.subtitle}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.coreValues.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 크리에이터 카테고리 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.categories.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.categories.subtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creatorCategories.map((category) => (
              <div key={category.value} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.label}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <Link
                  href={`/creators?category=${category.value}`}
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  {content.categories.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {content.cta.title}
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              {content.cta.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={content.cta.primaryButtonLink}
                className="rounded-md bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow hover:bg-gray-50 transition-colors"
              >
                {content.cta.primaryButtonText}
              </Link>
              <Link
                href={content.cta.secondaryButtonLink}
                className="rounded-md border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-indigo-600 transition-colors"
              >
                {content.cta.secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 콘텐츠 관리자 패널 */}
      <ContentManager onContentUpdate={setContent} />
    </>
  );
}
