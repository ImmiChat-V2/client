import { SelectChangeEvent } from "@mui/material";
import { useState, ChangeEvent } from "react";

const useForm = <T extends Partial<T>>(defaultState: T) => {
  const [form, setForm] = useState<T>(defaultState);

  const handleChange = (event: ChangeEvent | SelectChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm(defaultState);
  };

  return {
    form,
    handleChange,
    resetForm,
  };
};

export default useForm;
