export const siteConfig = {
    name: "Khamtay",
    jobTitle: "Fullstack Developer",
    greeting: "Hello.",
    description: "I'm a passionate software developer specializing in modern web applications. Focusing on intuitive user experiences and elegant code architecture.",
    resumeLink: "/resume.pdf", // User can replace this with actual link
    stats: [
        { label: "Completed Projects", value: "120+" },
        { label: "Client Satisfaction", value: "95%" },
        { label: "Years of Experience", value: "10+" },
    ],
    services: [
        { title: "Website Development", description: "Modern, fast, and responsive websites.", icon: "web" },
        { title: "App Development", description: "Cross-platform mobile and desktop apps.", icon: "app" },
        { title: "Website Hosting", description: "Reliable and scalable hosting solutions.", icon: "hosting" }
    ],
    skills: [
        "HTML5", "CSS", "JavaScript", "Node.js", "React", "Next.js", "Git", "GitHub"
    ],
    projects: [
        {
            title: "Fintech Dashboard",
            description: "A comprehensive analytics dashboard for financial institutions with real-time data visualization.",
            image: "/images/project-1.jpg",
            tags: ["React", "TypeScript", "TailwindCSS"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "E-commerce Platform",
            description: "Modern headless e-commerce storefront with optimized checkout flow and cart management.",
            image: "/images/project-2.jpg",
            tags: ["Next.js", "Stripe", "Framer Motion"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Task Management App",
            description: "Collaborative workspace for remote teams featuring real-time updates and drag-and-drop boards.",
            image: "/images/project-3.jpg",
            tags: ["React", "Node.js", "MongoDB"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "AI Writing Assistant",
            description: "Browser extension that helps users write better emails using OpenAI API integration.",
            image: "/images/project-4.jpg",
            tags: ["TypeScript", "OpenAI", "React"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ],
    socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:hello@example.com"
    }
};
