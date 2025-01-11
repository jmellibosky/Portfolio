import { FaUser, FaCode } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';

export default function Home({handleNavigation}) {
    const { t } = useTranslation();
    
    return (
        <>
        <div id="profile-info">
            <div className="row">
                <img className="col-lg-5 col-md-3" id="profile-image" src="/images/snep.jpg" alt="Imagen de Joaquín Mellibosky" />
                <div className="col-lg-7 col-md-9">
                    <h1>Joaquín <span className="accent">Mellibosky</span></h1>
                    <h3>{t('software_developer')}</h3>
                    <h5>{t('information_system_engineer')}</h5>
                </div>
            </div>
        </div>
        <div id="sections">
            <div className="row">
                <div className="col section" onClick={() => handleNavigation('/about')}>
                    <FaUser className="section-icon" />
                    <h5>{t('about_me')}</h5>
                    <a><span className="accent">{t('learn_more')}</span></a>
                </div>
                <div className="col section" onClick={() => handleNavigation('/projects')}>
                    <FaCode className="section-icon" />
                    <h5>{t('my_projects')}</h5>
                    <a><span className="accent">{t('explore_my_creations')}</span></a>
                </div>
            </div>
        </div>
        </>
    );
}