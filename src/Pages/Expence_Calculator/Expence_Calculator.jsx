import React, { useState } from 'react';
import { Button, Typography ,Box} from '@mui/material';

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
                    type="text"
                    value={field.secondName}
                    onChange={(event) => handleChange(index, 'secondName', event)}
                    placeholder="Second Name"
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
            <form onSubmit={handleSubmit}>
                {renderInputFields()}
                <Button type="button" onClick={() => handleAddFields()} sx={{ mt: 2 }}>
                    Add Field
                </Button>
                <br />

                <Box mt={2}>
                    <Typography variant="body1" color="initial">This Month Income</Typography>
                </Box>
                <Button type="submit" sx={{
                    width: '200px', mt: 4,
                    backgroundColor: '#096AFF',
                    boxShadow: '0 3px 5px 2px rgba(9, 106, 255, .3)',
                    ':hover': {
                        backgroundColor: '#096AFF',
                        border: "1px solid #096AFF"
                    },
                }}>
                    Calculate Expense
                </Button>
            </form>
        </div>
    );
};

export default ExpenseCalculator;