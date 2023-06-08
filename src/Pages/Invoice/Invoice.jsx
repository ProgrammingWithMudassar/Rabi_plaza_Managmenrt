import React from 'react'
import ReactToPrint from 'react-to-print';
import { Button, Box, Typography, Grid, Divider } from '@mui/material';
import { faBackward, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Invoice = () => {

  const goBack = () => {
    window.history.go(-1);
  };
  return (
    <>
      <Box mr={2}>
        <Box display='flex' justifyContent='space-between' py={2}>
          <h2>Shop Rental:<span style={{ color: "#FF8E53" }}> sdgfsd</span></h2>
          <Box>
            <ReactToPrint
              trigger={() => <Button sx={{ mr: 2 }}><FontAwesomeIcon icon={faFileInvoice} /><span style={{ marginLeft: "7px" }}> Generate Bill</span></Button>}
              content={() => componentRef.current}
            />
            <Button onClick={goBack}>  <FontAwesomeIcon icon={faBackward} /> <span style={{ marginLeft: "7px" }}> Go Back</span></Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Invoice