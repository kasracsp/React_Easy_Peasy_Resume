import React from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryTypography = styled(Typography)({
  color: "#1B1E2F",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "1px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
});
const ContentTypography = styled(Typography)({
  color: "#1B1E2F",
  fontFamily: "inter",
  fontWeight: "500",
  textTransform: "uppercase",
});

const EducationInfo = () => {
  const lastEducationState = useSelector((state) => state.lastEducationState);
  return (
    <Stack sx={{ marginTop: "1rem" }}>
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
    </Stack>
  );
};

export default EducationInfo;
