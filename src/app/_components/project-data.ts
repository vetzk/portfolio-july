export type Project = {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    size: "small" | "medium" | "large";
    link: string | null;
    github?: string;
    featured: boolean;
    status: "Live" | "Development";
    year: string;
};

export const projects: Project[] = [
    {
        slug: "niko-electronic-website",
        title: "NIKO Electronic Website",
        description:
            "Modern product showcase website for NIKO Electronic, featuring interactive displays of electronic products with detailed specifications, high-quality imagery, and seamless user experience to drive sales and brand engagement.",
        tech: ["Laravel", "Next.js", "Zod", "Framer Motion"],
        image: "/NIKO-portfolio-cover.PNG",
        link: "https://www.nikoelectronic.com",
        size: "large",
        featured: true,
        status: "Live",
        year: "2025",
    },
    {
        slug: "sinshe-shaolin",
        title: "Sinshe Shaolin",
        description:
            "Comprehensive therapy booking platform featuring intelligent queue management system, real-time appointment scheduling, automated SMS notifications, and live session updates for seamless patient experience.",
        tech: [
            "Laravel",
            "Next.js",
            "Twilio",
            "Text To Speech",
            "Pusher.js",
            "Laravel Echo",
            "Zod",
        ],
        image: "/sinshe-cover.PNG",
        size: "medium",
        link: "https://www.sinsheshaolin.com",
        github: "https://github.com/vetzk/therapy-reservation",
        featured: false,
        status: "Live",
        year: "2025",
    },
    {
        slug: "sakn-company-profile",
        title: "SAKN",
        description:
            "Professional company profile website showcasing SAKN's corporate identity, services, and achievements with elegant design and smooth animations to establish strong digital presence and credibility.",
        tech: ["Next.js", "Framer Motion"],
        image: "/sakn-cover.PNG",
        size: "small",
        github: "https://github.com/vetzk/company-profile-agency",
        link: "https://company-profile-agency.vercel.app/",
        featured: false,
        status: "Live",
        year: "2025",
    },
    {
        slug: "niko-electronic-cms",
        title: "Niko Electronic CMS",
        description:
            "Custom content management system built specifically for NIKO Electronic, featuring drag-and-drop interface, advanced content editing capabilities, and streamlined workflow for efficient product catalog management.",
        tech: ["Next.js", "Tiptap", "dnd-kit", "Laravel", "Zod"],
        image: "/niko-cms-cover.PNG",
        size: "medium",
        link: null,
        featured: true,
        status: "Live",
        year: "2024",
    },
    {
        slug: "niko-marketing-communication",
        title: "Niko Electronic Marketing Communication",
        description:
            "Comprehensive marketing communication platform for NIKO Electronic, featuring campaign management, analytics dashboard, customer engagement tools, and performance tracking to optimize marketing strategies.",
        tech: ["Next.js", "Chart.js", "Laravel", "Zod"],
        image: "/nei-sales-cover.PNG",
        size: "small",
        link: null,
        featured: false,
        status: "Live",
        year: "2025",
    },
    {
        slug: "esa-creative-website",
        title: "Esa Creative Website",
        description:
            "Dynamic digital agency website showcasing Esa Creative's expertise, team profiles, portfolio highlights, and service offerings with modern design and interactive elements to attract potential clients.",
        tech: ["Next.js", "Tiptap", "Framer Motion", "Nodemailer", "Laravel"],
        image: "/esa-creative-cover.PNG",
        size: "large",
        link: "https://www.esacreatives.com",
        featured: true,
        status: "Live",
        year: "2025",
    },
    {
        slug: "toros-farm-indonesia",
        title: "Toros Farm Indonesia",
        description:
            "A modern, user-friendly digital presence for Toros Farm Indonesia — a halal-certified meat producer supplying fresh and frozen poultry, beef, mutton, and processed meats. The website presents their product catalog, explains their commitment to traditional halal slaughtering and natural processing, and makes it easy for customers or retailers to explore and order products. The design is clean, trustworthy, and built to convey both quality and authenticity.",
        tech: ["Next.js", "Zod", "Framer Motion", "Laravel"],
        image: "/toros-farm-thumbnail.PNG",
        size: "large",
        link: "https://www.torosfarmindonesia.com",
        featured: true,
        status: "Live",
        year: "2025",
    },
    {
        slug: "toros-farm-ecommerce",
        title: "Toros Farm Indonesia – E-commerce Website",
        description:
            "An e-commerce platform built for Toros Farm Indonesia, a halal-certified meat producer and distributor offering fresh and frozen poultry, beef, mutton, and processed meats. The site features a full product catalog, detailed product descriptions, halal-compliance information, and clean responsive design to build trust with customers. Developed to make ordering meat products easy, transparent, and accessible nationwide while reflecting Toros Farm’s commitment to natural, hygienic, and ethically-processed meats.",
        tech: ["Next.js", "Zod", "Framer Motion", "Zustand", "Laravel"],
        image: "/toros-ecommerce-thumbnail.PNG",
        size: "large",
        link: "https://shop.torosfarmindonesia.com/",
        featured: true,
        status: "Live",
        year: "2025",
    },
    {
        slug: "secure-access-parking-cms",
        title: "Secure Access Parking CMS - PT. Sistem Aksesindo Perdana",
        description:
            "A real-time Parking Management CMS that allows administrators to monitor active parking devices, track locations, view system statuses, and manage on-site operations efficiently.",
        tech: ["Next.js", "Zod", "Leaflet.js", "Laravel"],
        image: "/sap-cms-thumbnail.PNG",
        size: "medium",
        link: null,
        featured: false,
        status: "Development",
        year: "2025",
    },
    {
        slug: "secure-access-parking-ui-display",
        title: "Secure Access Parking UI Display - PT. Sistem Aksesindo Perdana",
        description:
            "A real-time parking access display that shows entry status, validations, and system feedback to help users access parking gates smoothly.",
        tech: ["Tauri", "Rust"],
        image: "/sap-thumbnail-ui.PNG",
        size: "small",
        link: null,
        featured: false,
        status: "Development",
        year: "2025",
    },
];

export const getProjectType = (size: Project["size"]) => {
    if (size === "large") return "Flagship Build";
    if (size === "medium") return "Production App";
    return "Compact Product";
};

export const getImpactLine = (description: string) => {
    const firstSentence = description.split(".")[0];
    return firstSentence.length > 150
        ? `${firstSentence.slice(0, 150)}...`
        : `${firstSentence}.`;
};
