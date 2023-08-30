import { useState, React } from "react";

export const SearchComponent = ({onSearch}) => {
    const [value, setValue] = useState("");

    const onSearchHandler = (e) => {
        e.preventDefault();
        console.log(value);
        onSearch(value);
    }

    const onChangeHandler = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    return (
        <div className="search">
            <form ></form>
                <input type="text" onChange={onChangeHandler} placeholder="Search..." value={value} />
                <button onClick={onSearchHandler} type="submit">Search</button>
            <form/>
        </div>
    );
}