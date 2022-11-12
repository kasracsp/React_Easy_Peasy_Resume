import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryStack = styled(Stack)({
  paddingLeft: "3rem",
  paddingRight: "2rem",
  marginBottom: "2rem",
});

const CategoryTypography = styled(Typography)({
  color: "#000",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "1px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
  "&::before": {
    content: '""',
    width: "20rem",
    height: "5px",
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
const ContentTypography = styled(Typography)({
  color: "#000",
  fontFamily: "inter",
  fontWeight: "500",
  textTransform: "uppercase",
});

const WorkExprienceInfo = () => {
  const workExprienceState = useSelector((state) => state.workExprienceState);
  return (
    workExprienceState.workExpriences.length > 0 && (
      <CategoryStack>
        <CategoryTypography variant="h5">work exprience</CategoryTypography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "1rem",
            width: "100%",
          }}
        >
          {workExprienceState.workExpriences.map((exprience) => (
            <Stack key={exprience.id} sx={{ width: "100%" }}>
              <ListItem
                disableGutters
                sx={{
                  paddingBottom: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <ListItemText
                  primary={
                    <ContentTypography variant="h6">
                      {exprience.company} | {exprience.startDate
                          .toLocaleDateString("en-UK", {
                            month: "long",
                          })
                          .substring(0, 3)}{" "}
                        {exprience.startDate.toLocaleDateString("en-UK", {
                          year: "numeric",
                        })}
                        -
                        {exprience.endDate
                          .toLocaleDateString("en-UK", {
                            month: "long",
                          })
                          .substring(0, 3)}{" "}
                        {exprience.endDate.toLocaleDateString("en-UK", {
                          year: "numeric",
                        })}
                    </ContentTypography>
                  }
                  secondary={
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#222",
                        fontFamily: "Oswald",
                        fontWeight: "800",
                        fontSize: "1.1rem",
                        textTransform: "capitalize",
                        lineHeight: "0.8",
                      }}
                    >
                      {exprience.role}
                    </Typography>
                  }
                />
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      {exprience.description}
                    </Typography>
                  }
                />
              </ListItem>
            </Stack>
          ))}
        </List>
      </CategoryStack>
    )
  );
};

export default WorkExprienceInfo;
