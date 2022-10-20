import Image from 'next/image'

export function CaptionedImage({ src }) {
  return (
    <div className="mx-auto h-64 w-64">
      <Image src={src} />
      <div className="mx-auto border-2 border-blue-300">
        <p className="mx-auto text-red-400">hi</p>
      </div>
    </div>
  )
}
