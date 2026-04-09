
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.eledenthospitals.com",
      },
      {
        protocol: "https",
        hostname: "eledenthospitals.com",
      },
      {
        protocol: "https",
        hostname: "backend.eledenthospitals.com",
      },
      {
        protocol: "https",
        hostname: "www.backend.eledenthospitals.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/location/:slug",
        destination: "/:slug",
        permanent: true,
      },

      {
        source: "/dental-implant-cost-in-hyderabad",
        destination: "/blogs/dental-implant-cost-in-hyderabad",
        permanent: true,
      },
      {
        source: "/root-canal-treatment-cost-in-hyderabad",
        destination: "/blogs/root-canal-treatment-cost-in-hyderabad",
        permanent: true,
      },
      {
        source: "/look-for-a-pediatric-dentist-for-your-infants-teeth",
        destination: "/blogs/look-for-a-pediatric-dentist-for-your-infants-teeth",
        permanent: true,
      },
      {
        source: "/how-smile-makeovers-transform-facial-harmony",
        destination: "/blogs/how-smile-makeovers-transform-facial-harmony",
        permanent: true,

      },
      {
        source: "/the-benefits-of-digital-dentistry-advanced-technology-for-precise-care",
        destination: "/blogs/the-benefits-of-digital-dentistry-advanced-technology-for-precise-care",
        permanent: true,
      },
      {
        source: "/step-by-step-guide-to-the-dental-implant-procedure",
        destination: "/blogs/step-by-step-guide-to-the-dental-implant-procedure",
        permanent: true,
      },
      {
        source: "/get-your-wisdom-tooth-removed-to-prevent-tooth-loss",
        destination: "/blogs/get-your-wisdom-tooth-removed-to-prevent-tooth-loss",
        permanent: true,
      },
      {
        source: "/a-step-by-step-guide-how-to-get-invisalign-treatment",
        destination: "/blogs/a-step-by-step-guide-how-to-get-invisalign-treatment",
        permanent: true,
      },
      {
        source: "/know-the-benefits-of-dental-implants-say-goodbye-to-missing-teeth",
        destination: "/blogs/know-the-benefits-of-dental-implants-say-goodbye-to-missing-teeth",
        permanent: true,
      },
      {
        source: "/how-to-fix-teeth-gap-expert-solutions",
        destination: "/blogs/how-to-fix-teeth-gap-expert-solutions",
        permanent: true,
      },
      {
        source: "/what-are-dental-veneers-and-how-do-they-work",
        destination: "/blogs/what-are-dental-veneers-and-how-do-they-work",
        permanent: true,
      },
      {
        source: "/types-of-dental-filling-which-one-is-right-for-your-teeth",
        destination: "/blogs/types-of-dental-filling-which-one-is-right-for-your-teeth",
        permanent: true,
      },
      {
        source: "/common-causes-of-tooth-pain-and-how-to-address-them",
        destination: "/blogs/common-causes-of-tooth-pain-and-how-to-address-them",
        permanent: true,
      },
      {
        source: "/how-safe-are-dental-implants-if-you-have-diabetes",
        destination: "/blogs/how-safe-are-dental-implants-if-you-have-diabetes",
        permanent: true,
      },
      {
        source: "/benefits-of-invisalign-straighter-and-healthier-teeth",
        destination: "/blogs/benefits-of-invisalign-straighter-and-healthier-teeth",
        permanent: true,
      },
      {
        source: "/teeth-whitening-process-achieve-a-brighter-smile-easily",
        destination: "/blogs/teeth-whitening-process-achieve-a-brighter-smile-easily",
        permanent: true,
      },
      {
        source: "/dental-crowns-types-benefits-and-procedure",
        destination: "/blogs/dental-crowns-types-benefits-and-procedure",
        permanent: true,
      },
      {
        source: "/best-reasons-to-have-your-teeth-professionally-whitened",
        destination: "/blogs/best-reasons-to-have-your-teeth-professionally-whitened",
        permanent: true,
      },
      {
        source: "/advantages-of-laser-assisted-root-canal-treatment",
        destination: "/blogs/advantages-of-laser-assisted-root-canal-treatment",
        permanent: true,
      },
      {
        source: "/why-dental-implants-are-the-best-solution-for-missing-teeth",
        destination: "/blogs/why-dental-implants-are-the-best-solution-for-missing-teeth",
        permanent: true,
      },
      {
        source: "/what-is-smile-design-types-treatment-its-cost",
        destination: "/blogs/what-is-smile-design-types-treatment-its-cost",
        permanent: true,
      },
      {
        source: "/types-of-dental-implants-and-which-one-is-best-for-you",
        destination: "/blogs/types-of-dental-implants-and-which-one-is-best-for-you",
        permanent: true,
      },
      {
        source: "/services/invisalign-treatment-hyderabad",
        destination: "/services/invisalign-treatment",
        permanent: true,
      },
      {
        source: "/services/laser-gum-treatment-hyderabad",
        destination: "/services/laser-gum-treatment",
        permanent: true,
      },

      {
        source: "/services/wisdom-teeth-removal-hyderabad",
        destination: "/services/wisdom-teeth-removal",
        permanent: true,
      },
      {
        source: "/services/braces-treatments",
        destination: "/services/braces-aligners",
        permanent: true,
      },
      {
        source: "/services/dental-veneers-in-hyderabad",
        destination: "/services/dental-veneers",
        permanent: true,
      },
      {
        source: "/services/orthodontist-in-hyderabad",
        destination: "/services/orthodontic-treatment",
        permanent: true,
      },
      {
        source: "/services/tooth-pain-treatment-in-hyderabad",
        destination: "/services/tooth-pain-treatment",
        permanent: true,
      },
      {
        source: "/microscopic-dentistry",
        destination: "/services/microscopic-dentistry",
        permanent: true,
      },

      {
        source: "/conscious-sedation",
        destination: "/services/conscious-sedation",
        permanent: true,
      },


      {
        source: "/dentist-in-kondapur",
        destination: "/best-dentist-in-kondapur",
        permanent: true,
      },

      {
        source: "/blog/category/dental-care",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/category/dental-crowns",
        destination: "/blogs/dental-crowns-types-benefits-and-procedure",
        permanent: true,
      },
      {
        source: "/blog/category/dental-filling",
        destination: "/blogs/types-of-dental-filling-which-one-is-right-for-your-teeth",
        permanent: true,
      },
      {
        source: "/blog/category/dental-implant",
        destination: "/blogs/dental-implant-cost-in-hyderabad",
        permanent: true,
      },
      {
        source: "/blog/category/invisalign",
        destination: "/blogs/a-step-by-step-guide-how-to-get-invisalign-treatment",
        permanent: true,
      },
      {
        source: "/blog/category/pediatric",
        destination: "/blogs/look-for-a-pediatric-dentist-for-your-infants-teeth",
        permanent: true,
      },
      {
        source: "/blog/category/root-canal-treatment",
        destination: "/blogs/root-canal-treatment-cost-in-hyderabad",
        permanent: true,
      },
      {
        source: "/blog/category/smile-design",
        destination: "/blogs/what-is-smile-design-types-treatment-its-cost",
        permanent: true,
      },
      {
        source: "/blog/category/smile-makeover",
        destination: "/blogs/how-smile-makeovers-transform-facial-harmony",
        permanent: true,


      },
      {
        source: "/blog/category/teeth-gap-treatment",
        destination: "/blogs/how-to-fix-teeth-gap-expert-solutions",
        permanent: true,
      },
      {
        source: "/blog/category/teeth-whitening",
        destination: "/blogs/teeth-whitening-process-achieve-a-brighter-smile-easily",
        permanent: true,
      },
      {
        source: "/blog/category/tooth-pain",
        destination: "/blogs/common-causes-of-tooth-pain-and-how-to-address-them",
        permanent: true,
      },
      {
        source: "/blog/category/wisdom-tooth",
        destination: "/blogs/get-your-wisdom-tooth-removed-to-prevent-tooth-loss",
        permanent: true,
      },
      {
        source: "/smile-makeover",
        destination: "/services/smile-makeover-Hyderabad",
        permanent: true,
      },

      {
        source: "/services/smile-makeover",
        destination: "/services/smile-makeover-Hyderabad",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/dental-implant",
        destination: "/dental-implant/index.html",
      },
      {
        source: "/store-visit-generic",
        destination: "/store-visit-generic/index.html",
      },
      {
        source: "/kondapur-generic",
        destination: "/kondapur-generic/index.html",
      },
      {
        source: "/dental-generic",
        destination: "/dental-generic/index.html",
      },
      {
        source: "/invisalign",
        destination: "/invisalign/index.html",
      },
      {
        source: "/kukatpally-generic",
        destination: "/kukatpally-generic/index.html",
      },





    ];
  },
};

export default nextConfig;