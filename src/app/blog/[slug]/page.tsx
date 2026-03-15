"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ChevronRight, ArrowLeft } from "lucide-react";

const categoryColors: Record<string, string> = {
    "Publishing Tips": "bg-primary/10 text-primary border-primary/20",
    "Marketing": "bg-orange-500/10 text-orange-600 border-orange-500/20",
    "Tools & Resources": "bg-secondary/20 text-[#064e3b] border-secondary/30",
    "Author Stories": "bg-purple-500/10 text-purple-600 border-purple-500/20",
    "Industry News": "bg-blue-500/10 text-blue-600 border-blue-500/20",
};

type Section =
    | { type: "h2"; text: string }
    | { type: "p"; text: string }
    | { type: "hr" }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] }
    | { type: "blockquote"; text: string }
    | { type: "tip"; title: string; body: string }
    | { type: "table"; headers: string[]; rows: string[][] };

type Post = {
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    sections: Section[];
};

const posts: Record<string, Post> = {
    "how-to-format-your-book-for-kdp": {
        title: "How to Format Your Book for Amazon KDP in 2026",
        excerpt: "A step-by-step guide to preparing a print-ready interior file that passes KDP's automated quality checks on the first submission.",
        category: "Publishing Tips",
        author: "Sarah J. Montgomery",
        date: "Feb 24, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1400&auto=format&fit=crop",
        sections: [
            { type: "h2", text: "Why Formatting Matters More Than Ever" },
            { type: "p", text: "Amazon KDP's automated review system has become significantly stricter in 2026. Before your book even reaches a human reviewer, its software scans for bleed settings, margin violations, image resolution, and font embedding. A single failed check means a rejection email and a 48-72 hour delay. Getting it right the first time is essential." },
            { type: "hr" },
            { type: "h2", text: "Step 1 — Choose Your Trim Size Before You Write a Single Page" },
            { type: "p", text: "Your trim size dictates your margin requirements, and your margins define your usable text area. Changing trim size after formatting is a disaster — reflowing text, resizing images, and fixing widows takes hours." },
            { type: "table", headers: ["Format", "Trim Size", "Best For"], rows: [["Standard Paperback", "6\" x 9\"", "Novels, memoirs, non-fiction"], ["Compact", "5\" x 8\"", "Literary fiction"], ["Large Print", "8.5\" x 11\"", "How-to, workbooks"], ["Square", "8\" x 8\"", "Children's, photography"]] },
            { type: "tip", title: "Our Recommendation", body: "Start with 6\"x9\" unless you have a specific reason not to. It has the widest distribution support and the lowest print cost per unit." },
            { type: "hr" },
            { type: "h2", text: "Step 2 — Set Your Margins Correctly" },
            { type: "p", text: "KDP's margin requirements depend on page count. The gutter (inside margin) must be larger to account for the binding. Bleed is required if any element — image, color block, or background — touches the page edge." },
            { type: "ul", items: ["Top: 0.75\"", "Bottom: 0.75\"", "Outside: 0.5\"", "Gutter (up to 150 pages) = 0.375\"", "Gutter (151-400 pages) = 0.5\"", "Gutter (401-600 pages) = 0.625\"", "Gutter (over 600 pages) = 0.75\""] },
            { type: "hr" },
            { type: "h2", text: "Step 3 — Typography That Reads Beautifully in Print" },
            { type: "p", text: "Screen fonts and print fonts are not the same. Proven body text fonts for print include Garamond, Palatino Linotype, Georgia, and Minion Pro. Use 11pt-12pt body size, 1.3x-1.5x line spacing, and 0.2\"-0.3\" paragraph indents with no blank line between paragraphs." },
            { type: "hr" },
            { type: "h2", text: "Step 4 — Image Resolution and Embedding" },
            { type: "p", text: "Every image in your interior must be at least 300 DPI at its final print size. Export your PDF as Press Quality or PDF/X-1a, embed all fonts, and use Grayscale for B&W interiors or CMYK for color. Do NOT flatten transparency." },
            { type: "hr" },
            { type: "h2", text: "Step 5 — The Final Preflight Checklist" },
            { type: "ul", items: ["Correct trim size set in document", "All margins follow KDP specifications", "Bleed added if any content touches page edge", "All fonts embedded in PDF", "Images are 300 DPI or higher at print size", "No content in the gutter area", "Page numbers on all relevant pages", "PDF file size is under KDP's 650 MB limit"] },
            { type: "hr" },
            { type: "h2", text: "Common Rejection Reasons and How to Avoid Them" },
            { type: "ul", items: ["Fonts not embedded — Export as PDF/X-1a or enable font embedding in your PDF export settings", "Images below minimum resolution — Replace low-DPI images with higher resolution sources", "Content too close to the trim edge — Increase your outside margin", "Bleed required — Add 0.125\" bleed if any element extends to the page edge"] },
        ],
    },
    "isbn-barcode-guide-for-authors": {
        title: "The Author's Complete ISBN and Barcode Guide",
        excerpt: "Everything you need to know about ISBNs, EAN-13 barcodes, and price extensions before your book goes to print.",
        category: "Tools & Resources",
        author: "Marcus Thorne",
        date: "Feb 20, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1543005128-d39eefd02c4b?q=80&w=1400&auto=format&fit=crop",
        sections: [
            { type: "h2", text: "What Is an ISBN?" },
            { type: "p", text: "An ISBN is the universal identity card for your book. It is a 13-digit number that uniquely identifies a specific edition, format, and publisher of a title. Every major retailer, library, and distribution system relies on the ISBN to track inventory, report sales, and calculate royalties. Without it, your book simply does not exist in the global retail ecosystem." },
            { type: "hr" },
            { type: "h2", text: "ISBN vs. ASIN: What's the Difference?" },
            { type: "p", text: "Amazon assigns its own ASIN (Amazon Standard Identification Number) to every product. If you publish exclusively through KDP without providing an ISBN, Amazon gives your book an ASIN — but that number only works within Amazon. Bookstores cannot order your book, libraries cannot catalog it, and major distributors like Ingram will not recognize it. For wide distribution, you need a proper ISBN." },
            { type: "hr" },
            { type: "h2", text: "How to Get an ISBN" },
            { type: "ul", items: ["United States (Bowker): myidentifiers.com — Single ISBN $125, block of 10 costs $295", "United Kingdom: isbn.nielsenbook.co.uk — Block of 10 costs £164", "Free ISBNs from KDP or IngramSpark list the platform as publisher of record — for professional publishing, buy your own"] },
            { type: "hr" },
            { type: "h2", text: "Understanding the EAN-13 Barcode" },
            { type: "p", text: "The ISBN barcode is an EAN-13 barcode (European Article Number, 13 digits). Digits 1-3 are the country prefix (978 or 979 for books globally), digits 4-12 are the publisher and title identifier, and digit 13 is the mathematically derived check digit." },
            { type: "hr" },
            { type: "h2", text: "The Price Extension (EAN-5)" },
            { type: "p", text: "The 5-digit extension barcode to the right of the main ISBN encodes the retail price. The first digit is the currency indicator, and digits 2-5 are the price in cents." },
            { type: "table", headers: ["Currency", "First Digit", "Example"], rows: [["US Dollar (USD)", "5", "51999 = $19.99"], ["Canadian Dollar (CAD)", "6", "62495 = $24.95"], ["British Pound (GBP)", "0", "01099 = £10.99"], ["Australian Dollar (AUD)", "7", "73499 = $34.99"]] },
            { type: "hr" },
            { type: "h2", text: "Barcode Placement on Your Cover" },
            { type: "ul", items: ["Standard placement: bottom-right corner of the back cover", "Minimum size: 1.5\" wide x 1.0\" tall", "Background: pure white only (#FFFFFF)", "Quiet zone: at least 0.25\" of white space on all four sides", "No text or design elements inside the quiet zone"] },
        ],
    },
    "amazon-ads-for-indie-authors": {
        title: "Amazon Ads That Actually Work for Indie Authors",
        excerpt: "We analyzed 200 campaigns. Here are the keyword patterns, bid strategies, and ad copy frameworks that drive profitable ROAS for fiction and non-fiction.",
        category: "Marketing",
        author: "Elena Rossi",
        date: "Feb 18, 2026",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop",
        sections: [
            { type: "h2", text: "Why Most Author Amazon Ads Fail" },
            { type: "p", text: "After analyzing 200 campaigns over 18 months, a clear pattern emerged: 95% of campaigns that failed did so within the first two weeks — not because Amazon ads do not work, but because authors made the same four structural mistakes: targeting too broadly with no negative keywords, bidding on keywords they could not convert profitably, running ads on covers that could not compete at thumbnail size, and giving up before the algorithm had enough data." },
            { type: "hr" },
            { type: "h2", text: "Understand Your Break-Even ACoS First" },
            { type: "p", text: "Before setting a single bid, calculate your Advertising Cost of Sales (ACoS) break-even point. Divide your royalty per sale by your list price and multiply by 100. For a $4.99 ebook at 70% royalty ($3.49), break-even ACoS is 69.9%. Anything below that percentage is profitable advertising." },
            { type: "hr" },
            { type: "h2", text: "Campaign Structure That Works" },
            { type: "ol", items: ["Run a broad auto campaign for 2 weeks with $5-10/day. Let it gather data without touching it.", "After 2 weeks, open the Search Term Report and identify converting terms and click-draining non-converters.", "Build manual campaigns from winners: exact match for proven terms, phrase match for variations, product targeting for comparable books.", "Add all non-converting terms as negative exact keywords in your auto campaign. This is where most profit is recovered."] },
            { type: "hr" },
            { type: "h2", text: "Keyword Strategy by Genre" },
            { type: "p", text: "For fiction, focus on competitor author names and comparable book titles. Readers search by author similarity. For non-fiction, focus on problem-based keywords rather than author names — readers search for solutions, not writers. Use formats like 'how to [specific outcome]', 'best books on [topic]', and '[topic] guide for beginners'." },
            { type: "hr" },
            { type: "h2", text: "The 60-Day Rule" },
            { type: "p", text: "Amazon's ad algorithm is still learning for the first 30 days. Most authors quit during this phase. Our data shows campaigns that survived past day 60 had 3.2x lower ACoS than at day 14, 2.1x higher CTR as targeting refined, and 40% lower cost-per-click as quality scores improved. Optimize once per week on a schedule and give the algorithm time to work." },
        ],
    },
    "from-manuscript-to-global-bestseller": {
        title: "From Manuscript to Global Bestseller in 90 Days",
        excerpt: "David Chen shares the exact publishing and marketing timeline that took his debut tech book to #1 in three Amazon sub-categories simultaneously.",
        category: "Author Stories",
        author: "David Chen",
        date: "Feb 14, 2026",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=1400&auto=format&fit=crop",
        sections: [
            { type: "h2", text: "Day 0: The Manuscript Was Done" },
            { type: "p", text: "I spent 14 months writing The Automation Paradox — a book about how AI was reshaping knowledge work. I finished the final chapter in October 2025 with no agent, no traditional publisher, and no prior publishing experience. What I had was a large following in the tech space and a deep obsession with systems. I decided to treat this like a product launch." },
            { type: "hr" },
            { type: "h2", text: "Days 1-14: Editing and Structural Work" },
            { type: "p", text: "I hired a developmental editor ($1,800 for a full manuscript assessment and one round of line edits). She identified three structural issues: Part Two was 35% longer than needed, Chapter 6 pulled readers out of the narrative arc, and the introduction buried the core argument 4 pages in. I rewrote Part Two, cut Chapter 6 entirely (it became a blog post), and rewrote the intro. Total time: 11 days." },
            { type: "hr" },
            { type: "h2", text: "Days 26-40: Pre-Marketing" },
            { type: "ul", items: ["Emailed my 8,400-subscriber list 3 times: announcement, excerpt, pre-order goes live", "Posted a 10-part thread sharing the core argument — 1.2M impressions, 4,100 retweets", "Reached out to 30 podcasters — 8 confirmed interviews timed for launch week", "Set up a free chapter download landing page — added 1,900 new subscribers"] },
            { type: "hr" },
            { type: "h2", text: "Day 60: Launch Week" },
            { type: "p", text: "Launch day: book went live at 6 AM, email to list sent, first podcast aired at noon. By 3 PM the book hit #1 in Automation. By 7 PM, #1 in AI Ethics. Next morning, #1 in Labor and Industrial Relations. By Day 72, total sales were 4,318 copies across ebook and paperback combined." },
            { type: "hr" },
            { type: "h2", text: "The Numbers at Day 90" },
            { type: "ul", items: ["Total units sold: 6,891", "Revenue: $24,118 gross / $17,882 net after fees and ad spend", "Amazon ad ACoS: 28% (comfortably profitable)", "Reviews: 219 with an average 4.6 stars", "Newsletter subscribers added during campaign: 4,200"] },
            { type: "hr" },
            { type: "h2", text: "What I'd Do Differently" },
            { type: "ul", items: ["Start collecting emails 6 months earlier, not 6 weeks", "Hire a publicist for press — zero mainstream media coverage was a missed opportunity", "Record an audiobook simultaneously — I left 20-30% of potential revenue on the table"] },
        ],
    },
    "book-description-seo-optimization": {
        title: "Writing Book Descriptions That Rank and Convert",
        excerpt: "Your book description is your 24/7 sales page. Learn the keyword placement, hooks, and emotional triggers that move readers from browse to buy.",
        category: "Marketing",
        author: "Amina Al-Farsi",
        date: "Feb 10, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1400&auto=format&fit=crop",
        sections: [
            { type: "h2", text: "Your Description Is a Sales Page, Not a Summary" },
            { type: "p", text: "Most authors write their book description as a condensed summary of what happens in the book. This is the single biggest mistake in self-published book marketing. A book description is a sales page. Its only job is to get the right reader to click Buy Now. Every sentence earns its place or gets cut." },
            { type: "hr" },
            { type: "h2", text: "The Anatomy of a Converting Description" },
            { type: "ol", items: ["The Hook (1-2 sentences): Grabs the right reader. Never start with the protagonist's name. Start with the reader's emotional state.", "The Setup (2-3 sentences): Introduce the core conflict or problem. Be specific — vague setups kill conversions.", "The Stakes (2-3 sentences): What happens if the protagonist fails? This is where page-turning compulsion is created.", "The Close (1 sentence): Tell the reader what to do — 'Perfect for fans of [comparable author]' or a direct buy prompt."] },
            { type: "hr" },
            { type: "h2", text: "Hook Templates That Work" },
            { type: "ul", items: ["Fiction: 'She thought she had finally escaped. She was wrong.'", "Fiction: 'The marriage seemed perfect. That was the first lie.'", "Non-fiction: 'Most entrepreneurs fail in year two. Here is exactly why — and how to be the exception.'", "Non-fiction: 'The traditional job market is gone. This is what comes next.'"] },
            { type: "hr" },
            { type: "h2", text: "Keyword Placement for Amazon SEO" },
            { type: "ul", items: ["Lead naturally — do not keyword-stuff. Amazon detects and de-ranks unnatural patterns.", "Front-load your strongest keywords in the first 300 characters (highest algorithmic weight)", "Include sub-genre qualifiers like 'cozy mystery set in a small coastal town' rather than just 'mystery novel'", "Mirror reader search language — 'books about grief and healing' not 'character-driven literary explorations of loss'"] },
            { type: "hr" },
            { type: "h2", text: "The Five-Second Test" },
            { type: "p", text: "Show your description and cover to someone who reads your genre. Give them 5 seconds. Ask: What is this book about? Would you buy it? Who is it for? If all three answers are clear and positive, your description is working. If there is hesitation on any of them, rewrite before you publish." },
        ],
    },
    "global-distribution-ingram-vs-kdp": {
        title: "IngramSpark vs. KDP: Which Should You Choose in 2026?",
        excerpt: "A brutal, no-fluff comparison of royalties, reach, print quality, and setup costs to help you decide where to publish your physical book.",
        category: "Industry News",
        author: "Robert Sterling",
        date: "Feb 6, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1400&auto=format&fit=crop",
        sections: [
            { type: "h2", text: "Distribution Reach: The Clearest Difference" },
            { type: "p", text: "KDP Print distributes well to Amazon.com and international Amazon stores, but has effectively zero bookstore presence — bookstores refuse to order KDP books because KDP's returns policy is incompatible with standard book trade terms. IngramSpark distributes to 50,000+ retailers and libraries globally, including physical bookstores." },
            { type: "hr" },
            { type: "h2", text: "Royalty Comparison" },
            { type: "p", text: "Example: 250-page paperback, 6x9 inches, black and white interior, priced at $14.99." },
            { type: "table", headers: ["Platform and Channel", "Your Royalty", "Percentage"], rows: [["KDP Print sold on Amazon US", "$5.75", "38.4%"], ["IngramSpark sold via Amazon", "$3.25", "21.7%"], ["IngramSpark sold in bookstores", "$3.25", "21.7%"]] },
            { type: "hr" },
            { type: "h2", text: "Setup Costs Compared" },
            { type: "table", headers: ["Item", "KDP", "IngramSpark"], rows: [["Account setup", "Free", "Free"], ["Per-title setup", "Free", "$49 or free with promo code"], ["Annual maintenance", "Free", "$12 per year per title"], ["Revision fee", "Free", "$25 per interior or cover change"], ["ISBN", "Free KDP ISBN available", "You must supply your own"]] },
            { type: "hr" },
            { type: "h2", text: "The Strategy Most Successful Authors Use" },
            { type: "p", text: "Do not choose — use both. Publish ebooks on KDP for Kindle Unlimited and Amazon ebook dominance. Publish print on KDP for Prime fulfillment. Publish print on IngramSpark simultaneously to open bookstore and library channels. Set the same retail price on both platforms to avoid price competition issues." },
            { type: "hr" },
            { type: "h2", text: "When to Choose KDP Only" },
            { type: "ul", items: ["You write genre fiction where virtually all sales happen on Amazon", "You have no interest in physical bookstore placement", "You want zero setup cost and maximum per-unit royalty on Amazon"] },
            { type: "h2", text: "When to Choose IngramSpark Only" },
            { type: "ul", items: ["Your book targets the library market", "You are publishing a specialized academic or regional title", "Your primary sales channel is direct through your website, events, or corporate sales"] },
        ],
    },
    "royalty-calculator-deep-dive": {
        title: "Understanding Your Royalty Statement: A Deep Dive",
        excerpt: "Demystifying the numbers: how platform fees, print costs, and currency conversions affect your actual take-home pay per book sold.",
        category: "Tools & Resources",
        author: "Katherine Wu",
        date: "Feb 2, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1400&auto=format&fit=crop",
        sections: [
            { type: "h2", text: "Ebook Royalties: The 35% vs. 70% Tiers" },
            { type: "p", text: "KDP offers two royalty rates for Kindle ebooks. The 70% rate applies when your price is between $2.99 and $9.99 and the book is available in all KDP 70% territories. The 35% rate applies for prices below $2.99 or above $9.99 and always applies to certain territories." },
            { type: "tip", title: "Delivery Fee", body: "Amazon deducts $0.15 per megabyte of your file at the 70% tier. A 300kb ebook = ~$0.04 delivery cost. Image-heavy files can cost $0.50-$2.00 per sale in delivery fees alone." },
            { type: "hr" },
            { type: "h2", text: "Kindle Unlimited: KENP Explained" },
            { type: "p", text: "KENP enrolled ebooks earn a per-page-read payment instead of a sale royalty. The rate fluctuated between $0.004 and $0.005 per page in 2025. A 300-page book fully read earns approximately $1.37. KU is most profitable for long books in genres with high KU penetration like romance, fantasy, and thriller." },
            { type: "hr" },
            { type: "h2", text: "Print Royalty Calculation" },
            { type: "blockquote", text: "Royalty = List Price minus Printing Cost minus (List Price times Platform %). KDP platform: 40% on Amazon.com, 60% on expanded distribution. Printing cost: $0.85 fixed + $0.012 per page (B&W)." },
            { type: "p", text: "Example for 300-page B&W paperback at $15.99: print cost $4.45, Amazon commission $6.40, your royalty $5.14 per copy sold." },
            { type: "hr" },
            { type: "h2", text: "Payment Schedule and Thresholds" },
            { type: "ul", items: ["KDP pays approximately 60 days after the end of the sales month", "January sales arrive in late March", "Bank transfer minimum: $100", "Check minimum: $100", "Wire transfer minimum: $250", "Earnings below threshold roll over to next month"] },
            { type: "hr" },
            { type: "h2", text: "Wide Distribution Royalties Compared" },
            { type: "table", headers: ["Platform", "Royalty Rate", "Minimum for Top Rate"], rows: [["Apple Books", "70%", "No minimum"], ["Kobo", "70%", "$1.99 and above"], ["Barnes and Noble Press", "65%", "$2.99 and above"], ["Draft2Digital cut", "-10% of retailer royalty", "Applied on top"]] },
        ],
    },
    "ai-tools-for-authors-2026": {
        title: "The Best AI Tools for Authors in 2026",
        excerpt: "From manuscript assessment to metadata optimization — our curated list of AI-powered tools that are actually worth your time.",
        category: "Tools & Resources",
        author: "Sophie Dubois",
        date: "Jan 28, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1400&auto=format&fit=crop",
        sections: [
            { type: "h2", text: "The AI Noise vs. The AI Signal" },
            { type: "p", text: "Every week, a new AI tool claims to revolutionize writing. Most of them are ChatGPT wrappers with a subscription fee. This list cuts through the noise and focuses on tools that solve real problems authors face — with honest assessments of their limitations." },
            { type: "hr" },
            { type: "h2", text: "Manuscript Assessment: Fictionary" },
            { type: "p", text: "Fictionary analyzes your manuscript against 38 story elements per scene — POV, conflict, character arc, tension — and flags structural weaknesses. It is not a replacement for a human developmental editor, but it is an excellent first pass before spending money on human editing. Best for fiction with conventional story structures." },
            { type: "hr" },
            { type: "h2", text: "Prose and Style: ProWritingAid" },
            { type: "p", text: "Less generative AI and more intelligent grammar and style checker. ProWritingAid understands passive voice patterns, repetition across chapters, and sticky sentences better than basic tools. The 2026 version integrates an AI rewrite suggestions engine that is genuinely good at tightening prose without losing voice." },
            { type: "hr" },
            { type: "h2", text: "Keyword Research: Publisher Rocket" },
            { type: "p", text: "The industry standard for Amazon keyword research. Publisher Rocket shows you search volume estimates, competition levels, and suggested categories for any keyword or sub-genre. The Competitor Analysis feature is invaluable for finding categories where your book can realistically rank at launch." },
            { type: "hr" },
            { type: "h2", text: "Audiobook Production: ElevenLabs" },
            { type: "p", text: "The most realistic AI voice synthesis available. ElevenLabs can clone your own voice or generate narration from their library of voices. Audio quality in their top-tier voices is indistinguishable from professional voice actors in blind tests. Note: ACX does not currently allow AI-narrated audiobooks. Findaway Voices and Kobo do allow it with disclosure." },
            { type: "hr" },
            { type: "h2", text: "What AI Cannot Replace" },
            { type: "ul", items: ["Your unique voice — AI averages. Great writing is specific.", "Developmental judgment that shapes exceptional books", "Authentic reader connection — AI-written responses are detectable and erode trust", "Cover design taste — knowing what resonates in a specific genre requires human experience"] },
        ],
    },
};

function renderSection(s: Section, i: number) {
    if (s.type === "h2") return (
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-[#064e3b] tracking-tight mt-14 mb-5">{s.text}</h2>
    );
    if (s.type === "p") return (
        <p key={i} className="text-[#064e3b]/70 font-medium leading-relaxed mb-5 text-base md:text-lg">{s.text}</p>
    );
    if (s.type === "hr") return (
        <hr key={i} className="border-border my-10" />
    );
    if (s.type === "ul") return (
        <ul key={i} className="space-y-2 my-6 pl-2">
            {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-[#064e3b]/70 font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    );
    if (s.type === "ol") return (
        <ol key={i} className="space-y-3 my-6 pl-2">
            {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-4 text-[#064e3b]/70 font-medium leading-relaxed">
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{j + 1}</span>
                    {item}
                </li>
            ))}
        </ol>
    );
    if (s.type === "blockquote") return (
        <blockquote key={i} className="my-8 pl-6 border-l-4 border-primary italic text-[#064e3b]/80 font-medium text-lg leading-relaxed">
            {s.text}
        </blockquote>
    );
    if (s.type === "tip") return (
        <div key={i} className="my-8 p-6 rounded-2xl bg-primary/5 border border-primary/15 flex gap-4 items-start">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
                <p className="font-black text-[#064e3b] text-sm uppercase tracking-widest mb-1">{s.title}</p>
                <p className="text-sm text-[#064e3b]/70 font-medium leading-relaxed">{s.body}</p>
            </div>
        </div>
    );
    if (s.type === "table") return (
        <div key={i} className="overflow-x-auto my-8 rounded-2xl border border-border">
            <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-[#064e3b] text-white">
                    <tr>{s.headers.map((h, j) => <th key={j} className="p-4 font-bold uppercase tracking-widest text-xs">{h}</th>)}</tr>
                </thead>
                <tbody>
                    {s.rows.map((row, j) => (
                        <tr key={j} className="border-t border-border hover:bg-muted/30 transition-colors">
                            {row.map((cell, k) => <td key={k} className="p-4 text-[#064e3b]/70 font-medium">{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    return null;
}

export default function BlogPostPage() {
    const params = useParams();
    const slug = typeof params?.slug === "string" ? params.slug : "";
    const post = posts[slug];

    if (!post) {
        return (
            <main className="min-h-screen bg-transparent">
                <div className="pt-40 pb-32 text-center px-6">
                    <h1 className="text-4xl font-bold text-[#064e3b] mb-4">Post not found</h1>
                    <p className="text-[#064e3b]/50 mb-8">The article you are looking for does not exist.</p>
                    <Link href="/blog" className="btn-primary inline-flex items-center gap-2">Back to Blog</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumb */}
            <nav className="pt-28 pb-6 px-6 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary truncate max-w-[200px]">{post.title}</span>
                </div>
            </nav>

            {/* Header */}
            <header className="max-w-4xl mx-auto px-6 mb-12">
                <div className="mb-5">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${categoryColors[post.category] ?? "bg-primary/10 text-primary border-primary/20"}`}>
                        {post.category}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#064e3b] tracking-tighter leading-tight mb-6">
                    {post.title}
                </h1>
                <p className="text-lg md:text-xl text-[#064e3b]/60 font-medium leading-relaxed mb-8">
                    {post.excerpt}
                </p>
                <div className="flex items-center gap-6 pb-8 border-b border-border">
                    <div className="flex items-center gap-3">
                        <img src={`https://i.pravatar.cc/48?u=${post.author}`} className="w-11 h-11 rounded-full border-2 border-border" alt={post.author} />
                        <div>
                            <p className="font-bold text-[#064e3b] text-sm leading-none">{post.author}</p>
                            <p className="text-[10px] text-[#064e3b]/40 font-bold uppercase tracking-wider mt-1">{post.date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#064e3b]/40">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-bold">{post.readTime}</span>
                    </div>
                </div>
            </header>

            {/* Cover image */}
            <div className="max-w-5xl mx-auto px-6 mb-16">
                <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-border shadow-2xl">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* 3-Column Layout: TOC | Article | Sidebar */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-10 xl:gap-14">

                    {/* LEFT — Table of Contents (sticky) */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-5">On this page</p>
                            <nav className="space-y-2.5 border-l-2 border-border pl-4">
                                {post.sections.filter(s => s.type === "h2").map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            const headings = document.querySelectorAll("article h2");
                                            const target = headings[i];
                                            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }}
                                        className="block text-left text-xs font-semibold text-[#064e3b]/45 hover:text-primary transition-colors leading-snug cursor-pointer"
                                    >
                                        {(s as { type: "h2"; text: string }).text}
                                    </button>
                                ))}
                            </nav>

                            {/* Share */}
                            <div className="mt-10 pt-6 border-t border-border">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-4">Share</p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent(post.title), "_blank")}
                                        className="w-9 h-9 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white text-primary/50 transition-all text-xs font-black"
                                    >
                                        X
                                    </button>
                                    <button
                                        onClick={() => window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href), "_blank")}
                                        className="w-9 h-9 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white text-primary/50 transition-all text-xs font-black"
                                    >
                                        in
                                    </button>
                                    <button
                                        onClick={() => { navigator.clipboard.writeText(window.location.href); }}
                                        className="w-9 h-9 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white text-primary/50 transition-all text-xs font-black"
                                    >
                                        &#x1F517;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* CENTER — Article */}
                    <article className="min-w-0">
                        {post.sections.map((s, i) => renderSection(s, i))}

                        {/* Back to blog */}
                        <div className="mt-16 pt-8 border-t border-border">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to all articles
                            </Link>
                        </div>
                    </article>

                    {/* RIGHT — Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28 space-y-8">

                            {/* Author Card */}
                            <div className="rounded-2xl border border-border bg-white/60 backdrop-blur-xl p-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-4">Written by</p>
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={`https://i.pravatar.cc/48?u=${post.author}`} className="w-12 h-12 rounded-full border-2 border-border" alt={post.author} />
                                    <div>
                                        <p className="font-bold text-[#064e3b] text-sm">{post.author}</p>
                                        <p className="text-[9px] text-[#064e3b]/40 font-bold uppercase tracking-wider">{post.category}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-[#064e3b]/50 leading-relaxed">Contributing expert at Self-Publishing Consultant with hands-on experience in the indie publishing industry.</p>
                            </div>

                            {/* Related Posts */}
                            <div className="rounded-2xl border border-border bg-white/60 backdrop-blur-xl p-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-5">Related Articles</p>
                                <div className="space-y-4">
                                    {Object.entries(posts)
                                        .filter(([k]) => k !== slug)
                                        .slice(0, 4)
                                        .map(([relSlug, rel]) => (
                                            <Link key={relSlug} href={`/blog/${relSlug}`} className="group block">
                                                <p className="text-sm font-bold text-[#064e3b] leading-snug group-hover:text-primary transition-colors mb-1">
                                                    {rel.title}
                                                </p>
                                                <p className="text-[9px] font-bold text-[#064e3b]/30 uppercase tracking-wider">{rel.readTime}</p>
                                            </Link>
                                        ))}
                                </div>
                            </div>

                            {/* Newsletter Mini CTA */}
                            <div className="rounded-2xl bg-[#022c22] p-6 text-white relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[40px]" />
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3">Newsletter</p>
                                    <p className="font-bold text-sm mb-1 tracking-tight">Get weekly publishing tips</p>
                                    <p className="text-[10px] text-white/40 mb-4">Join 4,000+ indie authors</p>
                                    <form onSubmit={e => e.preventDefault()} className="space-y-2">
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 text-xs px-4 py-2.5 rounded-xl outline-none focus:border-primary transition-all"
                                        />
                                        <button type="submit" className="w-full bg-primary text-white text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl hover:bg-primary-hover transition-all">
                                            Subscribe Free
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Quick Tools */}
                            <div className="rounded-2xl border border-border bg-white/60 backdrop-blur-xl p-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-4">Free Author Tools</p>
                                <div className="space-y-2">
                                    {[
                                        { name: "ISBN Barcode Generator", href: "/tools/isbn-barcode-generator" },
                                        { name: "Royalty Calculator", href: "/tools/royalty-calculator" },
                                        { name: "Book Description Generator", href: "/tools/book-description-generator" },
                                        { name: "Spine Width Calculator", href: "/tools/spine-width-calculator" },
                                    ].map(tool => (
                                        <Link
                                            key={tool.href}
                                            href={tool.href}
                                            className="flex items-center gap-2 text-xs font-semibold text-[#064e3b]/50 hover:text-primary transition-colors py-1.5 group"
                                        >
                                            <ChevronRight className="w-3 h-3 text-primary/40 group-hover:translate-x-0.5 transition-transform" />
                                            {tool.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>

        </main>
    );
}
