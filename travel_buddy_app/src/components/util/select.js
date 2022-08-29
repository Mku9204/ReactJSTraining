import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import BasicDatePicker from "./datePicker";
import Button from "./button";
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
                "& .MuiTextField-root": { m: 1, width: "23ch" },
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

                <BasicDatePicker text="check in date" />
                <BasicDatePicker text="check out date" />
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
                <Button text='Search' />
            </div>

        </Box>
    );
}