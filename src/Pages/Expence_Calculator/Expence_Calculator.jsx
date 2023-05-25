import React, { useState } from 'react';
import { Button, Typography, Box, Grid, Card, CardContent, CardActions, Divider } from '@mui/material';

const ExpenseCalculator = () => {
    const [inputFields, setInputFields] = useState([{ firstName: '', secondName: '' }]);

    const handleChange = (index, fieldName, event) => {
        const values = [...inputFields];
        values[index][fieldName] = event.target.value;
        setInputFields(values);
    };

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ firstName: '', secondName: '' });
        setInputFields(values);
    };

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputFields); // Do something with the data
    };

    const renderInputFields = () => {
        return inputFields.map((field, index) => (
            <div key={index} style={{ marginTop: '10px' }}>
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
                <Grid item xs={5}>
                    <Card variant="outlined">
                        <CardContent>
                            <Box mt={2} display='flex' justifyContent="space-between">
                                <Typography variant="h6" fontWeight={600} color="initial">Expence</Typography>
                                <Typography variant="body1" color="initial" fontWeight={600}>60,000</Typography>
                            </Box>
                            <Box mt={2} display='flex' justifyContent="space-between">
                                <Typography variant="h6" fontWeight={600} color="initial">Income</Typography>
                                <Typography variant="body1" color="initial" fontWeight={600}>60,000</Typography>
                            </Box>
                            <Divider
                              variant="fullWidth"
                              orientation="horizontal"
                            />
                        </CardContent>
                        <CardActions>
                            <Button type="submit" sx={{
                                width: '100%', mt: 4,
                                backgroundColor: '#096AFF',
                                boxShadow: '0 3px 5px 2px rgba(9, 106, 255, .3)',
                                ':hover': {
                                    backgroundColor: '#096AFF',
                                    border: "1px solid #096AFF"
                                },
                            }}>
                                Calculate Expense
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>


        </div>
    );
};

export default ExpenseCalculator;