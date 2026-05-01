import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import {
    projects,
    getProjectType,
} from "../../_components/project-data";

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

const findProjectBySlug = (slug: string) =>
    projects.find((item) => item.slug === slug);

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = findProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found | Alfredo Vetsera",
            description: "The requested project case study was not found.",
        };
    }

    const title = `${project.title} | Case Study | Alfredo Vetsera`;
    const description = project.description;

    return {
        title,
        description,
        keywords: [
            "portfolio",
            "case study",
            "full stack developer",
            "web development",
            ...project.tech,
        ],
        alternates: {
            canonical: `/projects/${project.slug}`,
        },
        openGraph: {
            title,
            description,
            type: "article",
            images: [
                {
                    url: project.image,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [project.image],
        },
    };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = findProjectBySlug(slug);

    if (!project) notFound();

    return (
        <main className="min-h-screen bg-[#050505] text-[#e5e2e1]">
            <div className="layout-shell py-10 md:py-14">
                <Link
                    href="/#works"
                    className="inline-flex items-center gap-2 border border-[#444748] px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#c4c7c8] hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to works
                </Link>
            </div>

            <section className="layout-shell pb-20 md:pb-28">
                <div className="mb-6 flex flex-wrap gap-2">
                    <span className="label-caps border border-[#8e9192] px-2 py-1 text-[10px] text-[#e5e2e1]">
                        {project.status}
                    </span>
                    <span className="label-caps border border-[#444748] px-2 py-1 text-[10px] text-[#c4c7c8]">
                        {project.year}
                    </span>
                    <span className="label-caps border border-[#444748] px-2 py-1 text-[10px] text-[#c4c7c8]">
                        {getProjectType(project.size)}
                    </span>
                </div>

                <h1 className="font-display mb-6 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                    {project.title}
                </h1>
                <p className="mb-10 max-w-3xl text-base leading-[1.8] text-[#c4c7c8] md:text-lg">
                    {project.description}
                </p>

                <div className="mb-12 flex flex-wrap gap-3">
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                        >
                            <Github className="h-4 w-4" />
                            Source code
                        </a>
                    ) : null}
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-white bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Visit live
                        </a>
                    ) : null}
                </div>

                <div className="image-zoom-container relative aspect-[16/10] w-full border-[#222222]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        className="object-cover"
                    />
                </div>

                <div className="mt-12 border border-[#222222] bg-[#101010] p-8">
                    <h2 className="font-display mb-4 text-2xl text-white md:text-3xl">
                        Tech stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                            <span
                                key={item}
                                className="label-caps border border-[#8e9192] px-2 py-1 text-[10px] text-[#e5e2e1]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
