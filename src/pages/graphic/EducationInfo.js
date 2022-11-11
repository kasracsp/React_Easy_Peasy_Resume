import React from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryStack = styled(Stack)({ 
  paddingLeft: "3rem",
  paddingRight: "5rem",
});

const CategoryTypography = styled(Typography)({
  color: "#2c3f4e",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "1px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
  "&::before": {
    content: '""',
    width: "100%",
    height: "3px",
    backgroundColor: "#2c3f4e",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
const ContentTypography = styled(Typography)({
  color: "#2c3f4e",
  fontFamily: "inter",
  fontWeight: "500",
  textTransform: "uppercase",
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
