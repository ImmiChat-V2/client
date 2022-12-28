import { FormEvent } from "react";
import {
  Divider,
  Box,
  Dialog,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Dropdown } from "../../../shared/components";
import { languageArray } from "../../../shared/types/Language";
import { useForm } from "../../../shared/hooks";
import { RegisterUserModel } from "../models/User.model";

type RegistrationFormModalProps = {
  readonly isOpen: boolean;
  readonly setIsOpen: (value: boolean) => void;
};

const RegistrationFormModal = ({
  isOpen,
  setIsOpen,
}: RegistrationFormModalProps) => {
  const {
    form: { firstName, lastName, email, password, language },
    handleChange,
  } = useForm<RegisterUserModel>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    language: "",
    profilePic: "",
    dateOfBirth: "",
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, width: "432px", px: "16px", py: "10px" }}
      >
        <Box sx={{ pb: "10px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Register
          </Typography>
          <Typography variant="body2">It's quick and easy</Typography>
        </Box>
        <Divider />

        <Box display="flex" justifyContent="space-between">
          <TextField
            required
            label="First Name"
            name="firstName"
            autoFocus
            sx={{ width: "48%", mt: "16px" }}
            value={firstName}
            onChange={handleChange}
          />
          <TextField
            required
            name="lastName"
            label="Last Name"
            type="password"
            sx={{ width: "48%", mt: "16px" }}
            value={lastName}
            onChange={handleChange}
          />
        </Box>
        <TextField
          required
          fullWidth
          label="Email"
          name="email"
          sx={{ mt: "16px" }}
          value={email}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          label="Password"
          name="password"
          sx={{ mt: "16px" }}
          value={password}
          onChange={handleChange}
        />
        <Dropdown
          name="language"
          menuItems={languageArray}
          label="Languages"
          value={language}
          onChange={handleChange}
          sx={{ mt: "16px" }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: "16px" }}
        >
          Register
        </Button>
      </Box>
    </Dialog>
  );
};

export default RegistrationFormModal;
