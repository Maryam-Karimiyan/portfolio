import Image, { StaticImageData } from "next/image"

type ImagesTypes={
    backImg:StaticImageData,
    frontImg:StaticImageData,
    backImgWidth:number,
    frontImgWidth:number,
}
function MixedImages({backImg,frontImg,backImgWidth,frontImgWidth}:ImagesTypes) {
  return (
    <div>
        <Image src={backImg} alt="" width={backImgWidth}/>
        <Image src={frontImg} alt="" width={frontImgWidth} className="relative bottom-60 left-2"/>
    </div>
  )
}

export default MixedImages