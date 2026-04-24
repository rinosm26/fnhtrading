import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // This effect ensures the page direction (RTL/LTR) updates 
  // whenever the language changes
  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap">
      <button 
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active-lang' : ''}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button 
        onClick={() => changeLanguage('ar')}
        className={i18n.language === 'ar' ? 'active-lang' : ''}
      >
        AR
      </button>
    </div>
  );
};

export default LanguageSwitcher;