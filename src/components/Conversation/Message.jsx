import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "./MsgType";

function Message({ menu }) {
  return (
    <Box p={3}>
      <Stack p={3} spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // timeline
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  //img msg
                  return <MediaMsg el={el} menu={menu} />;
                case "doc":
                  //doc
                  return <DocMsg el={el} menu={menu} />;
                case "link":
                  //link
                  return <LinkMsg el={el} menu={menu} />;
                case "reply":
                  //reply
                  return <ReplyMsg el={el} menu={menu} />;

                default:
                  // text msg
                  return <TextMsg el={el} menu={menu} />;
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}

export default Message;
