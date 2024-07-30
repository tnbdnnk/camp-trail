import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAds } from '../../redux/actions';
import AdvertList from '../../components/AdvertList/AdvertList';

import css from './Catalog.module.css';

const Catalog = () => {
    const dispatch = useDispatch();
    const adverts = useSelector((state) => state.adverts);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type') || '';

    useEffect(() => {
        if (adverts.length === 0) {
            dispatch(fetchAds());
        }
    }, [dispatch, adverts.length]);

    const initialFilterCriteria = {
        location: '',
        equipment: {},
        type: type,
    }

    return (
        <div className={css.container}>
            <div className={css.advertList}>
                <AdvertList initialFilterCriteria={initialFilterCriteria} />
            </div>
        </div>
    );
};

export default Catalog;
