'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const languages = {
  ko: {
    code: 'ko',
    name: '한국어',
    flag: '🇰🇷',
    csvPath: '/data/site-content.csv'
  },
  en: {
    code: 'en', 
    name: 'English',
    flag: '🇺🇸',
    csvPath: '/data/en/site-content.csv'
  },
  jp: {
    code: 'jp',
    name: '日本語', 
    flag: '🇯🇵',
    csvPath: '/data/jp/site-content.csv'
  }
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('ko');
  const [isLanguageInitialized, setIsLanguageInitialized] = useState(false);

  // 브라우저 언어 감지 및 로컬 스토리지에서 언어 설정 복원
  useEffect(() => {
    const initializeLanguage = async () => {
      const savedLanguage = localStorage.getItem('preferred-language');
      let initialLanguage = 'ko';
      
      if (savedLanguage && languages[savedLanguage]) {
        initialLanguage = savedLanguage;
      } else {
        // 브라우저 언어 감지
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('en')) {
          initialLanguage = 'en';
        } else if (browserLang.startsWith('ja')) {
          initialLanguage = 'jp';
        }
        // 감지된 언어를 저장
        localStorage.setItem('preferred-language', initialLanguage);
      }
      
      setCurrentLanguage(initialLanguage);
      
      // dataStore에 초기 언어 설정
      if (window.dataStore) {
        await window.dataStore.setInitialLanguage(initialLanguage);
      }
      
      setIsLanguageInitialized(true);
    };

    initializeLanguage();
  }, []);

  const changeLanguage = async (langCode) => {
    if (languages[langCode]) {
      setCurrentLanguage(langCode);
      localStorage.setItem('preferred-language', langCode);
      
      // dataStore에 언어 변경 알림
      if (window.dataStore) {
        await window.dataStore.changeLanguage(langCode);
      }
      
      // 언어 변경 후 페이지 새로고침
      window.location.reload();
    }
  };

  const value = {
    currentLanguage,
    languages,
    changeLanguage,
    isLanguageInitialized,
    getCurrentLanguage: () => languages[currentLanguage],
    getCurrentCsvPath: () => languages[currentLanguage].csvPath
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

