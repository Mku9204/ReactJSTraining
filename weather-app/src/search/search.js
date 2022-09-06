import axios from "axios";
import { useState } from "react";
import options from "../api/getData";
import { Geo_Api_Url } from "../component/constData";

const { AsyncPaginate } = require("react-select-async-paginate")

const Search = ({ OnSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        console.log(searchData)
        setSearch(searchData)
        OnSearchChange(searchData)
    }

    const loadOptions = (inputValue) => {
        axios.request(`${Geo_Api_Url}/cities`, options)
            .then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
    }

    return (
        <AsyncPaginate
            placeholder='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}
export default Search;