import Axios from "axios";

const UploadMedia = async (files: FileList) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "ds2dkkvk");

  try {
    const data = await Axios.post(
      process.env.REACT_APP_CLOUDINARY_URL || "",
      formData
    );
    const version = data.data.version;
    const publicId = data.data.publicId;
    const format = data.data.format;
    const media = `v${version}/${publicId}.${format}`;
    return media;
  } catch (error) {
    console.error(error);
  }
};

export default UploadMedia;
