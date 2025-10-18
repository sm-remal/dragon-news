import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUS from '../FindUS/FindUS';
import QZone from '../Qzone/Qzone';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUS></FindUS>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;