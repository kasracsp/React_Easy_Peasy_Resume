import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryStack = styled(Stack)({
  paddingBottom: "1rem",
  borderBottom: "3px solid #1B1E2F",
});

const CategoryTypography = styled(Typography)({
  color: "#1B1E2F",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "1px",
  marginTop: "2rem",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
});

const ContentTypography = styled(Typography)({
  color: "#1B1E2F",
  fontFamily: "inter",
  fontWeight: "500",
  textTransform: "uppercase",
});

const WorkExprienceInfo = () => {
  const workExprienceState = useSelector((state) => state.workExprienceState);
  return (
    workExprienceState.workExpriences.length > 0 && (
      <CategoryStack>
        <CategoryTypography variant="h4">work exprience</CategoryTypography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
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
                  sx={{ width: "100%" }}
                  primary={
                    <Stack
                      direction="row"
                      sx={{
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <ContentTypography variant="h6">
                        {exprience.company}
                      </ContentTypography>
                      <ContentTypography
                        sx={{
                          color: "#fff",
                          backgroundColor: "#1B1E2F",
                          clipPath:
                            "polygon(10% 0%, 100% 1%, 100% 100%, 10% 100%, 0% 50%)",
                          paddingY: "0.2rem",
                          paddingLeft: "1rem",
                          paddingRight: "0.5rem",
                          minWidth: "12rem",
                        }}
                      >
                        {exprience.startDate
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
                    </Stack>
                  }
                  secondary={
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#1B1E2F",
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
                    <Typography variant="body1" sx={{ color: "#1B1E2F" }}>
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
