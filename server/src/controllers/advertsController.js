import Advert from "../models/Advert.js";

export const getAdverts = async (req, res) => {
    const { location } = req.query;
    let query = {};

    if (location) {
        query.location = new RegExp(`^${location}$`, 'i');
    }

    try {
        console.log('fetching adverts from database...');
        const adverts = await Advert.find(query);
        console.log(`adverts fetched: ${adverts.length}`);
        res.status(200).json(adverts);
    } catch (error) {
        console.log('error fetching adverts');
        res.status(404).json({ message: error.message });
    }
};

export const getAdvert = async (req, res) => {
    const { _id } = req.params;
    try {
        const advert = await Advert.findById(_id);
        res.status(200).json(advert);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateAdvert = async (req, res) => {
    const { _id } = req.params;
    const advert = req.body;
    try {
        const updatedAdvert = await Advert.findByIdAndUpdate(_id, advert, { new: true });
        res.status(200).json({ updatedAdvert });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}