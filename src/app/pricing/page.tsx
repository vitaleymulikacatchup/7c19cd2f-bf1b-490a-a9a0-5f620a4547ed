"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { CreditCard, HelpCircle, Sparkles } from "lucide-react";

export default function PricingPage() {
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
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="AudiShare"
          button={{ text: "Join Now", href: "/contact" }}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Flexible Membership Plans"
          description="Choose the plan that fits your driving lifestyle with transparent pricing and no hidden fees"
          tag="Membership"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              price: "Free",
              name: "Explorer Plan",
              buttons: [
                { text: "Get Started", href: "/contact" },
                { text: "Learn More", href: "/#features" }
              ],
              features: [
                "Pay-per-use pricing",
                "$15-30/hour rates",
                "Basic insurance included",
                "Mobile app access",
                "24/7 customer support"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$29/month",
              name: "Premium Plan",
              buttons: [
                { text: "Join Premium", href: "/contact" },
                { text: "Compare Plans", href: "/pricing" }
              ],
              features: [
                "20% discount on all trips",
                "Priority vehicle reservations",
                "Premium insurance coverage",
                "Free cancellations",
                "Exclusive vehicle access"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about AudiShare car sharing service"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How do I join AudiShare?",
              content: "Simply download our mobile app, upload your driver's license, and complete the quick verification process. You'll be approved within 24 hours and ready to book your first Audi."
            },
            {
              id: "2",
              title: "What's included in the rental price?",
              content: "All rentals include comprehensive insurance, fuel or charging, maintenance, and 24/7 roadside assistance. There are no hidden fees or surprise charges."
            },
            {
              id: "3",
              title: "Can I extend my rental period?",
              content: "Yes! You can extend your rental directly through the app, subject to availability. We'll notify you of any upcoming reservations and help you find alternative solutions if needed."
            },
            {
              id: "4",
              title: "What if I encounter issues with the vehicle?",
              content: "Our 24/7 customer support team is always available to help. Contact us through the app or call our hotline for immediate assistance with any vehicle-related issues."
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