import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const PatientSignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [ updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    let signInError;
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(loading || eLoading || updating){
        <Loading/>
      }
  
      if (user || eUser || updating) {
        navigate(from, {replace: true});
  
      }
  
      if(error || eError ||  updateError){
          signInError = <p className='text-red-500'>{error?.message || eError?.message  || updating?.message }</p>
      }

   

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name, displayAge: data.age, displayDistrict: data.district});
        navigate('/patient');
    }




    return (
        <div>
            <section class="text-gray-600 body-font relative ">
                <div class="container px-5 py-24 mx-auto ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="lg:w-2/5 md:w-2/3 mx-auto bg-state-200 shadow-lg p-8 secondary-color ">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Sign up</h1>
                            <div class="flex flex-wrap -m-2 ">

                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-white"> Full Name</label>
                                        <input 
                                         {...register("name", {

                                            required: {
                                                value: true,
                                                message: 'Name is required'

                                            }

                                        })}
                                        type="text" name="name" className="w-full secondary-color  rounded border border-black text-white  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                     <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.fullName?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.fullName.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-white text-left">Email</label>
                                        <input
                                            {...register("email", {

                                                required: {
                                                    value: true,
                                                    message: 'Email is required'

                                                },

                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'provide a valid Email'
                                                }
                                            })}
                                            type="email" name="email" class="w-full secondary-color border-black   rounded border   focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-white outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                        </label>


                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-white text-left">Password</label>
                                        <input
                                            {...register("password", {

                                                required: {
                                                    value: true,
                                                    message: 'password is required'

                                                },

                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 character Password'
                                                }


                                            })}
                                            type="text" name="password" class="w-full secondary-color border-black    rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.password?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500 '>{errors.password.message}</span>}
                                        </label>

                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-white text-left">Age</label>
                                        <input 
                                         {...register("age", {

                                            required: {
                                                value: true,
                                                message: 'Age is required'

                                            }

                                        })}
                                        
                                        
                                        type="text" name="age" class="w-full secondary-color  border-black  rounded border  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200  outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="age" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.age?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.age.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <label for="district" class="leading-7 text-sm text-white text-left">District</label>
                                        <input 
                                         {...register("district", {

                                            required: {
                                                value: true,
                                                message: 'District is required'

                                            }

                                        })}
                                        
                                        
                                        type="text" id="district" name="district" class="w-full secondary-color border-black  rounded border  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200  outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                         <label for="age" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.district?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.district.message}</span>}
                                           
                                        </label>
                                    
                                    </div>
                                </div>
                                <div class="p-2 w-full ">
                                {signInError}
                                    <button className='btn secondary-bg lg:w-full md:w-full sm:w-full mt-4'>Sign Up Now</button>
                                </div>
                                {/* </form> */}
                            </div>
                            <div className=''>
                                <p className='pt-5 mb-3 text-white'>Already Member?? <span className='secondary-color-2 cursor-pointer' onClick={() => navigate('/patientLog')} >Log in</span></p>
                                <button onClick={() => signInWithGoogle()} className='btn bg-white text-black lg:w-full md:w-full sm:w-full mt-6'> <img src='https://i.ibb.co/HCd5Pxc/google-logo-google-search-google-account-png-favpng-mmf8xek-Yw-FXSgw-Wu9-E96run-PA-removebg-preview.png' alt="" />   Sign Up with Google</button>

                            </div>
                        </div>
                    </form>

                </div>
            </section>

        </div>
    );
};

export default PatientSignUp;