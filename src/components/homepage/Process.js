import React, { useRef } from "react";
import useObserver from "../../hooks/useObserver";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const Process = ({ item, itemIndex }) => {
  const elementTarget = useRef();
  const elementObserver = useObserver(elementTarget, 0.7);
  return (
    <ListItem
      ref={elementTarget}
      sx={{
        display: "flex",
        opacity: elementObserver ? "1" : "0",
        transform: elementObserver ? "translate(0)" : "translate(100px)",
        transition: "1000ms",
        transitionDelay:`calc(${itemIndex} * 500ms)`,
        flexDirection: {
          xs: "column",
          xl: "row",
        },
        justifyContent: "flex-start",
        alignItems: { xs: "center", xl: "flex-start" },
        "&:hover .MuiAvatar-root": {
          boxShadow: "0 0 0px 2px #fff",
        },
      }}
    >
      <ListItemIcon>
        <ListItemAvatar>
          <Avatar
            sx={{
              backgroundColor: "background.paper",
              color: "primary.main",
            }}
          >
            {item.id}
          </Avatar>
        </ListItemAvatar>
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant="h6"
            sx={{ textAlign: { xs: "center", xl: "left" } }}
          >
            {item.title}
          </Typography>
        }
        secondary={
          <Typography
            variant="h6"
            sx={{
              textAlign: {
                xs: "center",
                xl: "left",
                fontWeight: "300",
              },
            }}
          >
            {item.description}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default Process;
