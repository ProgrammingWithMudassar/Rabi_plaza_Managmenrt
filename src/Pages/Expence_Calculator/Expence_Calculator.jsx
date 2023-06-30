import React, { useState } from 'react';
import { Button, Typography, Box, Grid, Card, CardContent, CardActions, Divider } from '@mui/material';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';


const ExpenseCalculator = () => {
    const currentDate = new Date();
    const [inputFields, setInputFields] = useState([{ firstName: '', secondName: 0 ,date:''}]);
    const monthName = currentDate.toLocaleString('default', { month: 'long' });
    const [totalRevenue, setTotalRevenue] = useState(0);
    const componentRef = useRef();

    const handleChange = (index, fieldName, event) => {
        const values = [...inputFields];
        values[index][fieldName] = event.target.value;
        setInputFields(values);
    };

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ firstName: '', secondName: 0 });
        setInputFields(values);
    };

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const totalRev = 60000; // Assuming the income amount is fixed at 60,000

        // Calculate total expense
        let totalExp = 0;
        inputFields.forEach((field) => {
            totalExp += parseFloat(field.secondName);
        });

        const result = (totalRev - totalExp).toFixed(2);
        setTotalRevenue(result);
    };
    const calculateTotalRevenue = () => {
        let totalRevenue = 0;
        inputFields.forEach((field) => {
            totalRevenue += parseFloat(field.secondName);
        });
        return totalRevenue.toFixed(2);
    };


    const renderInputFields = () => {
        return inputFields.map((field, index) => (
            <div key={index} style={{ marginTop: '10px', display:'flex' }}>
                <input
                    type="text"
                    value={field.firstName}
                    onChange={(event) => handleChange(index, 'firstName', event)}
                    placeholder="Expense Name"
                    className="e_input"
                />
                <input
                    type="Number"
                    value={field.secondName}
                    onChange={(event) => handleChange(index, 'secondName', event)}
                    placeholder="Amount"
                    className="e_input"
                    style={{ marginLeft: '10px' }}
                />
              
              <input
                type="date"
                id="date"
                className="e_input"
                value={field.date}
                onChange={(event) => handleChange(index, 'date', event)}
                />
            
                {inputFields.length > 1 && (
                    <Button type="button" style={{ marginLeft: '10px' }} onClick={() => handleRemoveFields(index)}>
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
                        <Button type="button" onClick={() => handleAddFields()} sx={{ mt: 2 }}>
                            Add Field
                        </Button>
                        <br />
                    </form>
                </Grid>
                
            </Grid>
        </div>
    );
};

export default ExpenseCalculator;


