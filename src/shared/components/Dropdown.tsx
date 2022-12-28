import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

type DropdownProps = {
  readonly label: string;
  readonly menuItems: string[];
  readonly value: string;
  readonly onChange: (event: SelectChangeEvent) => void;
  readonly sx: Record<string, string>;
  readonly name: string;
};

const Dropdown = ({
  label,
  menuItems,
  value,
  name,
  onChange,
  sx,
}: DropdownProps) => {
  return (
    <FormControl fullWidth sx={sx}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select-label"
        value={value}
        label={label}
        name={name}
        onChange={onChange}
      >
        {menuItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
