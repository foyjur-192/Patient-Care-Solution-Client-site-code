// import React, { useEffect, useState } from 'react';
// import DetailsSearch from './DetailsSearch';

// const SearchBar = () => {

//     const [users, setUsers] = useState([]);
//     const [query, setQuery] = useState();

//     const search = (users) => {
//         return users.filter((user) => user.doctorName.toLowerCase().includes(query) || user.chamber.toLowerCase().includes(query) || user.expertise.toLowerCase().includes(query));
//     }


//     useEffect(() => {
//     fetch('doctorDetails.JSON')
//     .then(res => res.json())
//     .then(data => setUsers(data));
//     },[])



//     return (
//         <div className='app w-full'>
//          <input type='text'  placeholder='Search...' className='border-slate-400 border w-80 p-5 h-12' onChange={(event) => setQuery(event.target.value)}/>
//         <ul className='list'>
//       <DetailsSearch users={search(users)}  />
//         </ul>
//         </div>
//     );
// };

// export default SearchBar;