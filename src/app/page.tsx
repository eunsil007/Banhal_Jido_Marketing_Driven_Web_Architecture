import ApplicationGuideSection from "@/components/ApplicationGuideSection";
import CommunityProfileSection from "@/components/CommunityProfileSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Herosection";
import RealtimeAlertBar from "@/components/RealtimeAlertBar";
import RecommendedTravelSection from "@/components/RecommendedTravelSection";
import SearchBar from "@/components/SearchBar";
import ServiceInfoBannerSection from "@/components/ServiceInfoBannerSection";
import SubsidyAlertSection from "@/components/SubsidyAlertSection";
import ThreePowersSection from "@/components/ThreePowersSection";



export default function Home() {
  return (
    <div className="bg-white min-h-screen"> 
     <Header />
     
      <HeroSection />

      <SearchBar />

      <ThreePowersSection />
      
      <RecommendedTravelSection />

      <RealtimeAlertBar />    

      <ApplicationGuideSection />

      <CommunityProfileSection />

      <ServiceInfoBannerSection />

      <SubsidyAlertSection />

      <Footer />

    </div>
  );
}
