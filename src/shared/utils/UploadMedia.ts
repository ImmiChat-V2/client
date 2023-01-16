import Axios from "axios";

const uploadMedia = async (files: FileList) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "ds2dkkvk");

  try {
    const {
      data: { version, public_id, format },
    } = await Axios.post(process.env.REACT_APP_CLOUDINARY_URL || "", formData);
    const media = `v${version}/${public_id}.${format}`;
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const secureUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${media}`;
    return secureUrl;
  } catch (error) {
    console.error(error);
  }
};

export default uploadMedia;
