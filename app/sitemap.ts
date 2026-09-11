import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getProductSlugs } from "@/lib/products";
import { getServiceSlugs } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://gsedge.com.br";
    
    // Blog Posts
    const posts = getAllPosts('pt');
    const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date.includes('T') ? post.date : `${post.date}T12:00:00`).toISOString() : new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // Products
    const productSlugs = getProductSlugs();
    const productUrls: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
        url: `${baseUrl}/products/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.85,
    }));

    // Services
    const serviceSlugs = getServiceSlugs();
    const serviceUrls: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    }));

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        ...productUrls,
        ...serviceUrls,
        ...blogUrls,
    ];
}
