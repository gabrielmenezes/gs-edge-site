import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.gsedge.com.br";
    const posts = getAllPosts();

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/servicos`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...blogUrls,
    ];
}
