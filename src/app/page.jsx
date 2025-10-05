'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/home/HeroSection';
import CoreValuesSection from '@/components/sections/home/CoreValuesSection';
import CreatorCategoriesSection from '@/components/sections/home/CreatorCategoriesSection';
import { useDataStore } from '@/lib/dataStore';

export default function Home() {
  const [content, setContent] = useState({});
  const { siteContent } = useDataStore();

  useEffect(() => {
    if (siteContent) {
      setContent(siteContent);
    }
  }, [siteContent]);
  
  // 카테고리 데이터를 동적으로 생성
  const creatorCategories = [
    {
      value: 'streaming',
      label: content.categories?.streaming_label || '스트리밍 협업',
      description: content.categories?.streaming_description || '인디 게임 빌드 제공, 방송 자료, 게임 QA 등',
      icon: '📺'
    },
    {
      value: 'illustration',
      label: content.categories?.illustration_label || '일러스트',
      description: content.categories?.illustration_description || '팬아트, 프로모션 일러스트, 썸네일 등',
      icon: '🎨'
    },
    {
      value: 'voice-acting',
      label: content.categories?.voice_acting_label || '성우',
      description: content.categories?.voice_acting_description || '캐릭터 더빙, 나레이션, 트레일러 보이스오버',
      icon: '🎤'
    },
    {
      value: 'event-coordination',
      label: content.categories?.event_coordination_label || '행사 연계',
      description: content.categories?.event_coordination_description || '국내외 게임 행사와의 크리에이터 협업',
      icon: '🎪'
    },
    {
      value: 'content-creation',
      label: content.categories?.content_creation_label || '콘텐츠 제작',
      description: content.categories?.content_creation_description || '영상 제작, 소셜미디어 마케팅, 리뷰 콘텐츠',
      icon: '🎬'
    },
    {
      value: 'marketing',
      label: content.categories?.marketing_label || '마케팅',
      description: content.categories?.marketing_description || '게임 홍보, 브랜딩, 커뮤니티 관리',
      icon: '📢'
    }
  ];
  return (
    <>
      <HeroSection content={content.home} statistics={content.home} />
      <CoreValuesSection content={content.home} />
      <CreatorCategoriesSection content={content.categories} categories={creatorCategories} />
    </>
  );
}
