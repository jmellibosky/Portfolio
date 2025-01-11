import { useTranslation } from 'react-i18next';
import { FaBars, FaHome, FaPlaneDeparture, FaUsers, FaUser, FaPlane, FaListUl, FaBuilding } from "react-icons/fa";

export default function Airspace() {
    const { t } = useTranslation();

    return (
        <div id="airspace" className="container">
            <div className="row">
                <div id="airspace-nav">
                    <ul>
                        <li>{t('airspace_home')} <FaHome /></li>
                        <li>{t('airspace_manage_requests')} <FaPlaneDeparture /></li>
                        <ul>
                            <li>{t('airspace_inbox')} <FaPlaneDeparture /></li>
                            <li>{t('airspace_analysis')} <FaPlaneDeparture /></li>
                            <li>{t('airspace_coordination')} <FaPlaneDeparture /></li>
                            <li>{t('airspace_response')} <FaPlaneDeparture /></li>
                        </ul>
                        <li>{t('airspace_manage_aircrew')} <FaUsers /></li>
                        <li>{t('airspace_manage_users')} <FaUser /></li>
                        <li>{t('airspace_manage_uav')} <FaPlane /></li>
                        <li>{t('airspace_manage_docs')} <FaListUl /></li>
                        <ul>
                            <li>{t('airspace_validation')} <FaListUl /></li>
                        </ul>
                        <li>{t('airspace_manage_entities')} <FaBuilding /></li>
                    </ul>
                </div>
                <div className="col">
                    <div className="row">
                        <div id="airspace-header" className="col">
                            <div className="d-flex flex-row justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div className="btn-airspace">
                                        <FaBars />
                                    </div>
                                    {t('airspace_administrator')}
                                </div>
                                <div className="d-flex">
                                    <div className="btn-airspace">{t('airspace_default_name')}</div>
                                    <div className="btn-airspace">{t('airspace_logout')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div id="airspace-main" className="col">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}