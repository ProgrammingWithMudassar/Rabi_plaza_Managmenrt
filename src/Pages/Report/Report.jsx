import * as React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { rows } from '../../Data/DummyData'
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';


const LabTabs = () => {
  const [value, setValue] = React.useState('1');
  const componentRef = useRef();

  const filteredRows = rows.filter((row) => row.r_rent !== 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Typography variant="h6" color="initial" my={2}>Report</Typography>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="All" value="1" />
              <Tab label="Pending Rent" value="2" />
            </TabList>
          </Box>


          <TabPanel value="1">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pb: 2 }}>
              <ReactToPrint
                trigger={() => <Button>Print</Button>}
                content={() => componentRef.current}
              />
              {/* <Button >Print</Button> */}
            </Box>
            <TableContainer component={Paper} ref={componentRef}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Shop No</TableCell>
                    <TableCell>Rental</TableCell>
                    <TableCell>S. Honor</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Floor</TableCell>
                    <TableCell>S. Date</TableCell>
                    <TableCell>R. Rent</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.Shop_No}</TableCell>
                      <TableCell>{row.rental}</TableCell>
                      <TableCell>{row.S_honor}</TableCell>
                      <TableCell>{row.size}</TableCell>
                      <TableCell>{row.floor}</TableCell>
                      <TableCell>{row.S_date}</TableCell>
                      <TableCell>{row.r_rent}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>


          </TabPanel>
          <TabPanel value="2">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pb: 2 }}>
            <ReactToPrint
                trigger={() => <Button>Print</Button>}
                content={() => componentRef.current}
              />
              {/* <Button >Print</Button> */}
            </Box>
            <TableContainer component={Paper} ref={componentRef}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Shop No</TableCell>
                    <TableCell>Rental</TableCell>
                    <TableCell>S. Honor</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Floor</TableCell>
                    <TableCell>S. Date</TableCell>
                    <TableCell>R. Rent</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.Shop_No}</TableCell>
                      <TableCell>{row.rental}</TableCell>
                      <TableCell>{row.S_honor}</TableCell>
                      <TableCell>{row.size}</TableCell>
                      <TableCell>{row.floor}</TableCell>
                      <TableCell>{row.S_date}</TableCell>
                      <TableCell>{row.r_rent}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>


          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default LabTabs