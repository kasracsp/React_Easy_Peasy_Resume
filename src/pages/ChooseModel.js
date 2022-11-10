import React, { useEffect } from "react";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SecondNavbar from "../components/SecondNavbar";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    src: "https://www.uplooder.net/img/image/27/7a3895c3b9a908f523f1b0aab1b17301/Graphic.png",
    path: "graphicface",
  },
  {
    id: 2,
    src: "https://www.uplooder.net/img/image/50/a06cffdd1dbde86d3eddc28697d0aa5b/Prestige.png",
    path: "prestigeface",
  },
  {
    id: 3,
    src: "https://www.uplooder.net/img/image/3/b67254180a92eaaadc3bbcdee901283c/Recommended.png",
    path: "recommendedface",
  },
  {
    id: 4,
    src: "https://www.uplooder.net/img/image/33/e33549cce31ad27a68d5557a4049c7b0/Special.png",
    path: "specialface",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "250px",
  aspectRatio: "3/4",
  margin: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  "&:hover div": {
    opacity: "0.6",
  },
  "&:hover img": {
    transform: "scale(1.3)",
  },
  "&:hover h3": {
    opacity: "1",
  },
}));
const ImageSrc = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "-1",
  transition: "400ms",
  transformOrigin: "top left",
}));
const ImageOverlay = styled(Stack)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "0",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  opacity: "0",
  transition: "400ms",
}));
const ImageText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  left: 0,
  right: 0,
  bottom: "2rem",
  zIndex: "0",
  color: theme.palette.primary.contrastText,
  opacity: "0",
  textAlign: "center",
  fontFamily: "placard",
  textTransform: "capitalize",
  transition: "400ms",
}));

const ChooseModel = () => {
  const personalDetailsState = useSelector(
    (state) => state.personalDetailsState
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (personalDetailsState.firstName === "") {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    personalDetailsState.firstName !== "" && (
      <SecondNavbar>
        <Stack
          sx={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontFamily: "placard",
              textTransform: "capitalize",
              fontSize: { xs: "1.6rem", sm: "2.5rem" },
              marginBottom: "2rem",
            }}
          >
            choose your favorite template
          </Typography>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              flexFlow: "row wrap",
              width: "100%",
            }}
          >
            {templates.map((template) => (
              <ImageButton
                focusRipple
                component={Link}
                to={`/${template.path}`}
                key={template.id}
              >
                <ImageSrc src={template.src} alt={template.path} />
                <ImageOverlay></ImageOverlay>
                <ImageText variant="h3">choose this template</ImageText>
              </ImageButton>
            ))}
          </Stack>
        </Stack>
      </SecondNavbar>
    )
  );
};

export default ChooseModel;
