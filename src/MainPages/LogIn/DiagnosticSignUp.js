import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import useToken from '../../Hook/useToken';

const DiagnosticSignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const [ updateProfile, updating, updateError] = useUpdateProfile(auth);

      const { register, formState: { errors }, handleSubmit } = useForm();
  
      let signInError;

      
      const [token] = useToken(user || eUser);
      
      if(loading || eLoading || updating){
          <Loading/>
        }
    

    
        if(error || eError ||  updateError){
            signInError = <p className='text-red-500'>{error?.message || eError?.message  || updating?.message }</p>
        }
    
  
  
  
      if (token) {
        navigate('/diagnostic');;
      }
    
  
      const onSubmit = async data => {
          console.log(data);
          await createUserWithEmailAndPassword(data.email, data.password)
          await updateProfile({ displayName: data.name, displayAddress: data.address, displayRegistrationNumber: data.registrationNumber, displayCity: data.city });
        
      }
  

    return (
        <div>
           <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto ">
              
                    <div class="lg:w-2/5 md:w-2/3 mx-auto secondary-color shadow-lg p-8 ">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-12 text-white ">Sign up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="flex flex-wrap -m-2 ">
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-white"> Full Name of Diagnostic Center/ Hospital</label>
                                        <input 
                                
                                               {...register("name", {
      
                                                  required: {
                                                      value: true,
                                                      message: 'Diagnostic Center Name is required'
      
                                                  }
      
                                              })}
                                        
                                        
                                        type="text"  name="name" class="w-full secondary-color border-black  rounded border border-gray-300 focus:border-teal-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                  <label for="name" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.name?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.name.message}</span>}
                                           
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
        
                                        type="email"  name="email" class="w-full secondary-color border-black rounded border border-gray-300 focus:border-teal-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                                                    message: 'Password is required'

                                                },

                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 character Password'
                                                }


                                            })}
                                            type="text" name="password" class="w-full secondary-color border-black  rounded border border-gray-300 focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.password?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500 '>{errors.password.message}</span>}
                                        </label>

                                    </div>
                                </div>



                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <label for="registration" class="leading-7 text-sm text-white text-left">Registration Number</label>
                                        <input 
                                         {...register("registrationNumber", {

                                            required: {
                                                value: true,
                                                message: 'Registration Number is required'

                                            }

                                        })}
    
                                        type="text"  name="registrationNumber" class="w-full secondary-color border-black  rounded border border-gray-300 focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="registration" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.registrationNumber?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.registrationNumber.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <label for="address" class="leading-7 text-sm text-white text-left">Address</label>
                                        <input 
                                         {...register("address", {

                                            required: {
                                                value: true,
                                                message: 'address is required'

                                            }

                                        })}
                                        type="text"  name="address" class="w-full secondary-color border-black  rounded border border-gray-300 focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="address" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.address?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.address.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <label for="city" class="leading-7 text-sm text-white text-left">City</label>
                                        <input 
                                             {...register("city", {

                                                required: {
                                                    value: true,
                                                    message: 'City Name is required'
    
                                                }
    
                                            })}
                                        type="text"  name="city" class="w-full secondary-color border-black  rounded border border-gray-300 focus:border-teal-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="city" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.city?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.city.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>
                                <div class="p-2 w-full ">
                                {signInError}
                                <button className='btn secondary-bg lg:w-full md:w-full sm:w-full mt-4'>Sign Up Now</button>
                                </div>
                            {/* </form> */}
                        </div>
                        </form>
                        <div className=''>
                                <p className='pt-5 mb-3 text-white'>Already Member?? <span className='secondary-color-2 cursor-pointer' onClick={() => navigate('/diagnosticLogIn')}>Log in</span></p>
                                <button   onClick={() => signInWithGoogle()} className='btn secondary-bg2 text-black lg:w-full md:w-full sm:w-full mt-6'> <img src='https://i.ibb.co/HCd5Pxc/google-logo-google-search-google-account-png-favpng-mmf8xek-Yw-FXSgw-Wu9-E96run-PA-removebg-preview.png' alt="" />   Sign Up with Google</button>

                        </div>
                    </div>
                   
                      
                </div>
            </section>
        </div>
    );
};

export default DiagnosticSignUp;