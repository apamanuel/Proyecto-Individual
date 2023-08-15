// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { getVideogamesByName } from '../redux/actions';

// const SearchBar = ()=>{
//     const [query, setquery] = useState('');
//     const dispatch = useDispatch();

//     const handleInputChange = (event)=>{
//         setquery(event.target.value);
//     };
    
//     const handleSearch = (text)=>{
//         dispatch(getVideogamesByName(text));
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 onChange={handleInputChange}
//                 placeholder="Buscar videojuegos por nombre"
//             />
//             <button onClick={()=> handleSearch(query)}>Buscar</button>
//         </div>
//     );
// };

// export default SearchBar;