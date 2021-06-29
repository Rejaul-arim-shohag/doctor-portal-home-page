import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


const BusinessInfo = () => {
    const infosData = [
        {
            title: 'Opening Hours',
            description: 'we are open 7 days',
            icon: faClock,
            background: 'primary',
        },
        {
            title: 'Visit our location',
            description: 'Brooklyn, NY100036 USA',
            icon: faMapMarker,
            background: 'dark',
        },
        {
            title: 'Contact us now',
            description: '+8801650288673',
            icon: faPhoneVolume,
            background: 'primary',
        }
    ];
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;