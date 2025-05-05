import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import PhoneSystemsPage from './components/PhoneSystemsPage';
import GpsFleetManagementSoftware from './components/GpsFleetManagementSoftware';
import BestEmployeeMangementSoftware from './components/BestEmployeeMangementSoftware'
import CompareBazaarHomepage from './components/CompareBazaarHomepage'
import CareersPage from './components/CareersPage';
import BestCallCenterManagement from './components/BestCallCenterManagement';
import ContactPage from './components/Contact';
import  BestCRMSoftware from './components/BestCRMSoftware';
import EmailMarketing from './components/EmailMarketing';
import BestWebsiteBuildingPlatform from './components/BestWebsiteBuildingPlatform';
import BestProjectManagement from './components/BestProjectManagement';
import Advertise from './components/Advertise';
import PrivacyPolicy from './components/PrivacyPolicy';
import EditorialProcess from './components/EditorialProcess';
import DonotSellMyInfo from './components/DonotSellMyInfo';
import LimitTheUse from './components/LimitTheUse';
import TermsOfUse from './components/TermsOfUse'
import Accessibility from './components/Accessibility';
import Marketing from './components/Marketing';
import Technology from './components/Technology';
import CopyrightPolicy from './components/CopyrightPolicy';
import AdvertisingDisclosure from './components/AdvertisingDisclosure';
import HumanResources from './components/HumanResources';
import BusinessPlanning from './components/BusinessPlanning';
import StartABusiness from './components/StartABusiness';
// import WhitePaperForm from './components/WhitePaperForm';
import WhitePaperDetailPage from './components/WhitePaperDetailPage';
import WhitepaperList from './components/WhitepaperList';
import BusinessPhoneSystem from './components/BusinessPhoneSystem';
import BusinessGPSFleet from './components/BusinessGPSFleet';
import BusinessPayroll from './components/BusinessPayroll';
// function App() {
//   return (
//     <>
//       <Home/>
//       <PhoneSystemsPage />
//     </>
//   );
// }
// export default App
//BestEmployeeMangementSoftware
//Compare Bazaar 

function App() {
  return( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/phone-systems" element={<PhoneSystemsPage />} />
        <Route path="/GpsFleetMangement" element={<GpsFleetManagementSoftware />} />
        <Route path="/BestEmployeeMangementSoftware" element={< BestEmployeeMangementSoftware/>} />
        <Route path="/Callcenter" element={<BestCallCenterManagement />} />
        <Route path="/About us" element={<CompareBazaarHomepage />} />
        <Route path="/BestCRMSoftware" element={<BestCRMSoftware />} />
        <Route path="/EmailMarketing" element={<EmailMarketing />} />
        <Route path="/BestWebsiteBuildingPlatform" element={<BestWebsiteBuildingPlatform />} />
        <Route path="/BestProjectManagement" element={<BestProjectManagement />} />
        <Route path="/Careers" element={<CareersPage />} />
        <Route path="/Advertise" element={<Advertise />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/EditorialProcess" element={<EditorialProcess/>} />
        <Route path="/contact-sales" element={<ContactPage />} />
        <Route path="/DonotSellMyInfo" element={<DonotSellMyInfo/>} />
        <Route path="/LimitTheUse" element={<LimitTheUse/>} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Technology" element={<Technology/>} />
        <Route path="/CopyrightPolicy" element={<CopyrightPolicy/>} />
        <Route path="/AdvertisingDisclosure" element={<AdvertisingDisclosure/>} />
        <Route path="/HumanResources" element={<HumanResources/>} />
        <Route path="/BusinessPlanning" element={<BusinessPlanning />} />
        <Route path="/Accessibility" element={<Accessibility />} />
        <Route path="/StartABusiness" element={<StartABusiness/>} />
        {/* <Route path="/WhitePaperForm" element={<WhitePaperForm/>} /> */}
        <Route path="/whitepapers" element={<WhitepaperList />} />
        <Route path="/whitepapers/:id" element={<WhitePaperDetailPage />} />
        <Route path="/WhitePaperList" element={<WhitepaperList/>}/>
        <Route path="/BusinessPhoneSystem" element={<BusinessPhoneSystem/>}/>
        <Route path="/GPSFleetTracking" element={<BusinessGPSFleet/>}/>
        <Route path="/BusinessPayroll" element={<BusinessPayroll/>}/>
        
   
      </Routes>
    </Router>
  )
}
export default App;