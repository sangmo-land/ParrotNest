import { Head } from "@inertiajs/react";

/**
 * Reusable SEO component for meta tags, Open Graph, Twitter Cards,
 * canonical URL, and JSON-LD structured data.
 *
 * @param {string}  title        - Page title
 * @param {string}  description  - Meta description (max ~160 chars)
 * @param {string}  canonical    - Canonical URL (defaults to current page)
 * @param {string}  ogType       - Open Graph type (default: "website")
 * @param {string}  ogImage      - Open Graph image URL
 * @param {string}  keywords     - Comma-separated keywords
 * @param {object}  jsonLd       - JSON-LD structured data object
 * @param {boolean} noindex      - If true, adds noindex directive
 */
export default function SEO({
    title,
    description = "",
    canonical = "",
    ogType = "website",
    ogImage = "/images/hero.jpg",
    keywords = "",
    jsonLd = null,
    noindex = false,
}) {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
    const currentUrl =
        canonical ||
        (typeof window !== "undefined" ? window.location.href : "");
    const fullImageUrl = ogImage?.startsWith("http")
        ? ogImage
        : `${siteUrl}${ogImage}`;

    return (
        <Head title={title}>
            {/* Basic Meta */}
            {description && (
                <meta name="description" content={description} head-key="description" />
            )}
            {keywords && (
                <meta name="keywords" content={keywords} head-key="keywords" />
            )}
            {noindex && (
                <meta name="robots" content="noindex, nofollow" head-key="robots" />
            )}

            {/* Canonical URL */}
            {currentUrl && <link rel="canonical" href={currentUrl} head-key="canonical" />}

            {/* Open Graph */}
            <meta property="og:title" content={title} head-key="og:title" />
            {description && (
                <meta property="og:description" content={description} head-key="og:description" />
            )}
            <meta property="og:type" content={ogType} head-key="og:type" />
            {currentUrl && (
                <meta property="og:url" content={currentUrl} head-key="og:url" />
            )}
            <meta property="og:image" content={fullImageUrl} head-key="og:image" />
            <meta property="og:site_name" content="ParrotNest" head-key="og:site_name" />
            <meta property="og:locale" content="en_US" head-key="og:locale" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" head-key="twitter:card" />
            <meta name="twitter:title" content={title} head-key="twitter:title" />
            {description && (
                <meta name="twitter:description" content={description} head-key="twitter:description" />
            )}
            <meta name="twitter:image" content={fullImageUrl} head-key="twitter:image" />

            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <script type="application/ld+json" head-key="jsonld">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Head>
    );
}

/**
 * Pre-built JSON-LD generators for common page types
 */
export const jsonLdGenerators = {
    organization: () => ({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ParrotNest",
        url: typeof window !== "undefined" ? window.location.origin : "",
        logo:
            (typeof window !== "undefined" ? window.location.origin : "") +
            "/images/hero.jpg",
        description:
            "ParrotNest is a parrot adoption center dedicated to rescue, rehabilitation, and rehoming of parrots in need.",
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: "English",
        },
        sameAs: [],
    }),

    website: () => ({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "ParrotNest",
        url: typeof window !== "undefined" ? window.location.origin : "",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate:
                    (typeof window !== "undefined"
                        ? window.location.origin
                        : "") + "/parrots?search={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    }),

    breadcrumbList: (items) => ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }),

    product: (parrot) => ({
        "@context": "https://schema.org",
        "@type": "Product",
        name: parrot.name,
        description:
            parrot.description ||
            `${parrot.name} is a ${parrot.species?.name || "parrot"} available for adoption at ParrotNest.`,
        image: parrot.image
            ? (typeof window !== "undefined" ? window.location.origin : "") +
              "/storage/" +
              parrot.image
            : undefined,
        brand: {
            "@type": "Brand",
            name: "ParrotNest",
        },
        offers: {
            "@type": "Offer",
            price: parrot.adoption_fee || "0",
            priceCurrency: "USD",
            availability:
                parrot.status === "available"
                    ? "https://schema.org/InStock"
                    : "https://schema.org/OutOfStock",
        },
    }),

    faqPage: (faqs) => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }),

    article: ({ title, description, datePublished, dateModified }) => ({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            "@type": "Organization",
            name: "ParrotNest",
        },
        publisher: {
            "@type": "Organization",
            name: "ParrotNest",
            logo: {
                "@type": "ImageObject",
                url:
                    (typeof window !== "undefined"
                        ? window.location.origin
                        : "") + "/images/hero.jpg",
            },
        },
    }),

    localBusiness: () => ({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "ParrotNest",
        description:
            "Parrot adoption center dedicated to rescue, rehabilitation, and rehoming of parrots in need.",
        url: typeof window !== "undefined" ? window.location.origin : "",
        image:
            (typeof window !== "undefined" ? window.location.origin : "") +
            "/images/hero.jpg",
        priceRange: "$$",
    }),
};
