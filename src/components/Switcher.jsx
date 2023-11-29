import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex space-x-2">
      <button 
        onClick={() => changeLanguage('en')}
        className="btn btn-square btn-xs btn-outline btn-primary"
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('es')}
        className="btn btn-square btn-xs btn-outline btn-primary"
      >
      ES
      </button>
      ("""")
      {/* <button onClick={() => changeLanguage('eu')} className="...">Euskara</button> */}
    </div>
  );
  
  
}

export default LanguageSwitcher;
