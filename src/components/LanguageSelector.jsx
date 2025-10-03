'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { currentLanguage, languages, changeLanguage } = useLanguage();

    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* 언어 선택 버튼 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                title="언어 선택"
            >
                {/* 언어 아이콘 */}
                <img src="/globe.svg" alt="언어 아이콘" className="w-5 h-5" />
                
                {/* 드롭다운 화살표 */}
                <svg 
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* 드롭다운 메뉴 */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    {Object.entries(languages).map(([code, lang]) => (
                        <button
                            key={code}
                            onClick={() => handleLanguageChange(code)}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-3 ${
                                currentLanguage === code 
                                    ? 'bg-indigo-50 text-indigo-600' 
                                    : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="font-medium">{lang.name}</span>
                            {currentLanguage === code && (
                                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
