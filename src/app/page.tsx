"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Car, Zap, Star, TrendingUp, Users, MapPin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="radialGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Features", id: "features" },
            { name: "Vehicles", id: "vehicles" },
            { name: "Pricing", id: "/pricing" },
            { name: "About", id: "/about" }
          ]}
          brandName="AudiShare"
          button={{ text: "Join Now", href: "/contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Audi Car Sharing Made Simple"
          description="Experience the luxury of driving premium Audi vehicles without the commitment of ownership. Book instantly, drive confidently, and enjoy the freedom of flexible mobility."
          tag="AudiShare"
          tagIcon={Car}
          buttons={[
            { text: "Start Sharing", href: "/contact" },
            { text: "View Fleet", href: "#vehicles" }
          ]}
          imageSrc="https://pixabay.com/get/g1c155d54bde94df2ad46c05849b98e0f64e6e32b8bb7d9a9eef9d90975bd67bd2e5664addba9a7d26e2a3c5be946940f8cb592a97652ccda449764b7132ff539_1280.jpg"
          imageAlt="Premium Audi car sharing fleet"
          frameStyle="card"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="How AudiShare Works"
          description="Experience seamless car sharing with our intuitive platform designed for modern urban mobility"
          tag="Simple Process"
          tagIcon={Zap}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Find & Reserve",
              description: "Browse available Audi vehicles near you using our mobile app. Reserve instantly with flexible booking options from hourly to daily rentals.",
              imageSrc: "https://pixabay.com/get/gb806eab8797d94757b5953e144c9561db929decdaa32ea3c2cd2e97399bfdf6fa2c1da21dacddd50213417db78bd9ada0f28fb4748bc023ce51ba9e212fe68ed_1280.jpg",
              imageAlt: "Mobile app booking interface"
            },
            {
              id: 2,
              title: "Unlock & Drive",
              description: "Access your reserved vehicle with our contactless mobile unlock technology. No keys needed - just your smartphone and driving license.",
              imageSrc: "https://pixabay.com/get/g3f9f732f16c5045a570f771f992bd09d122e10b900729b3d4fdb2ed4d0c12c6fb75187a9a55ea240f6fa4db821b7912921796b23a2111ec26276c7d74c891299_1280.jpg",
              imageAlt: "Audi A3 sedan ready for pickup"
            },
            {
              id: 3,
              title: "Return Anywhere",
              description: "Complete your journey by parking at any designated AudiShare location. End your trip in the app and you're all set for your next adventure.",
              imageSrc: "https://pixabay.com/get/gc7c5550aadd621aa72292cace601cf3bd01771b4af594ca4cac2931387115af3398a5e77922ce67dbdc00f5c32597a599b93c73d19e5686755a1e729afa697c3_1280.jpg",
              imageAlt: "Urban driving experience in the city"
            }
          ]}
        />
      </div>

      <div id="vehicles" data-section="vehicles">
        <ProductCardTwo
          title="Our Premium Fleet"
          description="Choose from our curated selection of well-maintained Audi vehicles, each equipped with the latest technology and safety features"
          tag="Available Now"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "audi-a3",
              brand: "Audi",
              name: "A3 Sedan Premium",
              price: "$15/hour",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://pixabay.com/get/g3f9f732f16c5045a570f771f992bd09d122e10b900729b3d4fdb2ed4d0c12c6fb75187a9a55ea240f6fa4db821b7912921796b23a2111ec26276c7d74c891299_1280.jpg",
              imageAlt: "Audi A3 sedan"
            },
            {
              id: "audi-q5",
              brand: "Audi",
              name: "Q5 SUV Quattro",
              price: "$25/hour",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://pixabay.com/get/g15150ca11f47b5131e9ff7deee4bbf7fc1545890c24c53ec3ef762204c89e2874a1713bed98114db63b7f1c9b75d351d29e4f08d1f4665a0c89c3f3e6f36da36_1280.jpg",
              imageAlt: "Audi Q5 SUV"
            },
            {
              id: "audi-etron",
              brand: "Audi",
              name: "e-tron Electric",
              price: "$30/hour",
              rating: 5,
              reviewCount: "650",
              imageSrc: "https://pixabay.com/get/g996c010e8eb52d71df7552933ec3bbc175c71638857f339c7182be9e0b78ee38d52298f0ca94e6f7e005ba9fd9e50ce0fc49e78dbeb36555fc0239ec0c32057a_1280.jpg",
              imageAlt: "Audi e-tron electric vehicle"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="AudiShare Impact"
          description="See how our community is transforming urban mobility with shared premium transportation"
          tag="Growing Community"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "25K+",
              title: "Active Members",
              description: "Drivers trust AudiShare for their mobility needs",
              icon: Users
            },
            {
              id: "2",
              value: "150+",
              title: "Premium Vehicles",
              description: "Well-maintained Audi cars across the city",
              icon: Car
            },
            {
              id: "3",
              value: "500K+",
              title: "Trips Completed",
              description: "Successful journeys with zero hassle",
              icon: MapPin
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="AudiShare"
          columns={[
            {
              items: [
                { label: "How It Works", href: "#features" },
                { label: "Vehicle Fleet", href: "#vehicles" },
                { label: "Membership", href: "/pricing" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "/about" },
                { label: "Locations", href: "/locations" },
                { label: "Support", href: "/support" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Contact", href: "/contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}