import { Grid } from "@mui/material";
import React from "react";
import MiniDrawer from "../navbar/sidebar";
import ResponsiveAppBar from "../navbar/navbar";

const GridLayout = (props) => {
    return (
        <>
            {/* rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} */}
            <Grid container >
                <Grid item xs={12} sx={{}}>
                    <ResponsiveAppBar />
                </Grid>
                <Grid item sx={{}}>
                    <MiniDrawer />
                </Grid>
                <Grid item xs
                    sx={{

                    }}
                >
                    {props.children}

                </Grid>

            </Grid>
        </>
    )
}
export default GridLayout;