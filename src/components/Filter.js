import { selectFilter } from 'redux/filter/filterSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const changeFilter = event => {
        dispatch(setFilter(event.currentTarget.value));
    };
    
    return (
        <div
            display="flex"
            flexWrap="wrap"
            w="300px"
            gap="10px"
        >
            <label htmlFor="id-filter">
                Find contacts by name
            </label>
            <p
                type="text"
                name="filter"
                id="id-filter"
                value={filter}
                onChange={changeFilter}
            ></p>
        </div>
    )
};