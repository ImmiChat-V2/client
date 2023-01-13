import Axios from "axios";

const uploadMedia = async (files: FileList) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "ds2dkkvk");

  try {
    const {
      data: { version, publicId, format },
    } = await Axios.post(process.env.REACT_APP_CLOUDINARY_URL || "", formData);
    const media = `v${version}/${publicId}.${format}`;
    return media;
  } catch (error) {
    console.error(error);
  }
};

export default uploadMedia;
