"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
            { name: "About", id: "/about" }
          ]}
          brandName="AudiShare"
          button={{ text: "Join Now", href: "/contact" }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join AudiShare"
          tagIcon={Mail}
          title="Ready to Experience Premium Car Sharing?"
          description="Join thousands of members who've discovered the freedom of flexible, luxury mobility. Start your AudiShare journey today."
          inputPlaceholder="Enter your email address"
          buttonText="Get Started"
          termsText="By joining AudiShare, you agree to our Terms of Service and Privacy Policy."
          imageSrc="https://pixabay.com/get/gad53b65d9aed754e00fbcefceb235c448ead02469a0842211d51b364e5c90614ff15fb096abfd19e9288d997c1254ea9ea07f494747aef47c77cf1becafc1432_1280.jpg"
          imageAlt="Audi interior dashboard"
          mediaPosition="right"
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