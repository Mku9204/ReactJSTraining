import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
    {
        value: null,
        label: "- Choose a country -",
    },
    {
        value: "ESP",
        label: "Spain",
    },
    {
        value: "ENG",
        label: "England",
    },
    {
        value: "JP",
        label: "Japan",
    },
    {
        value: "RUS",
        label: "Russia",
    },
];

export default function SelectTextFields() {
    const [place, setPlace] = React.useState("");

    const handleChange = (event) => {
        setPlace(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Choose Place"
                    value={place}
                    onChange={handleChange}
                    // helperText="Please select your destination"
                    sx={{ color: "blue" }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-date"
                    select
                    type="date"
                    label="Check in date"
                    value={place}
                    onChange={handleChange}
                    // helperText="Please select your destination"
                    sx={{ color: "blue" }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Choose Place"
                    value={place}
                    onChange={handleChange}
                    // helperText="Please select your destination"
                    sx={{ color: "blue" }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Choose Place"
                    value={place}
                    onChange={handleChange}
                    // helperText="Please select your destination"
                    sx={{ color: "blue" }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          value={place}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField> */}
            </div>
        </Box>
    );
}