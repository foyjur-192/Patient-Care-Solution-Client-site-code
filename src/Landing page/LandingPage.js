import Feature from '../LandingNav/Feature';
import Footer from '../LandingNav/Footer';
import HeroSection from '../LandingNav/HeroSection';
import NavLink from '../LandingNav/NavLink';
import Pricing from '../LandingNav/Pricing';
import WhyPCS from '../LandingNav/WhyPCS';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Payment from '../LandingNav/Payment';
import Faq from '../LandingNav/Faq';
import LastHook from '../LandingNav/LastHook';

const LandingPage = () => {
      const [user] = useAuthState(auth)
    
    return (
        <div className='secondary-color'>
             {

    user &&  !<NavLink/>
   }
             {
    !user &&  <NavLink/>
   }
        
         <HeroSection></HeroSection>
         <Feature></Feature>
         <WhyPCS></WhyPCS>
         <Pricing></Pricing>
        <Faq></Faq>
        <LastHook></LastHook>
         <Footer></Footer>
        </div>
    );
};

export default LandingPage;