import { Box, Typography } from "@mui/material";
import React from "react";
import ChatBubble from "../../util/chatBubble";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import A1 from '../../assests/j1.jpg'
export default function PopChat(props) {

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", p: 2, alignItems: 'center', }}>
                <Typography variant="caption" sx={{ color: "#808080", mb: 3 }}>
                    Yesterday, 10:00pm
                </Typography>
                <ChatBubble
                    bgc="rgb(220, 217, 212)"
                    txtmsg="Good job"
                    dlvr="10:00pm"
                    alignSelf='normal'
                />
                <ChatBubble
                    alignSelf="flex-end"
                    //bkg="linear-gradient(111.3deg, rgb(74, 105, 187) 9.6%, rgb(205, 77, 204) 93.6%)"
                    bkg="#1854a191"
                    clr="white"
                    adjt="flex-end"
                    txtmsg={props.name}
                    dlvr="10:04pm"
                >
                    <DoneAllIcon color="success" fontSize="small" />
                </ChatBubble>
                {/* <ChatBubble
                    bgc="rgb(220, 217, 212)"
                    txtmsg="Up for the trip this weekend?"
                    dlvr="10:06pm"
                />
                <ChatBubble
                    alignSelf="flex-end"
                    bkg="linear-gradient(111.3deg, rgb(74, 105, 187) 9.6%, rgb(205, 77, 204) 93.6%)"
                    clr="white"
                    adjt="flex-end"
                    txtmsg="Sorry! not this weeknd"
                    dlvr="10:09pm"
                >
                    <DoneAllIcon color="success" fontSize="small" />
                </ChatBubble> */}
            </Box>

        </>
    )
}
