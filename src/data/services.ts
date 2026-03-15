import {
    BookOpen,
    Edit3,
    FileText,
    Search,
    List,
    User,
    Eye,
    Layers,
    Layout,
    Type,
    Smartphone,
    Palette,
    Camera,
    Target,
    Printer,
    Settings,
    Mic,
    Shield,
    Database,
    Boxes,
    Rocket,
    Share2,
    Mail,
    Newspaper,
    Star,
    TrendingUp,
    Video,
    Globe,
    Briefcase,
    FileCheck,
    Tv,
    Key,
    Scale,
    DollarSign
} from "lucide-react";

export type RelatedTool = {
    title: string;
    slug: string;
    description: string;
};

export type Service = {
    slug: string;
    title: string;
    description: string;
    category: string;
    icon: any;
    features: string[];
    relatedTools?: RelatedTool[];
};

export const categories = [
    "Editorial & Content Services",
    "Design & Creative Services",
    "Production & Distribution Services",
    "Marketing & Publicity Services",
    "Business & Legal Services"
];

export const services: Service[] = [
    // Editorial & Content Services
    {
        slug: "developmental-editing",
        title: "Developmental Editing",
        description: "Focus on the big-picture structure, pacing, and overall narrative arc of your manuscript.",
        category: "Editorial & Content Services",
        icon: BookOpen,
        features: ["Structure analysis", "Pacing optimization", "Character development review"],
        relatedTools: [
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy while you edit." }
        ]
    },
    {
        slug: "substantive-editing",
        title: "Substantive Editing",
        description: "Improve the clarity, flow, and coherence of your writing at the paragraph and sentence level.",
        category: "Editorial & Content Services",
        icon: Edit3,
        features: ["Clarity enhancement", "Flow improvement", "Logical consistency"]
    },
    {
        slug: "copyediting",
        title: "Copyediting",
        description: "Ensure your grammar, syntax, and style are impeccable and consistent throughout the book.",
        category: "Editorial & Content Services",
        icon: FileText,
        features: ["Grammar correction", "Syntax polishing", "Consistency check"]
    },
    {
        slug: "proofreading",
        title: "Proofreading",
        description: "The final typo and error check before your book goes to print or digital distribution.",
        category: "Editorial & Content Services",
        icon: Search,
        features: ["Typo hunting", "Punctuation check", "Final polish"]
    },
    {
        slug: "fact-checking",
        title: "Fact-Checking",
        description: "Verify data, references, and historical accuracy to maintain the credibility of your work.",
        category: "Editorial & Content Services",
        icon: FileText,
        features: ["Source verification", "Data audit", "Reference checking"]
    },
    {
        slug: "indexing",
        title: "Indexing",
        description: "Create a professional, usable back-of-book index for non-fiction titles.",
        category: "Editorial & Content Services",
        icon: List,
        features: ["Alphabetical indexing", "Cross-referencing", "Term optimization"]
    },
    {
        slug: "ghostwriting",
        title: "Ghostwriting",
        description: "Our professional writers help you turn your ideas and vision into a fully realized book.",
        category: "Editorial & Content Services",
        icon: User,
        features: ["Collaborative drafting", "Voice matching", "Full manuscript creation"]
    },
    {
        slug: "sensitivity-reading",
        title: "Sensitivity Reading",
        description: "Review your manuscript for cultural accuracy and avoid unintentional bias or stereotypes.",
        category: "Editorial & Content Services",
        icon: Eye,
        features: ["Cultural consulting", "Inclusion review", "Bias identification"]
    },

    // Design & Creative Services
    {
        slug: "cover-design",
        title: "Cover Design",
        description: "Breathtaking front, back, and spine designs that capture attention and drive sales.",
        category: "Design & Creative Services",
        icon: Palette,
        features: ["High-impact art", "Print-ready layout", "Spine & back covers"],
        relatedTools: [
            { title: "Spine Width Calculator", slug: "spine-width-calculator", description: "Calculate exact spine dimensions for your print cover." },
            { title: "QR Code Generator", slug: "qr-code-generator", description: "Generate custom QR codes for your back cover." }
        ]
    },
    {
        slug: "interior-formatting",
        title: "Interior Formatting",
        description: "Professional interior layout and typesetting for a premium reading experience in print.",
        category: "Design & Creative Services",
        icon: Layout,
        features: ["Typography selection", "Chapter heading design", "PDF/X-1a export"]
    },
    {
        slug: "ebook-conversion",
        title: "eBook Conversion",
        description: "Flawless EPUB and MOBI formatting optimized for all major digital reading devices.",
        category: "Design & Creative Services",
        icon: Smartphone,
        features: ["EPUB Reflowable", "Fixed layout options", "Kindle optimization"]
    },
    {
        slug: "illustration",
        title: "Illustration",
        description: "Custom artwork or technical drawings tailored to enhance your book's content.",
        category: "Design & Creative Services",
        icon: Layers,
        features: ["Character art", "Technical diagrams", "Custom maps"]
    },
    {
        slug: "photography",
        title: "Photography",
        description: "Professional author portraits and high-quality imagery for book content and marketing.",
        category: "Design & Creative Services",
        icon: Camera,
        features: ["Author headshots", "Stock photo curation", "Custom sets"]
    },
    {
        slug: "logo-brand-design",
        title: "Logo & Brand Design",
        description: "Establish a unique visual identity for yourself as an author or for your publishing press.",
        category: "Design & Creative Services",
        icon: Target,
        features: ["Author logos", "Brand guidelines", "Platform identity"]
    },

    // Production & Distribution Services
    {
        slug: "print-on-demand-setup",
        title: "Print-on-Demand (POD) Setup",
        description: "Enable global distribution with no inventory requirements via Amazon and IngramSpark.",
        category: "Production & Distribution Services",
        icon: Printer,
        features: ["IngramSpark setup", "KDP Print config", "Global distribution"],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated net earnings per sale." }
        ]
    },
    {
        slug: "offset-printing-management",
        title: "Offset Printing Management",
        description: "Coordinate high-volume bulk print runs for maximum cost efficiency and quality.",
        category: "Production & Distribution Services",
        icon: Settings,
        features: ["Vendor sourcing", "Quality control", "Low per-unit cost"]
    },
    {
        slug: "audiobook-production",
        title: "Audiobook Production",
        description: "Professional narration, editing, and distribution for the growing audiobook market.",
        category: "Production & Distribution Services",
        icon: Mic,
        features: ["Voice actor casting", "Studio recording", "ACX/Findaway distribution"],
        relatedTools: [
            { title: "Audible Sales Calculator", slug: "audible-sales-calculator", description: "Calculate estimated royalties from Audible sales." }
        ]
    },
    {
        slug: "isbn-acquisition",
        title: "ISBN & Barcode Acquisition",
        description: "Secure and manage international serial numbers and barcodes for your titles.",
        category: "Production & Distribution Services",
        icon: Shield,
        features: ["Bowker management", "Barcode generation", "Title registration"],
        relatedTools: [
            { title: "ISBN Barcode Generator", slug: "isbn-barcode-generator", description: "Generate high-resolution barcodes from your ISBN." }
        ]
    },
    {
        slug: "copyright-registration",
        title: "Copyright Registration",
        description: "Official registration with the Library of Congress (US) or equivalent global bodies.",
        category: "Production & Distribution Services",
        icon: Database,
        features: ["Legal filing", "Certificate handling", "Asset protection"]
    },
    {
        slug: "metadata-optimization",
        title: "Metadata Optimization",
        description: "Strategically select keywords and categories to improve discoverability in retail search engines.",
        category: "Production & Distribution Services",
        icon: Search,
        features: ["Keyword research", "Category mapping", "Blurb optimization"],
        relatedTools: [
            { title: "Book Description Generator", slug: "book-description-generator", description: "Optimize your book's blurb with AI-powered suggestions." },
            { title: "KENP Calculator", slug: "kenp-calculator", description: "Calculate royalties from Kindle Unlimited page reads." }
        ]
    },
    {
        slug: "warehousing-fulfillment",
        title: "Warehousing & Fulfillment",
        description: "Storage and direct shipping solutions for authors selling physical stock.",
        category: "Production & Distribution Services",
        icon: Boxes,
        features: ["Inventory tracking", "Direct-to-consumer", "Bulk shipping"]
    },

    // Marketing & Publicity Services
    {
        slug: "book-launch-strategy",
        title: "Book Launch Strategy",
        description: "A comprehensive roadmap to build momentum and hit bestseller lists on day one.",
        category: "Marketing & Publicity Services",
        icon: Rocket,
        features: ["Timeline planning", "Launch team management", "Promo stacking"],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Model your launch success on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Perfect your launch-day sales copy." }
        ]
    },
    {
        slug: "social-media-management",
        title: "Social Media Management",
        description: "Grow your author platform and engage with your readers across all major social networks.",
        category: "Marketing & Publicity Services",
        icon: Share2,
        features: ["Content creation", "Ad management", "Profile optimization"],
        relatedTools: [
            { title: "Hashtag Generator", slug: "hashtag-generator", description: "Generate viral hashtags for your book promos." }
        ]
    },
    {
        slug: "email-marketing",
        title: "Email Marketing & Newsletters",
        description: "Build and nurture your most valuable asset: a direct line to your readers.",
        category: "Marketing & Publicity Services",
        icon: Mail,
        features: ["Lead magnet creation", "Funnel setup", "Newsletter design"]
    },
    {
        slug: "press-release",
        title: "Press Release & Distribution",
        description: "Professional media outreach to secure features, interviews, and reviews.",
        category: "Marketing & Publicity Services",
        icon: Newspaper,
        features: ["Media kit design", "Journalist targeting", "PR writing"]
    },
    {
        slug: "review-sourcing",
        title: "Review Sourcing (ARC)",
        description: "Manage Advance Reader Copies (ARCs) to secure honest reviews for your launch.",
        category: "Marketing & Publicity Services",
        icon: Star,
        features: ["ARC distribution", "Review hunting", "Reader engagement"]
    },
    {
        slug: "advertising-management",
        title: "Ad Management",
        description: "Data-driven Amazon and Facebook advertising campaigns to scale your ROI.",
        category: "Marketing & Publicity Services",
        icon: TrendingUp,
        features: ["Amazon Ads", "FB/Meta Ads", "A/B testing"]
    },
    {
        slug: "book-trailer",
        title: "Book Trailer Production",
        description: "Cinematic video trailers that tell your book's story in a minute or less.",
        category: "Marketing & Publicity Services",
        icon: Video,
        features: ["Scriptwriting", "Visual effects", "Audio mixing"]
    },
    {
        slug: "author-website",
        title: "Author Website Design",
        description: "A professional digital flagship to sell books and capture reader emails.",
        category: "Marketing & Publicity Services",
        icon: Globe,
        features: ["Custom design", "Mobile optimization", "E-commerce ready"]
    },

    // Business & Legal Services
    {
        slug: "literary-agency",
        title: "Literary Agency Representation",
        description: "Consultation and preparation for pitching to traditional publishers and agents.",
        category: "Business & Legal Services",
        icon: Briefcase,
        features: ["Query letter review", "Proposal crafting", "Agent targeting"]
    },
    {
        slug: "translation-rights",
        title: "Translation Rights",
        description: "Open your book to global markets with licensed translations and international rights.",
        category: "Business & Legal Services",
        icon: Globe,
        features: ["Language matching", "Rights sales", "Contracting"]
    },
    {
        slug: "film-tv-optioning",
        title: "Film/TV Optioning",
        description: "Position your book for adaptation into movies or television series.",
        category: "Business & Legal Services",
        icon: Tv,
        features: ["Pitch deck creation", "Producer outreach", "Deal structure"]
    },
    {
        slug: "foreign-rights",
        title: "Foreign Rights Licensing",
        description: "Manage and sell sub-rights to publishers in other countries and territories.",
        category: "Business & Legal Services",
        icon: Key,
        features: ["Territory mapping", "Royalty negotiation", "License management"]
    },
    {
        slug: "legal-contract-review",
        title: "Contract & Legal Review",
        description: "Professional legal oversight for publishing contracts, ensuring you keep your rights.",
        category: "Business & Legal Services",
        icon: Scale,
        features: ["Agreement audit", "Rights protection", "Term negotiation"]
    },
    {
        slug: "royalty-accounting",
        title: "Royalty Accounting",
        description: "Accurate tracking and reporting of sales and earnings across all platforms.",
        category: "Business & Legal Services",
        icon: DollarSign,
        features: ["Sales tracking", "Payout management", "Tax documentation"],
        relatedTools: [
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Quickly estimate your net royalties across formats." },
            { title: "KENP Calculator", slug: "kenp-calculator", description: "Track your earnings from Kindle Unlimited reads." }
        ]
    }
];
