import Image from "next/Image";

export function CaptionedImage({src, caption, props}) {
  return (
    <div className="h-5/6 w-5/6 md:h-1/2 md:w-1/2 mx-auto">
      <Image src={src}/>
      <div className="grid grid-cols-1 content-center">
        <div className="text-gray-500 inline mx-auto font-light text-opacity-90 text-center">
          {caption}
        </div>
      </div>
    </div>
  )
}
