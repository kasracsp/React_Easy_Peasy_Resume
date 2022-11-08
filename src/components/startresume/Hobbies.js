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
import {setHobbies,clearHobbies} from '../../redux/hobbies/HobbiesAction'
import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

const Hobbies = () => {
  const dispatch = useDispatch();
  const hobbiesState = useSelector((state) => state.hobbiesState);
  const [hobbiesHolder, setHobbiesHolder] = useState([]);
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState(false);
  const addHobbie = () => {
    if (value.trim()) {
      setHobbiesHolder([...hobbiesHolder, value]);
      setValue("");
      setSaved(false);
      dispatch(clearHobbies());
    }
  };
  const deletehobbie = (hobbie) => {
    setHobbiesHolder(hobbiesHolder.filter((item) => item !== hobbie));
    setSaved(false);
    dispatch(clearHobbies());
  };
  const handleSubmit = () => {
    if (hobbiesHolder.length > 0) {
      dispatch(setHobbies(hobbiesHolder));
      setSaved(true);
    }
  };
  const handleClearAll = () => {
    dispatch(clearHobbies());
    setHobbiesHolder([]);
    setSaved(false);
  };
  useEffect(()=>{
    setHobbiesHolder(hobbiesState.hobbies)
  },[])

  return (
    <Stack spacing={2}>
      {hobbiesHolder.length >= 10 && (
        <Alert severity="warning">
          You reached the maximum number of interests and activities
        </Alert>
      )}
      {hobbiesHolder.length > 0 && (
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          {hobbiesHolder.map((hobbie, index) => (
            <Chip
              key={index}
              label={hobbie}
              color="primary"
              sx={{ margin: "0.1rem" }}
              onDelete={() => deletehobbie(hobbie)}
            />
          ))}
        </Stack>
      )}
      <Stack>
      {hobbiesHolder.length < 10 && (
        <TextField
          label="Your interest or activitie"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={addHobbie}>
                  <AddBoxIcon color="primary" sx={{ fontSize: "2rem" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />)}
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

export default Hobbies;
