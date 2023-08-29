import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Divider,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  TextareaAutosize,
  Tooltip,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ShowEducation from "./ShowEducation";
import { useDispatch } from "react-redux";
import { saveEducation } from "../../features/resumeSlice";
import { nanoid } from "@reduxjs/toolkit";

const Education = () => {
  const [openEducation, setOpenEducation] = useState(false);
  const handleOpenEducation = () => setOpenEducation(true);
  const handleEducationClose = () => setOpenEducation(false);

  const [education, setEducation] = useState({ id: null });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEducation((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    dispatch(saveEducation(education));
    setEducation({});
    handleEducationClose();
  };
  const handleEdit = (edu) => {
    console.log("edu", edu);
    setEducation(edu);
    handleOpenEducation();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={{ height: "100%" }} spacing={2}>
      <Stack textAlign="center" spacing={2}>
        <Box sx={{ paddingTop: "30px" }}>
          <Stack
            direction="row"
            sx={{ marginLeft: "1rem", marginRight: "1rem" }}
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              Education
            </Typography>
            <Button
              onClick={handleOpenEducation}
              style={{ fontWeight: "bold" }}
            >
              <FontAwesomeIcon icon={faPlus} style={{ paddingRight: "10px" }} />
              Add
            </Button>
          </Stack>
          <Divider light />
          <ShowEducation handleEdit={handleEdit} />
          <Box>
            <Modal
              open={openEducation}
              onClose={handleEducationClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  style={{ textAlign: "center", fontWeight: "bold" }}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Education
                </Typography>
                <Divider />
                <Box style={{ paddingBottom: "15px" }}></Box>

                <TextField
                  style={{ paddingBottom: "15px", width: "100%" }}
                  label="University"
                  color="info"
                  variant="standard"
                  name="university"
                  value={education.university}
                  onChange={handleInputChange}
                  focused
                />
                <TextField
                  style={{ paddingBottom: "15px", width: "100%" }}
                  label="Degree"
                  color="info"
                  variant="standard"
                  name="degree"
                  value={education.degree}
                  onChange={handleInputChange}
                  focused
                />

                <TextField
                  style={{ paddingBottom: "15px", width: "100%" }}
                  label="Field Of Study"
                  color="info"
                  name="fieldofstudy"
                  value={education.fieldofstudy}
                  onChange={handleInputChange}
                  variant="standard"
                  focused
                />
                <TextField
                  style={{ paddingBottom: "15px", width: "100%" }}
                  label="GPA"
                  type="number"
                  color="info"
                  name="gpa"
                  value={education.gpa}
                  onChange={handleInputChange}
                  variant="standard"
                  focused
                />
                <TextField
                  style={{ paddingBottom: "15px", width: "100%" }}
                  label="End Date / Expected"
                  type="date"
                  color="info"
                  name="enddate"
                  value={education.enddate}
                  onChange={handleInputChange}
                  variant="standard"
                  focused
                />
                <TextField
                  style={{ paddingBottom: "15px", width: "100%" }}
                  label="Relevent Course Work"
                  type=""
                  color="info"
                  name="coursework"
                  value={education.coursework}
                  onChange={handleInputChange}
                  variant="standard"
                  focused
                />
                <Button
                  style={{ float: "right" }}
                  variant="contained"
                  onClick={handleAdd}
                >
                  Save
                </Button>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Education;
