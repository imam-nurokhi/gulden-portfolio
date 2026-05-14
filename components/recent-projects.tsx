import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  size: "small" | "medium" | "large";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Echoes of Gold",
    subtitle: "Album 2024",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1000&fit=crop",
    href: "#",
    size: "large",
  },
  {
    id: 2,
    title: "Live Sessions",
    subtitle: "Concert Recording",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop",
    href: "#",
    size: "small",
  },
  {
    id: 3,
    title: "Midnight Dreams",
    subtitle: "EP Release",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
    href: "#",
    size: "medium",
  },
  {
    id: 4,
    title: "Summer Festival",
    subtitle: "Live Performance",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    href: "#",
    size: "small",
  },
  {
    id: 5,
    title: "Acoustic Sessions",
    subtitle: "Stripped Down",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=1000&fit=crop",
    href: "#",
    size: "large",
  },
  {
    id: 6,
    title: "Golden Anniversary",
    subtitle: "Best Of Collection",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
    href: "#",
    size: "small",
  },
];

export function RecentProjects() {
  return (
    <section id="music" className="px-4 md:px-8 pb-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Recent projects</h2>
        <Link
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View All
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className={`group relative overflow-hidden rounded-xl ${
              project.size === "large" ? "row-span-2" : ""
            } ${project.size === "medium" ? "lg:col-span-1" : ""}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-white font-bold text-lg tracking-tight">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm mt-0.5">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
