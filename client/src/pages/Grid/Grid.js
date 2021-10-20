import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { fetchPlayerDetails, savePlayerData } from "../../services";
import "./Grid.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CellItem from "./CellItem";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Grid() {
  let query = useQuery();
  const history = useHistory();
  const [playerData, setPlayerData] = useState({
    name: "",
    email: "",
    data: {
      currentPosition: 0,
      path: [
        { coord: [3, 0], state: "" },
        { coord: [3, 1], state: "" },
        { coord: [3, 2], state: "" },
        { coord: [3, 3], state: "" },
        { coord: [2, 3], state: "" },
        { coord: [1, 3], state: "" },
        { coord: [0, 3], state: "" },
      ],
    },
  });

  useEffect(() => {
    const email = query.get("email");
    loadPlayerState(email);
  }, []);

  const goToLogin = () => {
    history.push("/login");
  };

  const loadPlayerState = (email) => {
    if (!email) {
      goToLogin();
    }
    fetchPlayerDetails(email).then((response) => {
      // handle no data
      if (response) {
        setPlayerData(response);
      } else {
        goToLogin();
      }
    });
  };

  const reloadState = () => {
    setPlayerData(JSON.parse(JSON.stringify(playerData)));
  };

  const moveNextState = () => {
    console.log("Cikc");
    if (playerData.data.currentPosition + 1 < playerData.data.path.length) {
      playerData.data.currentPosition = playerData.data.currentPosition + 1;
    }
    reloadState();
  };

  const movePreState = () => {
    if (playerData.data.currentPosition - 1 >= 0) {
      playerData.data.currentPosition = playerData.data.currentPosition - 1;
    }
    reloadState();
  };

  const addFeedback = (f) => {
    const position = playerData.data.currentPosition;
    playerData.data.path[position].state = f;
    reloadState();
  };

  const submitPlayerDetails = () => {
    savePlayerData(playerData).then((response) => {
      if (response && response.success) {
        history.push(`/result/?email=${playerData.email}`);
      }
    });
  };

  const arr = [...Array(4)].map((u, i) => i);

  return (
    <div className="grid">
      <div className="feedbacksplit">
        <div className="main">
          <div className="grid-container">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  {arr.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {arr.map((column, columnIndex) => {
                        return (
                          <TableCell align="center" className="cell">
                            <CellItem
                              rowIndex={rowIndex}
                              columnIndex={columnIndex}
                              path={playerData.data.path}
                              currentPosition={playerData.data.currentPosition}
                            />
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="bts-container">
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={movePreState}>
                Previous State
              </Button>
              <Button variant="contained" onClick={moveNextState}>
                Next State
              </Button>
              <Button variant="contained" onClick={submitPlayerDetails}>
                Submit
              </Button>
            </Stack>
          </div>
        </div>
        <div className="feedback-container">
          <Stack spacing={2} direction="column">
            <h3>Feedback</h3>
            <Button variant="contained" onClick={() => addFeedback("+")}>
              +
            </Button>
            <Button variant="contained" onClick={() => addFeedback("-")}>
              -
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Grid;
