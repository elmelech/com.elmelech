import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Workou-what?',
    description:
      'Developed an app to assist workout instructors in generating and displaying textual sets of instructions for each class, promoting inclusivity for hearing-impaired participants',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Travel Planner Platform',
    description:
      'Contributed to the development of a travel planning platform using MACH architecture on AWS, integrating Lambda, API Gateway, and OAuth 2.0 for robust security. Engineered features enabling users to create flight and hotel itineraries, and access real-time weather forecasts.',
    link: { href: '#', label: 'github.com' },
    logo: logoPlanetaria,
  },
  {
    name: 'Dutch-Blitz Guide',
    description:
      'Collaborated with a team of three engineers to develop an interactive platform designed to teach users how to play "Dutch Blitz". Front-end developed with Angular, implementing server-side rendering using AWS Lambda',
    link: { href: 'https://yellblitz.com/', label: 'yellblitz.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Sign Language Classifier',
    description:
      'Developed a sign language classifier in Python that conducts data preprocessing using Keras sequential model. Demonstrated expertise in image classification and practical application of convolutional neural networks',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'AI 2048-Puzzle Solver',
    description:
      'Engineered an intelligent agent in Python, employing adversarial search techniques using the expectiminimax algorithm. Utilized alpha-beta pruning to speed up the search process and implemented heuristic functions to evaluate board states and guide the decision-making process',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Dynamic Web Server',
    description:
      'Transformed a single-process http-server into a dynamic server, enabling real-time mdb-lookup queries from web browsers. Explored latency overhead in persistent connections and optimized server performance for up-to-date results. Enhanced skills in C programming, TCP/IP protocol, and system architecture',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Where My Code Adventures Lead.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Where My Code Adventures Lead."
      intro="My academic projects have ranged from developing applications using machine
      learning libraries like sklearn and keras, to creating robust database systems with SQL, MongoDB, and Neo4j. These experiences have prepared me to effectively collaborate with talented teams to design, develop, and launch impactful digital products."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            {/* <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div> */}
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.link && project.link.href && project.link.href !== '#' ? (
                <Card.Link href={project.link.href}>
                  {project.name}
                </Card.Link>
              ) : (
                <Card.noLink>{project.name}</Card.noLink>
              )}

            </h2>
            <Card.Description>{project.description}</Card.Description>
            {/* <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p> */}
            {project.link && project.link.href !== '#' && (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <a href={project.link.href} className="ml-2">
                  {project.link.label}
                </a>
              </p>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
