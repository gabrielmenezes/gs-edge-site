import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/dashboard", "/private"], // Bloqueia áreas restritas
            },
        ],
        sitemap: "https://www.gsedge.com.br/sitemap.xml", // URL do sitemap
    };
}
