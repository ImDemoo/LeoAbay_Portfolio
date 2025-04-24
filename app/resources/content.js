import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Leonardo Luis",
  lastName: "Abay",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Send {person.firstName} an email</>,
  description: (
    <>
      I am currently looking for IT related jobs, and learnign more about code and current events.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ImDemoo",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/leonardo-luis-abay-5744292bb/",
  },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&su=luwi.abay95@gmail.com",
  },
  {
    name: "Facebook",
    icon: "/images/projects/project-01/facebook.png",
    link: "https://www.facebook.com/Im.Demooo",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Leo, a fresh graduate at <InlineCode>Polytechnic University of the Philippines</InlineCode>,
      <br />  where I studied BS Information Technology.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/imdemoo?name=Your+Name&email=youremail@example.com&notes=your_email@example.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Leo is a 4th Year BS Information Technology graduate with multiple experience in online management and assistance. Multiple skills learnt involving Logical thinking, English Proficiency, Coding Applications (C++, Java, Python, RStudio, X++), Microsoft apps, Adobe Applications (Photoshop, After Effects, Premier Pro), and AutoCAD. Currently in the process of learning multiple coding languages to increse range of skills.
        
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Creative Dynamix Solutions Inc",
        timeframe: "April 2024 - October 2024",
        role: "Full Stack Developer Intern",
        achievements: [
          <>
            Created Reports and Forms according to the clients needs and specification using Dynamics 365.
          </>,
          <>
            Developed Front and Back-end design to incorporate reports made or provided.
          </>,
          <>
            Designed visual representation of data using PowerBI.
          </>,
          <>
            Made different designs for Reports so taht employer has multiple design choises to choose from according to their preference.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Sample Project from CDSI",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Sample Project from CDSI",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Rizal Provincial Hospital Systems Annex II",
        timeframe: "November 2019 - January 2020",
        role: "Senior High School Work Immersion",
        achievements: [
          <>
          Tested Blood samples for blood type identification.
          </>,
          <>
          Organized records of previous and current patients of the hospital.
          </>,
          <>
          Learnt the expanded use of Excel for client supervision.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Polytechnic University of the Philippines",
        description: <>Graduate of BS Information Technology.</>,
      },
      {
        name: "Antipolo City National Science and Technology High School",
        description: <>Studied highschool in STEM strand.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Java and JavaScript",
        description: <>Able to code and revise code using Java and JavaScript.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Node.js",
        description: <>Building backend developent for JavaScript.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "SQL MySQL and PHP",
        description: <>Database manipulation and creation applications.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "PowerBI",
        description: <>Designing visual applications using PowerBI.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "React Basic Certification",
        description: <>Certification for React.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 12,
          },
        ],
      },
      {
        title: "CDSI Certification",
        description: <>Certification for the first 500 hours of OJT for CDSI.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 22,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Diary",
  title: "My journey to becoming who I am today.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
