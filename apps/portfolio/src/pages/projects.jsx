import Image from 'next/image'
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

import portal from '@/images/photos/glowing-portal-impressionist.jpg'
import gemstone from '@/images/photos/glowing-hovering-gemstone.jpg'
import horseLady from '@/images/photos/surrealist-horse-woman.jpg'
import contemplativeLake from '@/images/photos/contemplative-lake-vaguely-japanese-vaporwave.jpg'
import cathedral from '@/images/photos/impressionist-cathedral-vaporwave.jpg'
import mask from '@/images/photos/dia-de-meurtos-vaporwave-mask.jpg'
import tree from '@/images/photos/the-tree-of-data.jpg'
import bard from '@/images/photos/young-bard-at-terminal.jpg'

const projects = [
  {
    name: 'Backstage',
    description: 'An open platform for building developer portals.',
    link: 'https://backstage.io',
    role: 'contributor',
    image: portal,
  },
  {
    name: 'Kompendium',
    description: 'Non-invasive Ktor OpenAPI documentation',
    link: 'https://github.com/bkbnio/kompendium',
    role: 'maintainer',
    image: cathedral,
  },
  {
    name: 'Satisfaketion',
    description: 'A funky faker focused on portability and composability',
    link: 'https://github.com/unredundant/satisfaketion',
    role: 'maintainer',
    image: horseLady,
  },
  {
    name: 'unredundant.io',
    description: 'This portfolio site',
    link: 'https://github.com/unredundant/unredundant-io',
    role: 'maintainer',
    image: contemplativeLake,
  },
  {
    name: 'Lerasium',
    description: 'Kotlin Service Generator',
    link: 'https://github.com/bkbnio/lerasium',
    role: 'maintainer',
    image: gemstone,
  },
  {
    name: 'Skelegro',
    description: 'Collection of wacky Kotlin DSLs',
    link: 'https://github.com/bkbnio/skelegro',
    role: 'maintainer',
    image: mask,
  },
  {
    name: 'Skribe',
    description: 'OpenAPI Client Generator',
    link: 'https://github.com/bkbnio/skribe',
    role: 'maintainer',
    image: bard,
  },
  {
    name: 'Neonctl',
    description: 'CLI for managing Neon databases',
    link: 'https://github.com/unredundant/neonctl',
    role: 'maintainer',
    image: tree,
  },
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Ryan Brink</title>
        <meta
          name="description"
          content="Open source projects that I've created or contributed to"
        />
      </Head>
      <SimpleLayout
        title="Open source projects that I've created or contributed to."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. They are all fully open-sourced, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <div className="grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <NewCard key={project.name} project={project} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

const NewCard = ({ project }) => {
  return (
    <div className="relative mx-auto max-w-md overflow-hidden rounded-lg shadow-md md:max-w-xs">
      <div>
        <div className="relative grid h-10 grid-cols-2 border-red-300 bg-teal-300 align-middle dark:bg-zinc-800">
          <div>
            <p className="absolute left-0 top-1/2 ml-4 -translate-y-1/2 transform font-bold text-zinc-700 dark:text-gray-300">
              {project.name}
            </p>
          </div>
          <div>
            <a href={project.link} target="_blank" rel="noreferrer">
              <button
                className="absolute right-0 top-2 my-3 mr-3 -translate-y-1/2 rounded-full bg-white px-2 text-sm
                font-light text-zinc-800 opacity-80 duration-300 hover:bg-gray-200 hover:drop-shadow-md dark:bg-teal-300 hover:dark:bg-teal-500"
              >
                Cop the Sauce
              </button>
            </a>
          </div>
        </div>
        <Image
          objectFit="fill"
          placeholder="blur"
          src={project.image}
          alt={project.name}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 px-4 py-2 backdrop-blur-md">
          <p className="text-center font-light text-gray-100">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}
