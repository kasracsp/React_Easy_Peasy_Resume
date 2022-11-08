import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSkills, clearSkills } from "../../redux/skills/SkillsAction";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

const Skills = () => {
  const dispatch = useDispatch();
  const skillsState = useSelector((state) => state.skillsState);
  const [skillsHolder, setSkillsHolder] = useState([]);
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState(false);
  const addSkill = () => {
    if (value.trim()) {
      setSkillsHolder([...skillsHolder, value]);
      setValue("");
      setSaved(false);
      dispatch(clearSkills());
    }
  };
  const deleteSkills = (skill) => {
    setSkillsHolder(skillsHolder.filter((item) => item !== skill));
    setSaved(false);
    dispatch(clearSkills());
  };
  const handleSubmit = () => {
    if (skillsHolder.length > 0) {
      dispatch(setSkills(skillsHolder));
      setSaved(true);
    }
  };
  const handleClearAll = () => {
    dispatch(clearSkills());
    setSkillsHolder([]);
    setSaved(false);
  };
  useEffect(()=>{
    setSkillsHolder(skillsState.skills)
  },[])

  return (
    <Stack spacing={2}>
      {skillsHolder.length >= 10 && (
        <Alert severity="warning">
          You reached the maximum number of skills
          {/* You are not allowed to add more than 10 skills */}
        </Alert>
      )}
      {skillsHolder.length > 0 && (
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          {skillsHolder.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              color="primary"
              sx={{ margin: "0.1rem" }}
              onDelete={() => deleteSkills(skill)}
            />
          ))}
        </Stack>
      )}
      <Stack>
        {skillsHolder.length < 10 && (
          <TextField
            label="Skill"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={addSkill}>
                    <AddBoxIcon color="primary" sx={{ fontSize: "2rem" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      </Stack>
      <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          onClick={handleClearAll}
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ width: "fit-content" }}
        >
          clear all
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit}
          startIcon={saved ? <CheckIcon /> : <SaveIcon />}
          disabled={saved ? true : false}
          sx={{
            width: "fit-content",
            "&:disabled": {
              backgroundColor: "success.main",
              color: "success.contrastText",
            },
          }}
        >
          {saved ? "Saved" : "Save"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Skills;
