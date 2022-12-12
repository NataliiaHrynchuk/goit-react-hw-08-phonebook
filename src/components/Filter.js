import { selectFilter } from 'redux/filter/filterSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { Box, TextField } from '@mui/material';
export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const changeFilter = event => {
        dispatch(setFilter(event.currentTarget.value));
    };
    
    return (
        <Box
            sx={{
                display: "flex",
            flexDirection: 'column',
            width: "300px",
            alignItems: 'center',}}
        >
            <label htmlFor="id-filter">
                Find contacts by name
            </label>
            <TextField
                type="text"
                name="filter"
                id="id-filter"
                value={filter}
                onChange={changeFilter}
            ></TextField>
        </Box>
    )
};