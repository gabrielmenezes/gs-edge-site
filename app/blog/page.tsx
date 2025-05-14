import Link from "next/link";

const posts = [
    { slug: "primeiro-post", title: "Meu Primeiro Post" },
    { slug: "segundo-post", title: "Outro Post Interessante" },
];

export default function Blog() {
    return (
        <main className="min-h-screen bg-gray-900 text-white py-10">
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-4xl font-bold text-center">Blog GS Edge</h1>
                <p className="text-lg text-gray-300 text-center mt-2">
                    Acompanhe nossos artigos sobre tecnologia, redes e inovação.
                </p>

                <ul className="mt-6 space-y-6">
                    {posts.map((post) => (
                        <li key={post.slug} className="bg-white text-gray-900 shadow-lg rounded-lg p-5 hover:shadow-xl transition duration-300">
                            <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold hover:underline">
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
