import { toast } from 'react-toastify';

const MakeAdmin = ({user, refetch}) => {
        const { email, role} = user;
        console.log(email);
    
        const makeAdmin = () => {
            fetch(`https://patient-care-solution-server-production.up.railway.app/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
            })
    
            .then(res => {
               if(res.status === 403){
                toast.error('Failed to make an Admin')
               }
                
                
              return  res.json()})
           .then(data => {
            if(data.modifiedCount > 0){
                refetch()
            toast('Successfully Make Admin');
            }
           })
        }
      
    return (
        
                  <tr>
        <td class="px-4 py-3 text-white">{email}</td>
      <td class="px-4 py-3 text-white" > {role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin}> Make Admin </button>}  </td>
        <td class="px-4 py-3 text-white  "><button class="btn btn-sm">Remove</button></td>
  
      </tr>
       
    );
};

export default MakeAdmin;