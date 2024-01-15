import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function SponsorCard ({
  name,
  category,
  color,
  image,
  link,
  filter = '',
}: {
  name: string,
  category: string,
  color: string,
  image: string,
  link: string,
  filter: string
}) {
  return (
    <div className='relative h-[400px] sm:h-[300px] rounded-md overflow-hidden' style={{backgroundColor: color}}>
      <div className="absolute w-full grid grid-cols-[1fr,auto] p-4">
        <div className="flex flex-col gap-2">
          <h5 className="text-xl leading-none text-text-primary">{name}</h5>
          <p className="text-black/40 dark:text-white/40 leading-none text-lg">{category}</p>
        </div>
        <Link
          href={link} 
          target="_blank"
          className="flex bg-black/10 dark:bg-white/10 text-black/50 dark:text-white/50 hover:text-opacity-100 transition gap-2 px-4 py-1.5 rounded-md cursor-pointer"
        >
          <span className="my-auto w-max">More</span>
          <ArrowRightIcon className="my-auto w-5 h-5"/>
        </Link>
      </div>
      <Image
        className={clsx("absolute w-80 sm:w-60 h-max max-h-16 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] saturate-0 object-contain dark:invert pointer-events-none", filter)}
        src={image}
        width={80*4}
        height={40}
        alt={`${name} logo`}
      />
    </div>
  )
}