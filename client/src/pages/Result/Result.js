import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { fetchPlayerDetails, savePlayerData } from "../../services";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import "./Result.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Result() {
  let query = useQuery();
  const history = useHistory();
  const [playerData, setPlayerData] = useState({
    name: "",
    email: "",
    data: {
      currentPosition: 0,
      path: [],
    },
  });

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

  useEffect(() => {
    const email = query.get("email");
    loadPlayerState(email);
  }, []);

  return (
    <div className="result-page">
      <div className="json-display">
        <h2>Player Details</h2>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell align="center" className="cell">
                  Name
                </TableCell>

                <TableCell align="center" className="cell">
                  {playerData.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className="cell">
                  Email
                </TableCell>

                <TableCell align="center" className="cell">
                  {playerData.email}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <h2>Grid Details</h2>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <b>Coordinates</b>
                </TableCell>
                <TableCell align="center">
                  <b>State</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playerData.data.path.map((step, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {`[${step.coord[0]},${step.coord[1]}]`}
                  </TableCell>
                  <TableCell align="center">{step.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Result;
