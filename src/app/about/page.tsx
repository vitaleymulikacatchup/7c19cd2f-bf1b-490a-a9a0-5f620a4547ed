"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { MessageCircle } from "lucide-react";

export default function AboutPage() {
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
            { name: "Home", id: "/" },
            { name: "Features", id: "/#features" },
            { name: "Vehicles", id: "/#vehicles" },
            { name: "Pricing", id: "/pricing" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="AudiShare"
          button={{ text: "Join Now", href: "/contact" }}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We believe the future of mobility is shared, sustainable, and seamlessly connected to your lifestyle"
          buttons={[
            { text: "Learn More", href: "/#features" },
            { text: "Join Community", href: "/contact" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Members Say"
          description="Join thousands of satisfied members who've made AudiShare their preferred mobility solution"
          tag="Member Stories"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahdrives",
              testimonial: "AudiShare has completely changed how I think about car ownership. The convenience and luxury make every trip special.",
              imageSrc: "https://pixabay.com/get/g4338f9b8fd00e351802a8f25969923ec24d8e4007bb6a977c92e9ff87c7d8340409e41975d7fc2a4ee9a1c82e240cedf800c4fcbea239f3f73014164ed4f8041_1280.jpg",
              imageAlt: "Sarah, AudiShare member"
            },
            {
              id: "2",
              name: "Michael",
              handle: "@mikecomm",
              testimonial: "As someone who only needs a car occasionally, AudiShare is perfect. Premium vehicles without the premium commitment.",
              imageSrc: "https://pixabay.com/get/g2f2016357aa643c5d591ce78ec5e16426f05ef47c9712b778263356be0bf4690907e9b1e033ccd079532f845af0725395ecd9860bb0a798bed1968a46a4e6248_1280.jpg",
              imageAlt: "Michael, AudiShare member"
            },
            {
              id: "3",
              name: "Emma",
              handle: "@emmaexplores",
              testimonial: "The booking process is seamless and the vehicles are always immaculate. Highly recommend for city dwellers.",
              imageSrc: "https://pixabay.com/get/g63e9b577a8aebbf932fa4b54532738e7c380240887237224bb812b185d1221a373f8d402640993b12025d09f9f2cdc1bbb45d04e05ba21d4b7dfead822229e7e_1280.jpg",
              imageAlt: "Emma, AudiShare member"
            },
            {
              id: "4",
              name: "David",
              handle: "@davidurban",
              testimonial: "Being able to access premium Audi vehicles whenever I need them has made my business trips so much more professional.",
              imageSrc: "https://pixabay.com/get/ge2276e40651e554849d127b86981a9956d944553f9d36d9b5c63f7fc518de28710d1af9243c9ca89de4cd35fdbd8ab4029710346c244c43b81632be5eabd7358_1280.jpg",
              imageAlt: "David, AudiShare member"
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
                { label: "How It Works", href: "/#features" },
                { label: "Vehicle Fleet", href: "/#vehicles" },
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