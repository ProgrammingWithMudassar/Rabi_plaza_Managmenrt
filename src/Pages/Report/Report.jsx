import * as React from 'react';
import {TabContext,TabList,TabPanel} from '@mui/lab';
import {
  Tab,Box,Typography,Table,TableBody,
  TableCell,TableContainer,TableHead,TableRow,Paper,Button,
} from '@mui/material';
import { rows } from '../../Data/DummyData';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';
import { useGetShopsQuery } from '../../Features/API/Api'



const LabTabs = () => {
  const [value, setValue] = React.useState('1');
  const [currentPage, setCurrentPage] = React.useState(1);
  const componentRef = useRef();

  const recordsPerPage = 10;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Filter rows based on r_rent value and calculate total pages
  const filteredRows = rows.filter((row) => row.r_rent !== 0);
  const totalPages = Math.ceil(filteredRows.length / recordsPerPage);

  const start = (currentPage - 1) * recordsPerPage;
  const end = start + recordsPerPage;
  const paginatedRows = filteredRows.slice(start, end);

  //Rows pagiantion 
  const totalRowPages = Math.ceil(rows.length / recordsPerPage);

  const Row_start = (currentPage - 1) * recordsPerPage;
  const Row_end = Row_start + recordsPerPage;
  const Rowsaginated = rows.slice(Row_start, Row_end);


  return (
    <Box>
      <Typography variant="h6" color="initial" mt={1}>
        Report
      </Typography>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="All" value="1" />
              <Tab label="Pending Rent" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pb: 1 }}>
              <ReactToPrint
                trigger={() => <Button>Print</Button>}
                content={() => componentRef.current}
              />
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
                  {Rowsaginated.map((row) => (
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                pt: 2,
              }}
            >
              <Button
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
                sx={{ mr: 2, }}
              >
                <Typography variant="body1" color="initial" sx={{ color: '#fff' }}>Previous Page</Typography>
              </Button>
              <Button
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
              >
                <Typography variant="body1" color="initial" sx={{ color: '#fff' }}>Next Page</Typography>
              </Button>
            </Box>
          </TabPanel>

          <TabPanel value="2">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pb: 1 }}>
              <ReactToPrint
                trigger={() => <Button>Print</Button>}
                content={() => componentRef.current}
              />
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
                  {paginatedRows.map((row) => (
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                pt: 2,
              }}
            >
              <Button
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
                sx={{ mr: 2 }}
              >
                <Typography variant="body1" color="initial" sx={{ color: '#fff' }}>Previous Page</Typography>
              </Button>
              <Button
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
              >
                  <Typography variant="body1" color="initial" sx={{ color: '#fff' }}>Next Page</Typography>
              </Button>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default LabTabs;