
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MakeAdmin from './MakeAdmin';
import Loading from '../../Shared/Loading';

const Users = () => {
    
    const [user] = useAuthState(auth);
  
  
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
      method: 'GET',
      headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
  }).then(res => res.json()));
  if (isLoading) {
      return <Loading/>
  }
  
    
    return (
     
        <div>
        <div>
       <div class="navbar background-2 text-black">
  <div class="flex-1">
    <a class="normal-case text-white text-3xl">Users</a>
  </div>
  <div class="flex-none">
    <ul>
        <h1 className='font-normal text-white r-10 text-2xl '>Total User:{users.length}</h1>
    </ul>
  </div>
</div>
<section class="text-gray-600 body-font mt-5 pr-10">
  <div class="container  secondary-color  mx-auto">
    <div class=" w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>

            <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase tableHead">Uer Email</th>
            <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase tableHead">Make Admin</th>
            <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase tableHead">Remove  user</th>

            
          </tr>
        </thead>
        <tbody>

            {
               users.map(user => 
                  <MakeAdmin
                  key={user._id}
                  user={user}
                  refetch={refetch}
                  >
                  </MakeAdmin>

               )
            }



        </tbody>
      </table>
    </div>

  </div>
</section>


        </div>
       </div>
    );
};

export default Users;