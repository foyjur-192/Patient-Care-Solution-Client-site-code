import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/page.png'
const WhyPCS = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-12 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 shadow  rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-full w-full" src={img} />
                    </div>
                    <div class=" flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-white text-center">
                        <h1 className='font-bold lg:text-5xl text-2xl mb-8'>Why Medical Care Solution?</h1>
                        <p className='mb-6   text-normal leading-7'>
                            Medical care solution developed  basded on Bangladesh medical
                            services perspectives.70% Patient in Bangladesh appoint doctors
                            in private diagnostic center. Every morning doctor asistance book appointment through phone call.The booking time is 9 am to 10am sometimes they don’t received call or avoid for their hidden benefit.Generally doctor come to private chamber after his offical duty hours in hospital.
                        </p>
                        <p className='mb-6 leading-6'>
                            The Chamber time is 4pm to 7 pm.40%-50% of diagnostic center patient come from far way village.If doctors give some health test then it take long hours even they have to return next day only for reviewing reports.So patient face trouble to Book appointment, reviewing reports, waiting long hours for report.This application designed and developed from real life experience.I saw patient pain in waiting hours.It is  painful and hard process for a sick and old patient.
                        </p>
                        <p className='mb-6 leading-6'>
                            Through Medical care solution Patient can save their time and book appointment without any trouble situation.Also they don’t need to return next day for reviewing reports.Everything will done through the application for free.
                        </p>
                        <p className='mb-6 leading-6'>
                            Also i saw the doctor pains in appointment hours.Doctor face trouble in
                            reviewing reports in appointment time.It takes long hours and it dificult
                            to reviewing reports and take appointments in same time.Its painful for patient
                            as well.Medical care solution giving opportunity the doctor to reviewing
                            reports in their spear time because they can review in online anytime anywhere.
                        </p>

                     <button className='btn secondary-bg mt-5 font-medium shadow px-3 '> <a href="https://www.behance.net/gallery/151613079/Doctor-Consulting-Process-Solution-System" target="_blank">Case Study</a> </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyPCS;