import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAds } from '../../redux/actions';
import AdvertCard from '../../components/AdvertCard/AdvertCard';

const Catalog = () => {
    const dispatch = useDispatch();
    const adverts = useSelector((state) => state.adverts);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchAds());
    }, [dispatch]);

    console.log('Catalog component rendered');

    useEffect(() => {
        console.log(
            'Advert IDs:',
            adverts.map((advert) => advert._id)
        );
    }, [adverts]);

    return (
        <div>
        <h1>Catalog</h1>
        <div>
            {adverts.map((advert, index) => (
                <AdvertCard key={`${advert._id}-${index}`} advert={advert} />
            ))}
        </div>
        {/* <button onClick={() => setPage(page + 1)}>Load More</button> */}
        </div>
    );
};

export default Catalog;
