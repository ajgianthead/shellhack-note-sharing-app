import * as React from "react";

import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Tabs.css";
import { Button, Divider, TextField } from "@mui/material";
import Note from "./Note";
import { ref, uploadBytes } from "firebase/storage";
import { storage, db, userID } from "../index";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Tabs() {
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = useState(false);
  const [noteName, setNoteName] = useState("");
  const [decrib, setDescrib] = useState("");
  const [isVisibile, setIsVisibile] = useState(true);
  const [file, setFile] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const uploadFile = () => {
    if (file === "") return;
    const fileRef = ref(storage, `images/${file.name}`);
    uploadBytes(fileRef, file).then(() => {
      alert("File Uploaded");
    });
    setDoc(doc(db, "notes", file.name), {
      name: noteName,
      file_name: file.name,
      describ: decrib,
      isVisibile: isVisibile,
    });
    const userRef = doc(db, "users", userID);
    updateDoc(userRef, {
      notes: arrayUnion(file.name),
    });
  };

  return (
    <div>
      <TabContext value={value} sty>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="tab1">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="My Notes" value="1" />
            <Tab label="Shared Notes" value="2" />
            <Tab label="Recieved Notes" value="3" />
          </TabList>
          <div>
            <Button
              style={{ backgroundColor: "green", color: "white" }}
              onClick={handleOpen}
            >
              + Add a Note
            </Button>
          </div>
        </Box>
        <TabPanel value="1" className="tab">
          <div className="note-container">
            <Note />
          </div>
        </TabPanel>
        <TabPanel value="2" className="tab">
          <div className="note-container">
            <Note />
            <Note />
          </div>
        </TabPanel>
        <TabPanel value="3" className="tab">
          <div className="note-container">
            <Note />
            <Note />
            <Note />
          </div>
        </TabPanel>
      </TabContext>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflowY: "scroll" }}
      >
        <Box sx={style}>
          <h2 style={{ margin: "0", marginBottom: "20px" }}>
            Add Your Note(s)
          </h2>
          <Divider />

          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            component="label"
          >
            Upload a File
            <input
              type="file"
              hidden
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </Button>
          <p>{file ? file.name : null}</p>
          <Divider />
          <p>Name Your Note(s)</p>
          <TextField
            placeholder="Name"
            onChange={(e) => {
              setNoteName(e.target.value);
            }}
          />
          <p>Describe Your Note(s)</p>
          <TextField
            placeholder="Describe"
            multiline
            rows={"4"}
            style={{ marginBottom: "20px" }}
            onChange={(e) => {
              setDescrib(e.target.value);
            }}
          />
          <Divider />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FormControl>
              <FormLabel>
                <p>Choose Visibility</p>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="public"
                name="radio-buttons-group"
                row
                style={{ marginBottom: "20px" }}
              >
                <FormControlLabel
                  value="public"
                  control={<Radio />}
                  label="Public"
                  onClick={(e) => {
                    setIsVisibile(true);
                  }}
                />
                <FormControlLabel
                  value="private"
                  control={<Radio />}
                  label="Private"
                  onClick={(e) => {
                    setIsVisibile(false);
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: "white",
                color: "red",
                border: "red 1px solid",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: "Blue",
                color: "white",
              }}
              onClick={uploadFile}
            >
              Add Note
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
