import { useState } from "react";
import { Container } from "./styles";
import { FiSearch } from "react-icons/fi"


export function SearchInput({ onSearchChange, id,...rest}){
    const [searchTimeout, setSearchTimeout] = useState(null);

    const handleSearchChange = (e) =>{
        const newSearch = e.target.value;

        // Cancels any search
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        // Define a new timer to init search as delay
        const timer = setTimeout(() => {
            onSearchChange(newSearch); // callback function at Home
        }, 1000); // Await 1000 ms = 1s
    
        setSearchTimeout(timer);


    };

    return(
        <Container onChange={handleSearchChange} id="search">
            <label htmlFor={id} className="sr-only">Busca</label>
            <div>
                <FiSearch/>
                <input 
                    id={id}
                    {...rest}
                />
            </div>
        </Container>

    )

}