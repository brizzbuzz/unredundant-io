import Image from 'next/future/image'
import Head from 'next/head'

import {SimpleLayout} from '@/components/SimpleLayout'

import portal from '@/images/photos/glowing-portal-impressionist.jpg'
import gemstone from '@/images/photos/glowing-hovering-gemstone.jpg'
import horseLady from '@/images/photos/surrealist-horse-woman.jpg'
import contemplativeLake from '@/images/photos/contemplative-lake-vaguely-japanese-vaporwave.jpg'
import cathedral from '@/images/photos/impressionist-cathedral-vaporwave.jpg'
import mask from '@/images/photos/dia-de-meurtos-vaporwave-mask.jpg'

const projects = [
  {
    name: 'Backstage',
    description: 'An open platform for building developer portals.',
    link: 'https://backstage.io',
    role: "contributor",
    image: portal
  },
  {
    name: 'Kompendium',
    description: 'Non-invasive Ktor OpenAPI documentation',
    link: 'https://github.com/bkbnio/kompendium',
    role: "maintainer",
    image: cathedral
  },
  {
    name: 'Satisfaketion',
    description: 'A funky faker focused on portability and composability',
    link: 'https://github.com/unredundant/satisfaketion',
    role: "maintainer",
    image: horseLady
  },
  {
    name: 'unredundant.io',
    description: 'This portfolio site',
    link: 'https://github.com/unredundant/unredundant-io',
    role: "maintainer",
    image: contemplativeLake
  },
  {
    name: 'Lerasium',
    description: 'Kotlin Service Generator',
    link: 'https://github.com/bkbnio/lerasium',
    role: "maintainer",
    image: gemstone
  },
  {
    name: 'Skelegro',
    description: 'Collection of wacky Kotlin DSLs',
    link: 'https://github.com/bkbnio/skelegro',
    role: "maintainer",
    image: mask
  }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {projects.map((project) => (
            <NewCard key={project.name} project={project}/>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

const NewCard = ({project}) => {
  return (
    <div className="relative max-w-md mx-auto md:max-w-xs overflow-hidden rounded-lg shadow-md">
      <div>
        <div className="align-middle relative bg-teal-300 dark:bg-zinc-800 grid grid-cols-2 border-red-300 h-10">
          <div>
            <p className="ml-4 absolute top-1/2 transform -translate-y-1/2 left-0 font-bold text-zinc-700 dark:text-gray-300">
              {project.name}
            </p>
          </div>
          <div>
            <a href={project.link} target="_blank" rel="noreferrer">
              <button
                className="absolute right-0 px-2 rounded-full text-sm text-zinc-800 font-light bg-white hover:bg-gray-200 dark:bg-teal-300
                hover:dark:bg-teal-500 opacity-80 hover:drop-shadow-md duration-300 mr-3 top-2 -translate-y-1/2 my-3">
                Cop the Sauce
              </button>
            </a>
          </div>
        </div>
        <Image objectFit="fill" placeholder="blur" src={project.image} alt={project.name}/>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 backdrop-blur-md bg-white/10">
          <p className="text-center font-light text-gray-100">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}