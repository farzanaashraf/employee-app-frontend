import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';

function BasicTable() {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    const resp = await fetch(URL);
    return await resp.json();
  };

  useEffect(() => {
    fetchInfo()
      .then(setData);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><BoldText text="Field id"></BoldText></TableCell>
            <TableCell><BoldText text="Name"></BoldText></TableCell>
            <TableCell><BoldText text="Email"></BoldText></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((dataObj) => (
              <TableRow key={dataObj.id}>
                <TableCell>
                  {dataObj.id}
                </TableCell>
                <TableCell>
                  {dataObj.name}
                </TableCell>
                <TableCell>
                  {dataObj.email}
                </TableCell>
              </TableRow>
            ))
          }
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const BoldText = ({text}) => {
  return <Typography sx={{fontWeight: "bold", fontSize: 14}}>{text}</Typography>;
};

const Home = () => {
  return (
    <div>
      <BasicTable/>
    </div>
  )
}

export default Home
