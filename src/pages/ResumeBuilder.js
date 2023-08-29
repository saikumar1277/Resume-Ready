import React, { useState } from "react";
import Box from "@mui/material/Box";
import { BiLogoAmazon } from "react-icons/bi";
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
import { Link, Element } from "react-scroll";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  faPlus,
  faUser,
  faUserGraduate,
  faScrewdriverWrench,
  faBriefcase,
  faDiagramProject,
  faMedal,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import ResumePreview from "./ResumePreview";
import DownloadPDF from "./DownloadPDF";
import { useDispatch } from "react-redux";
import {
  saveName,
  saveGmail,
  saveLinkedin,
  saveGithub,
  savePhoneNumber,
} from "../features/resumeSlice";
import { useSelector } from "react-redux";
const ResumeBuilder = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "name") {
      dispatch(saveName(value));
    } else if (name == "gmail") {
      dispatch(saveGmail(value));
    } else if (name == "github") {
      dispatch(saveGithub(value));
    } else if (name == "linkedin") {
      dispatch(saveLinkedin(value));
    } else if (name == "phonenumber") {
      dispatch(savePhoneNumber(value));
    }
  };

  const nav_icons = [
    {
      index: 1,
      icon: <FontAwesomeIcon icon={faUser} style={{ color: "black" }} />,
      name: "Profile",
    },
    {
      index: 2,
      icon: <FontAwesomeIcon icon={faUserGraduate} />,
      name: "Education",
    },
    {
      index: 3,
      icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
      name: "Skills",
    },
    {
      index: 4,
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      name: "Experience",
    },
    {
      index: 5,
      icon: <FontAwesomeIcon icon={faDiagramProject} />,
      name: "Projects",
    },
    {
      index: 6,
      icon: <FontAwesomeIcon icon={faMedal} />,
      name: "Awards",
    },
    {
      index: 7,
      icon: <FontAwesomeIcon icon={faShield} />,
      name: "Certificates",
    },
  ];

  return (
    <>
      <Stack direction="row">
        <Box
          sx={{
            height: "100vh",
            width: 80,
            backgroundColor: "#fff",
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            position: "sticky",
          }}
        >
          <Box>
            <Stack
              direction="column"
              alignItems="center"
              sx={{ width: "100%" }}
              spacing={3}
            >
              <Box
                sx={{
                  background: "red",
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                }}
              >
                {/* <Stack direction="column" alignItems="center" sx={{width:'100%'}} spacing={3}>
                            <BiLogoAmazon style={{alignItems:'center',paddingTop:'20px'}}/>
                        </Stack> */}
              </Box>
              <Divider variant="middle" />
              <Stack spacing={3}>
                {nav_icons.map((icon) => (
                  <Link to="targetDiv" smooth={true} duration={500}>
                    <Tooltip title={icon.name} placement="right" arrow>
                      <IconButton key={icon.index}>{icon.icon}</IconButton>
                    </Tooltip>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* <Scrollbars
        autoHide
        autoHideTimeout={1000} 
        autoHideDuration={200} 
        style={{ width: 300, height: 400 }}
        ></Scrollbars> */}

        <Box
          sx={{
            width: 280,
            height: "100vh",
            overflow: "auto",
            backgroundColor: "#F8FAFF",
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
          spacing={2}
        >
          <style>
            {`
                /* Decrease the size of the scrollbar */
                ::-webkit-scrollbar {
                    
                    width: 4px; /* Adjust this value to your preference */
                }

                ::-webkit-scrollbar-thumb {
                    
                    background-color: #bbceed; /* Color of the scrollbar thumb */
                }
                ::-webkit-scrollbar-thumb {
                    
                    height: 4px; /* Color of the scrollbar thumb */
                }

                ::-webkit-scrollbar-track {
                    
                    background-color: #fff; /* Color of the scrollbar track */
                }
                `}
          </style>
          <Stack spacing={3}>
            <Box sx={{ height: "100%" }} spacing={2}>
              <Stack textAlign="center" spacing={2}>
                <Box sx={{ paddingTop: "30px" }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    Profile
                  </Typography>
                  <Box>
                    <TextField
                      style={{ paddingBottom: "15px" }}
                      label="Name"
                      name="name"
                      value={useSelector((state) => state.name)}
                      onChange={handleInputChange}
                      color="info"
                      variant="standard"
                      focused
                    />
                    <TextField
                      style={{ paddingBottom: "15px" }}
                      label="Gmail"
                      type="email"
                      name="gmail"
                      value={useSelector((state) => state.gmail)}
                      onChange={handleInputChange}
                      color="info"
                      variant="standard"
                      focused
                    />
                    <TextField
                      style={{ paddingBottom: "15px" }}
                      label="Phone"
                      color="info"
                      name="phonenumber"
                      value={useSelector((state) => state.phonenumber)}
                      onChange={handleInputChange}
                      variant="standard"
                      focused
                    />
                    <TextField
                      style={{ paddingBottom: "15px" }}
                      label="LinkedIn URL"
                      name="linkedin"
                      value={useSelector((state) => state.linkedin)}
                      onChange={handleInputChange}
                      color="info"
                      variant="standard"
                      focused
                    />
                    <TextField
                      style={{ paddingBottom: "15px" }}
                      label="GitHub URL"
                      name="github"
                      value={useSelector((state) => state.github)}
                      onChange={handleInputChange}
                      color="info"
                      variant="standard"
                      focused
                    />
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Education />
            <Experience />
            <Skills />
            <Projects />
          </Stack>
        </Box>
        <DownloadPDF
          name={useSelector((state) => state.name)}
          gmail={useSelector((state) => state.gmail)}
          linkedin={useSelector((state) => state.linkedin)}
          github={useSelector((state) => state.github)}
          phonenumber={useSelector((state) => state.phonenumber)}
          education={useSelector((state) => state.education)}
          projects={useSelector((state) => state.projects)}
          experience={useSelector((state) => state.experience)}
          skills={useSelector((state) => state.skills)}
        />
      </Stack>
    </>
  );
};

export default ResumeBuilder;
