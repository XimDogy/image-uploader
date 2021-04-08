import mongoose from 'mongoose';

const imageUploadSchema = mongoose.Schema({
    image: String,
    type: String,
    name: String,
    size: String,
});

const UploadImage = mongoose.model('UploadImage', imageUploadSchema);
export default UploadImage;