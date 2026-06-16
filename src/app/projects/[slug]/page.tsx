import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import {
  projects,
  getProjectType,
  getImpactLine,
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
      images: [{ url: project.image, alt: project.title }],
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

  const fileIndex = projects.findIndex((item) => item.slug === slug);
  const fileNumber = String(fileIndex + 1).padStart(2, "0");

  return (
    <>
      <div className="pointer-events-none fixed inset-0 p5-halftone opacity-15" />

      <section className="layout-shell relative z-10 pb-20 pt-28 md:pb-28 md:pt-32">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <Link href="/#works" className="p5-open-link">
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>
          <span className="hidden h-4 w-px bg-[#2a2a2a] sm:block" aria-hidden />
          <span className="p5-section-tag">Case file {fileNumber}</span>
          {project.status === "Live" ? (
            <span className="p5-badge-shipped">Shipped</span>
          ) : (
            <span className="p5-badge-build">In build</span>
          )}
          <span className="p5-tech-tag">{project.year}</span>
          <span className="p5-tech-tag">{getProjectType(project.size)}</span>
        </div>

        <h1 className="font-display mb-6 max-w-4xl text-4xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
          {project.title}
        </h1>

        <p className="mb-4 max-w-3xl font-display text-xl text-[#e60026] md:text-2xl">
          {getImpactLine(project.description)}
        </p>
        <p className="mb-10 max-w-3xl font-sans text-base leading-relaxed text-[#9a9590] md:text-lg">
          {project.description}
        </p>

        <div className="mb-12 flex flex-wrap gap-4">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p5-btn-primary inline-flex"
            >
              <span className="inline-flex items-center gap-2">
                Visit live
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p5-btn-outline inline-flex"
            >
              <span className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" />
                Source code
              </span>
            </a>
          ) : null}
          <Link href="/#contact" className="p5-open-link self-center">
            Start a similar build
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="p5-featured-card overflow-hidden">
          <div className="image-zoom-container relative aspect-[16/10] w-full border-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="h-3 w-full p5-hazard-stripe" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="p5-contact-panel p-6 lg:col-span-2 lg:p-8">
            <h2 className="font-display mb-4 text-2xl text-white md:text-3xl">
              Project overview
            </h2>
            <p className="font-sans leading-relaxed text-[#9a9590]">
              {project.description}
            </p>
          </div>

          <div className="p5-terminal-panel p-6 lg:p-8">
            <h2 className="font-display mb-4 text-xl text-white md:text-2xl">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="p5-tech-tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 border-t-2 border-[#2a2a2a] pt-6">
              <p className="label-caps mb-2 text-[#9a9590]">Status</p>
              <p className="font-display text-lg text-white">{project.status}</p>
              <p className="label-caps mb-2 mt-4 text-[#9a9590]">Year</p>
              <p className="font-display text-lg text-white">{project.year}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
