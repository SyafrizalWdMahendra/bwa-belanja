import LandingPageHeader from "./(customer)/(auth)/_components/landing-page-header";
import LandingPageSection from "./(customer)/(auth)/_components/landing-page-section";

export default async function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 text-black">
      <LandingPageHeader />
      <LandingPageSection />
    </div>
  );
}
