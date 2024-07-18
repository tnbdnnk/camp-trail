import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAds } from "../../redux/actions";
import AdvertCard from "../AdvertCard/AdvertCard";
import Filter from "../Filter/Filter";

import css from './AdvertList.module.css';

const AdvertList = () => {
    const dispatch = useDispatch();
    const adverts = useSelector((state) => state.adverts);
    const [filteredAdverts, setFilteredAdverts] = useState(adverts);
    const [filterCriteria, setFilterCriteria] = useState({
        location: '',
        equipment: {},
        type: ''
    });
    const [visibleAds, setVisibleAds] = useState(4);

    useEffect(() => {
        if (adverts.length === 0) {
            dispatch(fetchAds([]));
        } else {
            setFilteredAdverts(adverts);
        }
    }, [dispatch, adverts]);

    const handleFilter = (criteria) => {
        setFilterCriteria(criteria);
        const { location, equipment, type } = criteria;
        const filtered = adverts.filter((advert) => {
            const matchesLocation = location ? advert.location.includes(location) : true;
            const matchesEquipment = Object.keys(equipment).every((key) => {
                if (key === 'shower' && equipment[key]) {
                    return advert.details.shower === 1 && advert.details.toilet === 1;
                }
                return equipment[key] ? advert.details[key] === 1 : true;
            });
            const matchesType = type ? advert.form === type : true;
            return matchesLocation && matchesEquipment && matchesType;
        });

        setFilteredAdverts(filtered);
        setVisibleAds(4);
    };

    const resetFilter = () => {
        setFilterCriteria({
            location: '',
            equipment: {},
            type: ''
        });
        setFilteredAdverts(adverts);
        setVisibleAds(4);
    };

    const handleLoadMore = () => {
        setVisibleAds(prevVisibleAds => prevVisibleAds + 4);
    }

    return (
        <div className={css.advertListContainer}>
            <div className={css.filterContainer}>
                <Filter
                onFilter={handleFilter}
                resetFilter={resetFilter}
                filterCriteria={filterCriteria}
            />
            </div>
            <div className={css.advertsList}>
                {filteredAdverts.slice(0, visibleAds).map((advert) => (
                    <AdvertCard key={advert._id} advert={advert} />
                ))}
                {visibleAds < filteredAdverts.length && (
                    <button
                        className={css.loadMoreButton}
                        onClick={handleLoadMore}
                    >
                        Load more
                    </button>
                )}
            </div>
        </div>
    )
}

export default AdvertList;