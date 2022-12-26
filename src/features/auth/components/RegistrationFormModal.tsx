import {
  Divider,
  Box,
  Dialog,
  TextField,
  Button,
  Typography,
} from "@mui/material";

type RegistrationFormModalProps = {
  readonly isOpen: boolean;
  readonly setIsOpen: (value: boolean) => void;
};

const RegistrationFormModal = ({
  isOpen,
  setIsOpen,
}: RegistrationFormModalProps) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        component="form"
        noValidate
        // onSubmit={handleSubmit}
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
            margin="normal"
            required
            label="First Name"
            name="firstName"
            autoFocus
            sx={{ width: "48%" }}

            //   value={email}
            //   onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            name="lastName"
            label="Last Name"
            type="password"
            sx={{ width: "48%" }}
            //   value={password}
            //   onChange={handleChange}
          />
        </Box>
        <Button type="submit" fullWidth variant="contained" color="success">
          Register
        </Button>
      </Box>
    </Dialog>
  );
};

export default RegistrationFormModal;
