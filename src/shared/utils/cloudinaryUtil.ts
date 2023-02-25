import Axios from "axios";

const {
  REACT_APP_CLOUDINARY_URL,
  REACT_APP_IMAGE_URL,
  REACT_APP_UPLOAD_PRESET,
} = process.env;

const cloudinaryUrl = REACT_APP_CLOUDINARY_URL || "";
const uploadPreset = REACT_APP_UPLOAD_PRESET || "";
const imageUrl = REACT_APP_IMAGE_URL || "";

export const uploadMedia = async (file: Blob): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const {
      data: { version, public_id, format },
    } = await Axios.post(cloudinaryUrl, formData, {
      withCredentials: false,
    });
    const media = `v${version}/${public_id}.${format}`;
    return media;
  } catch (error) {
    console.error(error);
    return String(error);
  }
};

export const getSecureUrl = (value: string) => imageUrl + value;
