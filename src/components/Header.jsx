'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useDataStore } from '@/lib/dataStore';
import LanguageSelector from './LanguageSelector';
import { isActivePath } from '@/lib/pathUtils';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { siteContent } = useDataStore();
    const content = siteContent;
    const pathname = usePathname();

    const navigation = [
        { name: content.header?.nav_home || '홈', href: '/' },
        { name: content.header?.nav_creators || '크리에이터', href: '/creators' },
        { name: content.header?.nav_collaboration || '협업 프로세스', href: '/collaboration' },
        /*{ name: content.header?.nav_success_stories || '성공 사례', href: '/success-stories' }, 임시 비활성화 20251009*/
        { name: content.header?.nav_participate || '참여 방법', href: '/participate' },
    ];

    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* 로고 */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="text-2xl font-bold text-indigo-600">
                                {content.header?.logo || 'HGE Creator'}
                            </div>
                        </Link>
                    </div>

                    {/* 데스크톱 네비게이션 */}
                    <div className="hidden md:flex items-center">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => {
                                const isActive = isActivePath(pathname, item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                                ? 'text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                        {/* 언어 선택 버튼 */}
                        <div className="ml-6">
                            <LanguageSelector />
                        </div>
                    </div>

                    {/* 모바일 언어 선택 및 메뉴 버튼 */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* 모바일 언어 선택 버튼 */}
                        <LanguageSelector />

                        {/* 모바일 메뉴 버튼 */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-indigo-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">{content.header?.menu_open || '메뉴 열기'}</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* 모바일 네비게이션 */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            {navigation.map((item) => {
                                const isActive = isActivePath(pathname, item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                                                ? 'text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
