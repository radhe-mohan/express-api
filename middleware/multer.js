import multer from 'multer';
import multerS3 from "multer-s3";
import s3 from '../config/s3.js';
import dotenv from "dotenv";
dotenv.config();


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

export const singleUpload_s3 = (destinationPath, fieldName = "image") => {
    const upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: process.env.AWS_BUCKET_NAME,
            acl: "public-read",
            contentType: multerS3.AUTO_CONTENT_TYPE,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                const ext = file.originalname.split('.').pop();
                const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`;
                cb(null, destinationPath + uniqueName);
            },
        }),
    });
    return upload.single(fieldName);
}








