import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAds } from '../../redux/actions';
// import AdvertCard from '../../components/AdvertCard/AdvertCard';
import AdvertList from '../../components/AdvertList/AdvertList';

import css from './Catalog.module.css';

const Catalog = () => {
    const dispatch = useDispatch();
    const adverts = useSelector((state) => state.adverts);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        if (adverts.length === 0) {
            dispatch(fetchAds());
        }
    }, [dispatch, adverts.length]);

    // useEffect(() => {
    //     dispatch(fetchAds());
    // }, [dispatch]);

    // console.log('Catalog component rendered');

    // useEffect(() => {
    //     console.log(
    //         'Advert IDs:',
    //         adverts.map((advert) => advert._id)
    //     );
    // }, [adverts]);

    return (
        <div className={css.container}>
            {/* <h1 className={css.title}>Catalog</h1> */}
            <div className={css.advertList}>
                <AdvertList/>
            </div>
            {/* <AdvertList /> */}
        {/* <div>
            {adverts.map((advert, index) => (
                <AdvertCard key={`${advert._id}-${index}`} advert={advert} />
            ))}
        </div> */}
        {/* <button onClick={() => setPage(page + 1)}>Load More</button> */}
        </div>
    );
};

export default Catalog;
