import { useEffect, useState } from "react";

const useImageInput = () => {
  const [selectedFile, setSelectedFile] = useState<Blob>();
  const [preview, setPreview] = useState<any>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const onRemove = () => {
    setPreview(undefined);
    setSelectedFile(undefined);
  };

  return {
    preview,
    selectedFile,
    onSelectFile,
    onRemove,
  };
};

export default useImageInput;
