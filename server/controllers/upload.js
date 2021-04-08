import UploadImage from '../models/imageUpload.js';



export const uploadImage = async (req, res) => {
    const data = req.body;
    try{
        const newImage = new UploadImage(data);
        await newImage.save();
        res.status(201).json(newImage);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }

}

export const getImage = async (req, res) => {
    const { id: _id }  = req.params;
    console.log(_id);

    try {
        const data = await UploadImage.findById(_id);
        console.log(data);
        const base64Image = data.image.split(",")[1];
        const bufferImage = Buffer.from(base64Image, 'base64');
        res.writeHead(200, {
            'Content-Type': data.type,
            'Content-Length': bufferImage.length
        });

        res.end(bufferImage);
    } catch (error) {
        console.log(error);
    }


    
}