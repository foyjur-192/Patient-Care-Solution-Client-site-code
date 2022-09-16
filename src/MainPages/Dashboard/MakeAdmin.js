// import { toast } from 'react-toastify';

// const MakeAdmin = ({user, refetch}) => {
//         const { email, role} = user;
//         console.log(email);
    
//         const makeAdmin = () => {
//             fetch(`http://localhost:5000/user/admin/${email}`, {
//             method: 'PUT',
//             headers: {
//                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
//             }
//             })
    
//             .then(res => {
//                if(res.status === 403){
//                 toast.error('Failed to make an Admin')
//                }
                
                
//               return  res.json()})
//            .then(data => {
//             if(data.modifiedCount > 0){
//                 refetch()
//             toast('Successfully Make Admin');
//             }
//            })
//         }
    
//     return (
//         <div>
//                   <tr>
//         <td class="px-4 py-3 text-black">{email}</td>
//         <td class="px-4 py-3 text-black  ">{role !== 'admin' && <button onClick={makeAdmin}  class="btn btn-xs">Make Admin</button>}</td>
//         <td class="px-4 py-3 text-black  "><button class="btn btn-sm">Remove</button></td>
  
//       </tr>
//         </div>
//     );
// };

// export default MakeAdmin;