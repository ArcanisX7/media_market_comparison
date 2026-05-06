import { Mail, Linkedin, Github } from "lucide-react";

interface AuthorBioProps {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  github: string;
  photo: string;
}

export const AuthorBio = ({ name, role, email, linkedin, github, photo }: AuthorBioProps) => {
  return (
    <section className="relative overflow-hidden rounded-md border border-border bg-card p-6 shadow-elegant sm:p-10">
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary" aria-hidden />
      <p className="eyebrow mb-5">Autor reportu</p>
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <img
          src={photo}
          alt={`${name} – portrét`}
          className="h-24 w-24 rounded-full border border-border object-cover sm:h-32 sm:w-32"
        />
        <div className="flex-1">
          <h3 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {name}
          </h3>
          <p className="mt-1 text-base text-muted-foreground sm:text-lg">{role}</p>
          <div className="editorial-rule my-4" />
          <div className="flex flex-col gap-3 text-sm sm:text-base">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden />
              <span>{email}</span>
            </a>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                <span>LinkedIn</span>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" aria-hidden />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
