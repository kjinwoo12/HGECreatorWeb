'use client';

import HomeSection from '@/components/sections/HomeSection';
import ContentManager from '@/components/ContentManager';
import Link from 'next/link';
// import { creatorCategories } from '@/data/creators'; // 하드코딩된 데이터 대신 번역 데이터 사용
import { useDataStore } from '@/lib/dataStore';

export default function Home() {
  // useDataStore 훅으로 반응형 데이터 가져오기
  const { siteContent } = useDataStore();
  const content = siteContent;
  
  // 카테고리 데이터를 동적으로 생성
  const creatorCategories = [
    {
      value: 'streaming',
      label: content.categories?.streaming_label || '스트리밍 협업',
      description: content.categories?.streaming_description || '인디 게임 빌드 제공, 방송 자료, 게임 QA 등'
    },
    {
      value: 'illustration',
      label: content.categories?.illustration_label || '일러스트',
      description: content.categories?.illustration_description || '팬아트, 프로모션 일러스트, 썸네일 등'
    },
    {
      value: 'voice-acting',
      label: content.categories?.voice_acting_label || '성우',
      description: content.categories?.voice_acting_description || '캐릭터 더빙, 나레이션, 트레일러 보이스오버'
    },
    {
      value: 'event-coordination',
      label: content.categories?.event_coordination_label || '행사 연계',
      description: content.categories?.event_coordination_description || '국내외 게임 행사와의 크리에이터 협업'
    },
    {
      value: 'content-creation',
      label: content.categories?.content_creation_label || '콘텐츠 제작',
      description: content.categories?.content_creation_description || '영상 제작, 소셜미디어 마케팅, 리뷰 콘텐츠'
    },
    {
      value: 'marketing',
      label: content.categories?.marketing_label || '마케팅',
      description: content.categories?.marketing_description || '게임 홍보, 브랜딩, 커뮤니티 관리'
    }
  ];
  return (
    <>
      {/* 히어로 섹션 */}
      <HomeSection content={content.home} statistics={content.statistics} />

      {/* 핵심 가치 섹션 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.coreValues?.title || '우리의 핵심 가치'}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {content.coreValues?.subtitle || 'HGE Creator가 추구하는 가치를 소개합니다.'}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                🌱
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{content.coreValues?.value1_title || '상호 성장'}</h3>
              <p className="mt-2 text-gray-600">
                {content.coreValues?.value1_description || '개발자와 크리에이터가 함께 성장할 수 있는 환경을 만듭니다'}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                🎨
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{content.coreValues?.value2_title || '창의적 협업'}</h3>
              <p className="mt-2 text-gray-600">
                {content.coreValues?.value2_description || '다양한 분야의 전문가들이 창의적으로 협업할 수 있도록 지원합니다'}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                💬
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{content.coreValues?.value3_title || '투명한 소통'}</h3>
              <p className="mt-2 text-gray-600">
                {content.coreValues?.value3_description || '명확하고 투명한 소통을 통해 신뢰할 수 있는 관계를 구축합니다'}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                🌍
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{content.coreValues?.value4_title || '지속가능한 생태계'}</h3>
              <p className="mt-2 text-gray-600">
                {content.coreValues?.value4_description || '장기적으로 지속가능한 게임 크리에이터 생태계를 구축합니다'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 크리에이터 카테고리 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.categories?.title || '크리에이터 카테고리'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.categories?.subtitle || '다양한 분야의 전문 크리에이터들을 만나보세요.'}
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
                  {content.categories?.linkText || '자세히 보기'}
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
              {content.cta?.title || '지금 바로 시작하세요'}
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              {content.cta?.description || 'HGE Creator와 함께 여러분의 게임을 성공으로 이끌어보세요.'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/creators"
                className="rounded-md bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow hover:bg-gray-50 transition-colors"
              >
                {content.home?.primary_button || '크리에이터 찾기'}
              </Link>
              <Link
                href="/participate"
                className="rounded-md border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-indigo-600 transition-colors"
              >
                {content.home?.secondary_button || '협업 시작하기'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 콘텐츠 관리자 패널 */}
      <ContentManager />
    </>
  );
}
