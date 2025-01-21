import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/dashboard"], // Bloqueia áreas restritas
            },
        ],
        sitemap: "https://www.gsedge.com.br/sitemap.xml",
    };
}
