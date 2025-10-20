import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';
import Spinner from '../Spinner/Spinner';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<Spinner></Spinner>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;