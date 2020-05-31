import React from 'react';
import * as Icon from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>{t('We stand with everyone fighting on the frontlines')}</h5>

      <div className="link">
		<a
          href="https://www.indwebhost.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Indwebhost
        </a>
      </div>

      <a
        href="https://github.com/akhilkumar332/covid19india-react"
        className="button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.GitHub />
        <span>{t('Open Sourced on GitHub')}</span>
      </a>

      <a
        className="button excel"
        href="http://api.covid19india.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Database />
        <span>{t('Patient Database')}</span>
      </a>
    </footer>
  );
}

export default React.memo(Footer);
