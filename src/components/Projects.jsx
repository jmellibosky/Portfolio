import { useTranslation } from 'react-i18next';
import { FaPlaneDeparture, FaGamepad, FaGraduationCap, FaWallet, FaCaretRight } from 'react-icons/fa6'

export default function Projects({handleNavigation}) {
    const { t } = useTranslation();
    
    return (
        <>
        <div id="projects-info">
            <h1 className="accent">{t('my_projects')}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, sit numquam sapiente recusandae hic alias pariatur eum ducimus tempore atque neque exercitationem minima porro tenetur laborum dolor, saepe quisquam molestiae!</p>
        </div>
        <div id="projects">
            <div className="carousel slide" id="projects-carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="project-item">
                            <FaPlaneDeparture className="section-icon" />
                            <h5>{t('airspace_reservation')}</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia aut ea earum ab dolor nisi voluptate, harum expedita ullam iusto sunt vero doloremque fuga natus ipsa, odit cum. Esse, optio.</p>
                            <a className="inner-redirect" onClick={() => handleNavigation('/projects/airspace')}>{t('watch_demo')}<FaCaretRight /></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="project-item">
                            <FaGamepad className="section-icon" />
                            <h5>{t('arcade_automation')}</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet harum ut illum suscipit. Sed fugiat, ducimus praesentium atque nam natus fugit corporis perspiciatis deleniti consequatur quod quisquam ad enim aspernatur!   </p>
                            <a className="inner-redirect" onClick={() => handleNavigation('/projects/arcade')}>{t('watch_demo')}<FaCaretRight /></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="project-item">
                            <FaGraduationCap className="section-icon" />
                            <h5>{t('institution_management')}</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur, saepe sunt culpa incidunt doloribus eaque quisquam modi quam, dolores ullam omnis magni, nihil obcaecati accusamus molestiae non facilis neque. </p>
                            <a className="inner-redirect" onClick={() => handleNavigation('/projects/education')}>{t('watch_demo')}<FaCaretRight /></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="project-item">
                            <FaWallet className="section-icon" />
                            <h5>{t('economics_management')}</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem expedita nulla eaque autem, doloribus sequi, natus laborum distinctio alias a omnis maxime minima consectetur mollitia quod saepe cupiditate iusto! Quia!</p>
                            <a className="inner-redirect" onClick={() => handleNavigation('/projects/economy')}>{t('watch_demo')}<FaCaretRight /></a>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#projects-carousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#projects-carousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
        </>
    );
}