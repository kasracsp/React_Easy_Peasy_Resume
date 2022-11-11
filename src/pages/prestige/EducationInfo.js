import React from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryStack = styled(Stack)({
  paddingLeft: "3rem",
  paddingRight: "2rem",
});

const CategoryTypography = styled(Typography)({
  color: "#fff",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "2px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
  "&::after": {
    content: '""',
    width: "306px",
    height: "1px",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
const ContentTypography = styled(Typography)({
  color: "#fff",
  fontFamily: "inter",
  fontWeight: "500",
  textTransform:'capitalize'
});

const EducationInfo = () => {
  const lastEducationState = useSelector((state) => state.lastEducationState);
  return (
    <CategoryStack>
      <CategoryTypography variant="h4">Education</CategoryTypography>
      <ContentTypography variant="body1" sx={{ marginTop: "1rem" }}>
        {/* degree Of studing filed */}
        {lastEducationState.level}, {lastEducationState.study}
      </ContentTypography>
      <ContentTypography variant="body2">
        {lastEducationState.school}, {lastEducationState.city}
      </ContentTypography>

      <ContentTypography variant="body2">
        {lastEducationState.startDate.toLocaleDateString("en-UK", {
          year: "numeric",
          month: "long",
        })}
        -
        {lastEducationState.endDate.toLocaleDateString("en-UK", {
          year: "numeric",
          month: "long",
        })}
      </ContentTypography>

      <ContentTypography variant="caption">
        {/* GPA: 'degree' */}
        GPA: {lastEducationState.gpa}
      </ContentTypography>
    </CategoryStack>
  );
};

export default EducationInfo;
