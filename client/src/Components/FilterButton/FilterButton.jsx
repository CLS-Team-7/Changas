import { useState, useEffect } from 'react';
import { getFilterType } from '../../Redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/index';


export default function FilterBy() {
    const dispatch = useDispatch();
    const [filterType, setFilterType] = useState('All')
    const categories = useSelector(state => state.categoryPost)

    useEffect(() => {
        dispatch(getFilterType(filterType))
    }, [filterType, dispatch])

    
    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch])


    return (
        <div id="Filter">
            <select name="filterBy" onChange={(e) => {
                setFilterType(e.target.value);
            }}>
                <option value="All">Selecciona una categoría</option>
                {categories?.map(cat => <option key={cat.id} value={cat.title}>{cat.title}</option>)}
            </select>
        </div>
    )
}