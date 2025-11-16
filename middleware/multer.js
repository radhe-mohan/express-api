import multer from 'multer';

export const singleUpload = (destinationPath, fieldName = "image") => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, destinationPath)
        },
        filename: function (req, file, cb) {
            const ext = file.originalname.split('.').pop();
            const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`;
            cb(null, unique);
        }
    })

    return multer({ storage: storage }).single(fieldName);
}








