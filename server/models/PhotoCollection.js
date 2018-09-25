const mongoose = require('mongoose');
const {model: Photo} = require('./Photo');

const photoCollectionSchema = mongoose.Schema({
    title: String,
    photoIds: [String],
    place: [Number],
});

photoCollectionSchema.statics.getCollections = async function() {
    const collections = await this.find({}).exec();
    const promisesForPhotos = collections.map((c) => Photo.getPhotos(c._id));
    const photosByCollections = await Promise.all(promisesForPhotos);
    const result = [];

    photosByCollections.forEach((photos, index) => {
        const {place, _id: collectionId, title} = collections[index];

        result.push({
            place, 
            collectionId, 
            title,
            photos,
        });
    }); 
    
    return result;
};

photoCollectionSchema.statics.createNew = async function({photos, title, place}) {
    console.log('photos', photos);

    const newCollection = new this({title, place});
    const collectionId = newCollection.id;

    const newPhotos = photos.map(({path}) => ({path, collectionId}));

    return Photo.insertMany(newPhotos)
        .then(photos => photos.map((photo) => photo.id))
        .then(photoIds => {
            newCollection.photoIds = photoIds;
            return newCollection.save();
        });
};

const PhotoCollection = mongoose.model('PhotoCollection', photoCollectionSchema);

module.exports = {
    model: PhotoCollection,
    schema: photoCollectionSchema,
};