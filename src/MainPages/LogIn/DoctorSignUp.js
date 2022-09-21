import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import useToken from '../../Hook/useToken';

const DoctorSignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [
    createUserWithEmailAndPassword,
    eUser,
    eLoading,
    eError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  let signInError;

  const [token] = useToken(user || eUser);

  if (loading || eLoading || updating) {
    <Loading />
  }



  if (error || eError || updateError) {
    signInError = <p className='text-red-500'>{error?.message || eError?.message || updating?.message}</p>
  }




  if (token) {
    navigate('/doctor');
  }
 

  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name, displayAge: data.age, displayLicense: data.license, displayHospital: data.hospital, displayDesignation: data.designation, displayDegrees: data.degrees, displayExperienced: data.experienced, displayExpertise: data.expertise, displayChamberAddress: data.chamberAddress });
 
  }
  return (
    <div>
      <section className="text-white  body-font relative ">
        <div className="container px-5 py-24 mx-auto ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:w-2/5 md:w-2/3 mx-auto bg-state-200 shadow-lg p-8 secondary-color ">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Sign up</h1>
              <div className="flex flex-wrap -m-2 ">
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-white">Name</label>
                    <input
                      {...register("name", {

                        required: {
                          value: true,
                          message: 'Name is required'

                        }
                      })}
                      type="text" name="name" className="w-full secondary-color border-black  rounded border border-gray-300 focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-white outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="name" className="leading-7 text-sm text-white text-left">
                      {errors.name?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.name.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="email" className="leading-7 text-sm text-white text-left">Email</label>
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
                      type="email" id="email" name="email" className="w-full  secondary-color border-black rounded border 0 focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-white outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="email" className="leading-7 text-sm text-white text-left">
                      {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                      {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-white text-left">Password</label>
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

                      type="text" name="password" className="w-full  secondary-color border-black  rounded border  focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-white outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="email" className="leading-7 text-sm text-white text-left">
                      {errors.password?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.password.message}</span>}
                      {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500 '>{errors.password.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-white text-left">Age</label>
                    <input
                      {...register("age", {

                        required: {
                          value: true,
                          message: 'Age is required'

                        }

                      })}


                      type="text" name="age" className="w-full secondary-color border-black rounded border focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="name" className="leading-7 text-sm text-white text-left">
                      {errors.age?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.age.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-white text-left">Doctor License ID</label>
                    <input
                      {...register("license", {

                        required: {
                          value: true,
                          message: 'License Number is required'

                        }

                      })}



                      type="text" name="license" className="w-full secondary-color border-black rounded border border-gray-300 focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="registration" className="leading-7 text-sm text-white text-left">
                      {errors.license?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.license.message}</span>}
                    </label>

                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-white text-left">Employee of Government Hospital/Private Hospital Name</label>
                    <input
                      {...register("hospital", {

                        required: {
                          value: true,
                          message: 'Hospital Name is required'

                        }

                      })}


                      type="text" name="hospital" className="w-full secondary-color border-black rounded border border-gray-300 focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="registration" className="leading-7 text-sm text-white text-left">
                      {errors.hospital?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.hospital.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-white text-left">Designation</label>
                    <input
                      {...register("designation", {

                        required: {
                          value: true,
                          message: 'designation is required'

                        }

                      })}

                      type="text" name="designation" className="w-full secondary-color border-black rounded border border-gray-300  focus:border-teal-400   focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="registration" className="leading-7 text-sm text-white text-left">
                      {errors.designation?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.designation.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-white text-left">Degrees</label>
                    <input
                      {...register("degrees", {

                        required: {
                          value: true,
                          message: 'Degrees Name is required'

                        }

                      })}


                      type="text" name="degrees" className="w-full secondary-color border-black rounded border border-gray-300  focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="registration" className="leading-7 text-sm text-white text-left">
                      {errors.degrees?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.degrees.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-white text-left">Yours of Experienced</label>
                    <input
                      {...register("experienced", {

                        required: {
                          value: true,
                          message: 'Must mention years of experienced it is required'

                        }

                      })}


                      type="text" name="experienced" className="w-full secondary-color border-black rounded border border-gray-300   focus:border-teal-400    focus:ring-2 focus:ring-indigo-200 text-white outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="experienced" className="leading-7 text-sm text-white text-left">
                      {errors.experienced?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.experienced.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-white text-left">Field of Expertise</label>
                    <input
                      {...register("expertise", {

                        required: {
                          value: true,
                          message: 'Expertise field name is required'

                        }

                      })}




                      type="text" name="expertise" className="w-full secondary-color border-black rounded border border-gray-300  focus:border-teal-400  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="expertise" className="leading-7 text-sm text-white text-left">
                      {errors.expertise?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.expertise.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full text-left">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-white text-left">Private Chamber Address</label>
                    <input
                      {...register("chamberAddress", {

                        required: {
                          value: true,
                          message: 'Chamber Address is required'

                        }

                      })}


                      type="text" name="chamberAddress" className="w-full secondary-color border-black rounded border border-gray-300  focus:border-teal-400   focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <label for="registration" className="leading-7 text-sm text-white text-left">
                      {errors.chamberAddress?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.chamberAddress.message}</span>}
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full ">
                  {signInError}
                  <button className='btn  lg:w-full secondary-bg md:w-full sm:w-full mt-4'>Sign Up Now</button>
                </div>
              </div>
              <div className=''>
                <p className='pt-5 mb-3'>Already Member?? <span className='secondary-color-2 cursor-pointer' onClick={() => navigate('/doctorLogIn')} >Log in</span></p>
                <button onClick={() => signInWithGoogle()} className='btn secondary-bg2 text-black lg:w-full md:w-full sm:w-full mt-6'> <img src='https://i.ibb.co/HCd5Pxc/google-logo-google-search-google-account-png-favpng-mmf8xek-Yw-FXSgw-Wu9-E96run-PA-removebg-preview.png' alt="" />  Continue with Google</button>

              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DoctorSignUp;