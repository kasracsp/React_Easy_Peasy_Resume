import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Stack } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { useNavigate, Link } from "react-router-dom";
import GraphicPDF from "./GraphicPDF";
import SecondNavbar from "../../components/SecondNavbar";

const GraphicFace = () => {
  const personalDetailsState = useSelector(
    (state) => state.personalDetailsState
  );
  const navigate = useNavigate();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (personalDetailsState.firstName === "") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    personalDetailsState.firstName !== "" && (
      <SecondNavbar printedButton={handlePrint}>
        <Stack
          sx={{
            width: "100%",
            height: { xs: "90vh", md: "110vh", lg: "150vh", xl: "auto" },
            overflow: "hidden",
            marginBottom: { xs: "0", xl: "5rem" },
          }}
        >
          <Stack
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3rem",
            }}
            spacing={5}
          >
            <GraphicPDF ref={componentRef} />
          </Stack>
        </Stack>
      </SecondNavbar>
    )
  );
};

export default GraphicFace;
