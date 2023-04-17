import Image from 'next/image'
import logoPolywork from '@/images/logos/polywork.svg'
import logoGithub from '@/images/logos/github.png'

export function PolyworkIcon(props) {
  return <Image src={logoPolywork} alt="" height={24} width={24} {...props} />
}

export function GitHubIcon(props) {
  return <Image src={logoGithub} alt="" height={24} width={24} {...props} />
}
