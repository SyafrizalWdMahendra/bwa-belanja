import Navbar from "./(customer)/(index)/_components/navbar";
import LandingPageSection from "./(customer)/(index)/_components/landing-page-section";

export default async function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 text-black">
      <Navbar />
      <LandingPageSection />
    </div>
  );
}
