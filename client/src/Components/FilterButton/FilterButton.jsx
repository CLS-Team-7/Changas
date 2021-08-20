import { useState, useEffect } from 'react';
import { getFilterType } from '../../Redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/index';
import { Disclosure } from '@headlessui/react';


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
            <Disclosure as="nav" className="bg-gray-800 pb-4">
                <select name="filterBy" onChange={(e) => {
                    setFilterType(e.target.value);
                }}
                    className=" block w-52 text-white py-1 px-1 border-none border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 mx-60 ">
                    <option value="All" className="text-black">Categorias</option>
                    {categories?.map(cat => <option key={cat.id} value={cat.title} className="text-black" >{cat.title}</option>)}
                </select>
            </Disclosure>
            
        </div>
    )
}