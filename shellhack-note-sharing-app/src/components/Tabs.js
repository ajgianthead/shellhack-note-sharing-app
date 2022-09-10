import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Tabs.css";
import { Button } from "@mui/material";
import Note from "./Note";

export default function Tabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <Button style={{ backgroundColor: "green", color: "white" }}>
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
    </div>
  );
}
