import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { disableWorkExprience } from "../redux/workExprience/WorkExprienceAction";
import { enableHobbies } from "../redux/hobbies/HobbiesAction";
import {
  Container,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonalDetails from "../components/startresume/PersonalDetails";
import Skills from "../components/startresume/Skills";
import Project from "../components/startresume/Project";
import LastEducation from "../components/startresume/LastEducation";
import SocialMedia from "../components/startresume/SocialMedia";
import Hobbies from "../components/startresume/Hobbies";
import WorkExprience from "../components/startresume/WorkExprience";
import SecondNavbar from "../components/SecondNavbar";
import { checkAllSectionIsSaved } from "../helper/functions";

const MyAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  color: "grey",
  "&.Mui-expanded": {
    backgroundColor: "transparent",
    color: "black",
  },
  "&:hover.Mui-expanded": {
    backgroundColor: "transparent",
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: "black",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    pointerEvents: "none",
    borderRadius: "50%",
    border: "1px solid",
    borderColor: "transparent",
  },
  "&:hover .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.06),
  },
  "&.MuiSvgIcon-root": {
    width: "1.5rem",
    height: "1.5rem",
  },
}));

const MyTypography = styled(Typography)({
  textTransform: "capitalize",
  width: "50%",
  fontSize: "1.1rem",
});

const StartResume = () => {
  const dispatch = useDispatch();
  const [noWorkExprience, setNoWorkExprience] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const personalDetailsState = useSelector(
    (state) => state.personalDetailsState
  );
  const skillsState = useSelector((state) => state.skillsState);
  const projectsState = useSelector((state) => state.projectsState);
  const lastEducationState = useSelector((state) => state.lastEducationState);
  const socialMediaState = useSelector((state) => state.socialMediaState);
  const hobbiesState = useSelector((state) => state.hobbiesState);
  const workExprienceState = useSelector((state) => state.workExprienceState);
  const handleCheckbox = (event) => {
    setNoWorkExprience(event.target.checked);
    setShowHobbies(false);
    dispatch(disableWorkExprience(event.target.checked));
    dispatch(enableHobbies(true));
  };
  const deleteHobbies = () => {
    setShowHobbies(false);
    dispatch(enableHobbies(true));
  };
  const addHobbies = () => {
    setShowHobbies(true);
    dispatch(enableHobbies(false));
  };
  useEffect(() => {
    if (workExprienceState.isWorkExprienceCompleted === false) {
      setNoWorkExprience(false);
    } else if (workExprienceState.workExpriences.length === 0) {
      setNoWorkExprience(true);
    } else if (workExprienceState.workExpriences.length > 0) {
      setNoWorkExprience(false);
    }
    if (hobbiesState.hobbies.length > 0) {
      setShowHobbies(true);
    }
  }, []);
  return (
    <SecondNavbar
      isEnable={checkAllSectionIsSaved(
        personalDetailsState,
        skillsState,
        projectsState,
        lastEducationState,
        socialMediaState,
        workExprienceState,
        hobbiesState
      )}
    >
        <Container sx={{ marginY: "2rem" }}>
          <Accordion>
            <MyAccordionSummary
              id="personalDetails"
              aria-controls="panel1"
              expandIcon={<ExpandMoreIcon />}
            >
              <MyTypography variant="h6">Personal Details</MyTypography>
              {personalDetailsState.isPersonalDetailsCompleted && (
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  disableRipple
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  saved
                </Button>
              )}
            </MyAccordionSummary>
            <AccordionDetails>
              <PersonalDetails />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <MyAccordionSummary
              id="skills"
              aria-controls="panel5"
              expandIcon={<ExpandMoreIcon />}
            >
              <MyTypography variant="h6">Skills</MyTypography>
              {skillsState.isSkillsCompleted && (
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  disableRipple
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  saved
                </Button>
              )}
            </MyAccordionSummary>
            <AccordionDetails>
              <Skills />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <MyAccordionSummary
              id="projects"
              aria-controls="panel2"
              expandIcon={<ExpandMoreIcon />}
            >
              <MyTypography variant="h6">Projects</MyTypography>
              {projectsState.isProjectsCompleted && (
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  disableRipple
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  saved
                </Button>
              )}
            </MyAccordionSummary>
            <AccordionDetails>
              <Project />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <MyAccordionSummary
              id="lastEducation"
              aria-controls="panel3"
              expandIcon={<ExpandMoreIcon />}
            >
              <MyTypography variant="h6">Last Education</MyTypography>
              {lastEducationState.isLastEducationCompleted && (
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  disableRipple
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  saved
                </Button>
              )}
            </MyAccordionSummary>
            <AccordionDetails>
              <LastEducation />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <MyAccordionSummary
              id="socialMedia"
              aria-controls="panel4"
              expandIcon={<ExpandMoreIcon />}
            >
              <MyTypography variant="h6">Social Media</MyTypography>
              {socialMediaState.isSocialMediaCompleted && (
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  disableRipple
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  saved
                </Button>
              )}
            </MyAccordionSummary>
            <AccordionDetails>
              <SocialMedia />
            </AccordionDetails>
          </Accordion>
          {!noWorkExprience && (
            <Accordion>
              <MyAccordionSummary
                id="workExprience"
                aria-controls="panel6"
                expandIcon={<ExpandMoreIcon />}
              >
                <MyTypography variant="h6">work Exprience</MyTypography>
                {workExprienceState.isWorkExprienceCompleted && (
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    disableRipple
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  >
                    saved
                  </Button>
                )}
              </MyAccordionSummary>
              <AccordionDetails>
                <WorkExprience />
              </AccordionDetails>
            </Accordion>
          )}
          {showHobbies && (
            <Accordion>
              <MyAccordionSummary
                id="hobbies"
                aria-controls="panel7"
                expandIcon={<ExpandMoreIcon />}
              >
                <MyTypography variant="h6">
                  Interests and Activities
                </MyTypography>
                {hobbiesState.isHobbiesCompleted && (
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    disableRipple
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  >
                    saved
                  </Button>
                )}
              </MyAccordionSummary>
              <AccordionDetails>
                <Hobbies />
              </AccordionDetails>
            </Accordion>
          )}
          <Stack>
            <FormControlLabel
              label="I don't have any work exprience"
              control={
                <Checkbox checked={noWorkExprience} onChange={handleCheckbox} />
              }
            />
            {noWorkExprience && !showHobbies && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ width: "fit-content" }}
                onClick={addHobbies}
              >
                Add interests and activities
              </Button>
            )}
            {noWorkExprience && showHobbies && (
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                sx={{ width: "fit-content" }}
                onClick={deleteHobbies}
              >
                Delete interests and activities
              </Button>
            )}
          </Stack>
        </Container>
    </SecondNavbar>
  );
};

export default StartResume;
