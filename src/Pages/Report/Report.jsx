import React, { useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useGetShopsQuery } from "../../Features/API/Api.js";
import ReactToPrint from "react-to-print";
import { faBackward, faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Report = () => {
  const [responseData, setResponseData] = useState([]);
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState("");
  // useEffect(() => {
  //   const { data, error, isLoading, refetch } = useGetShopsQuery();
  //   setData(data);
  //   setError(error);
  //   setIsLoading(isLoading);
  //   console.log(data);
  // }, []);
  const { data, error, isLoading, refetch } = useGetShopsQuery();
  console.log(data);
  const componentRef = useRef();
  let paidMonths = [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const pageStyle = `{ size: 3in 4in }`;

  return (
    <>
      <Box mr={2}>
        <Box display="flex" justifyContent="space-between" py={2}>
          <Typography variant="body1" color="initial"></Typography>
          <Box>
            <ReactToPrint
              trigger={() => (
                <Button sx={{ mr: 2 }}>
                  <FontAwesomeIcon icon={faFileInvoice} />
                  <span style={{ marginLeft: "7px" }}> Generate Report </span>
                </Button>
              )}
              // pageStyle={pageStyle}
              content={() => componentRef.current}
            />
          </Box>
        </Box>
      </Box>
      <Box ref={componentRef}>
        <>
          <TableContainer component={Paper} sx={{ width: "100%" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Shop No</TableCell>
                  <TableCell align="right">January</TableCell>
                  <TableCell align="right">February</TableCell>
                  <TableCell align="right">March</TableCell>
                  <TableCell align="right">April</TableCell>
                  <TableCell align="right">May</TableCell>
                  <TableCell align="right">June</TableCell>
                  <TableCell align="right">July</TableCell>
                  <TableCell align="right">August</TableCell>
                  <TableCell align="right">September</TableCell>
                  <TableCell align="right">October</TableCell>
                  <TableCell align="right">November</TableCell>
                  <TableCell align="right">December</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.shops.map((item) => {
                  paidMonths = [];

                  if (item) {
                    const months = [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ];

                    const monthsInNumbers = [];
                    const zero_remaining_charges_date =
                      item.zero_remaining_charges_date;
                    const allMonthsPaidDate = new Date(
                      zero_remaining_charges_date
                    );
                    const zero_remaining_charges_month =
                      allMonthsPaidDate.getMonth();
                    item.rent.map((item) => {
                      const rentPaidDateString = item.rent_paid_date;

                      const rentPaidDate = new Date(rentPaidDateString);
                      const month = rentPaidDate.getMonth() + 1;
                      console.log("actual output" + "" + month);

                      console.log(monthsInNumbers);
                      console.log(zero_remaining_charges_month);
                      if (month >= 1 && month <= 12) {
                        paidMonths.push(months[month - 1]);
                        monthsInNumbers.push(month - 1);
                      }
                    });

                    if (
                      item.shop_remaining_rent == 0 ||
                      paidMonths.length > 0
                    ) {
                      for (
                        let i = monthsInNumbers[0];
                        i <= zero_remaining_charges_month;
                        i++
                      ) {
                        paidMonths.push(months[i]);
                      }
                    }
                  }
                  return (
                    <TableRow>
                      <TableCell>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {item.shopNumber}
                        </Typography>
                      </TableCell>

                      <TableCell align="right">
                        {paidMonths.includes("January") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("February") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("March") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("April") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("May") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("June") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("July") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("August") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("September") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("October") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("November") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {paidMonths.includes("December") ? (
                          <Typography className="PaidStatus">Paid</Typography>
                        ) : (
                          <Typography className="UnpaidStatus">
                            Unpaid
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </Box>
    </>
  );
};

export default Report;
