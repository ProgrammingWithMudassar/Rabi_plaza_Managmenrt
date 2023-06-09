import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Divider,
  TextField,
} from "@mui/material";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const ExpenseCalculator = () => {
  const currentDate = new Date();
  const [inputFields, setInputFields] = useState([
    { firstName: "", secondName: 0, date: "" },
  ]);
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const [totalRevenue, setTotalRevenue] = useState(0);
  const componentRef = useRef();
  const [expenses, setExpenses] = useState([]);
  const [month, setMonth] = useState([]);
  const [dateInNumbers, setDateInNumbers] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [showAllExpensesTable, setShowAllExpensesTable] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getallexpenses`)
      .then((response) => {
        // response.data.expenses.map((expense)=>{
        //         setExpenses(expense)

        // })
        setExpenses(response.data.expenses);
        setShowAllExpensesTable(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addExpense = (date, name, amount) => {
    if (expenseName == "") {
      alert("Expense Name Is Required");
    }
    if (amount == "") {
      alert("Amount Is Required");
    }
    if (date == "") {
      alert("Date Is Required");
    }
    if (description == "") {
      alert("Description Is Required");
    }
    axios
      .post("http://localhost:8080/api/addexpense", {
        date,
        expenseName: name,
        amount,
        description,
      })
      .then(() => {
        console.log("Expense Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getexpenses = (filterDate) => {
    axios
      .get(`http://localhost:8080/api/getexpenses/${filterDate}`)
      .then((response) => {
        // if(response.data.expenses[0]<=0){
        //     setExpenses('')
        // }

        if (response.data.expenses.length === 0) {
          setExpenses("");
          setShowAllExpensesTable(false);
        }
        setExpenses(response.data.expenses[0]);
        setShowAllExpensesTable(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ firstName: "", secondName: 0, date: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addExpense(date, expenseName, amount);
    const totalRev = 60000; // Assuming the income amount is fixed at 60,000

    // Calculate total expense
    let totalExp = 0;
    inputFields.forEach((field) => {
      totalExp += parseFloat(field.secondName);
    });

    const result = (totalRev - totalExp).toFixed(2);
    setTotalRevenue(result);
    window.location.reload(true);
  };
  const calculateTotalRevenue = () => {
    let totalRevenue = 0;
    inputFields.forEach((field) => {
      totalRevenue += parseFloat(field.secondName);
    });
    return totalRevenue.toFixed(2);
  };

  console.log("State Expenses" + expenses);
  const renderInputFields = () => {
    return inputFields.map((field, index) => (
      <div key={index}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            value={expenseName}
            onChange={(event) => setExpenseName(event.target.value)}
            placeholder="Expense Name"
            className="e_input"
          />
          <input
            type="Number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Amount"
            className="e_input"
            style={{ marginLeft: "10px" }}
          />

          <input
            type="date"
            id="date"
            className="e_input"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <TextField
          fullWidth
          multiline
          rows={4}
          sx={{ ml: 1, mt: 1 }}
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {inputFields.length > 1 && (
          <Button
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={() => handleRemoveFields(index)}
          >
            Remove
          </Button>
        )}
      </div>
    ));
  };

  return (
    <div>
      <Typography variant="h6" color="initial" my={2}>
        Expense Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit}>
            {renderInputFields()}
            <Button
              type="button"
              onClick={() => {
                addExpense(date, expenseName, amount, description);
                window.location.reload(true);
              }}
              sx={{ mt: 2 }}
            >
              Add Field
            </Button>
            <br />
          </form>
        </Grid>
      </Grid>

      <input
        type="date"
        id="date"
        className="input"
        style={{ marginTop: 14, width: "30%" }}
        value={filterDate}
        onChange={(event) => {
          setFilterDate(event.target.value);
          getexpenses(event.target.value);
        }}
      />

      {!expenses && <Typography>No Expenses On This Date</Typography>}
      {expenses && (
        <>
          {filterDate && <Typography>Date : {filterDate}</Typography>}
          {!showAllExpensesTable && (
            <TableContainer
              component={Paper}
              sx={{
                maxWidth: 650,
                mt: 1,
              }}
            >
              <Box
                sx={{
                  height: 250,
                }}
              >
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Expense</TableCell>
                      <TableCell align="left">Description</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {expenses &&
                      expenses.items &&
                      expenses.items.map((item) => (
                        <TableRow
                          key={item._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {item.expenseName}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {item.description}
                          </TableCell>
                          <TableCell align="right">{item.amount}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Box>
            </TableContainer>
          )}

          {/* {
                expenses.map((item)=>{
                    console.log(item)
                   item.items.map((item)=>{
                    console.log(item.expenseName)
                    return(
                        <Typography>{item.expenseName}</Typography>
                        
                    )
                   })
                    
                })
            } */}

          {showAllExpensesTable && (
            <TableContainer
              component={Paper}
              sx={{
                maxWidth: 650,
                mt: 1,
              }}
            >
              <Box
                sx={{
                  height: 250,
                }}
              >
                {expenses.map((item) => {
                  return (
                    <>
                      <Typography
                        fontWeight={"bold"}
                        sx={{ backgroundColor: "#f28c51" }}
                      >
                        Date: {item.date}
                      </Typography>
                      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">Expense</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="right">Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {item.items &&
                            item.items.map((item) => (
                              <TableRow
                                key={item._id}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {item.expenseName}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                  {item.description}
                                </TableCell>
                                <TableCell align="right">
                                  {item.amount}
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </>
                  );
                })}
              </Box>
            </TableContainer>
          )}
        </>
      )}
    </div>
  );
};

export default ExpenseCalculator;
