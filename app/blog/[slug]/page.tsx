import { notFound } from "next/navigation";

const posts = [
    { slug: "primeiro-post", title: "Meu Primeiro Post", content: "Este é o conteúdo do primeiro post." },
    { slug: "segundo-post", title: "Outro Post Interessante", content: "Mais informações aqui!" },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) return notFound();

    return (
        <main className="min-h-screen bg-gray-900 text-white py-10">
            <div className="max-w-2xl mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold">{post.title}</h1>
                <p className="mt-4 text-lg">{post.content}</p>
            </div>
        </main>
    );
}
