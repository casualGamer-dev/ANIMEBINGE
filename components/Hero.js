import { MdStars } from "react-icons/md";
import { BiPieChart, BiPlayCircle } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import dynamic from 'next/dynamic'
export default function Hero({
  name,
  img,
  description,
  genre,
  totalEpisodes,
  rating,
  url,
}) {
  return (
    <>
      <div
        className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]"
        id="hero"
        style={{
          height: 504,
          background: `linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .2), rgba(0, 0, 0, .0)), url(${img})`,
          backgroundSize: "cover",
        position: "relative"
        }}
      >
        <div className="text-white font-extrabold md:text-3xl lg:text-3xl xl:text-3xl text-xl md:p-12 lg:p-12 xl:p-12 p-6 md:pt-10 lg:pt-10 xl:pt-10 pt-10 md:pb-6 lg:pb-6 xl:pb-6 pb-0">
          {name.split("<br/>").map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </div>
        <div className="md:flex lg:flex xl:flex pl-12 hidden">
          <div className="flex bg-black bg-opacity-40 mr-2 rounded-lg place-items-center">
            <MdStars
              color="#0158F9"
              style={{ marginLeft: 0.5, marginBottom: 1, marginTop: 0.5 }}
              size={17}
              className="mr-1"
            />
            <p
              style={{ fontSize: 10 }}
              className="text-white font-semibold pr-2"
            >
              {rating}
            </p>
          </div>
          <div className="flex bg-black bg-opacity-40 mr-2 rounded-lg place-items-center">
            <BiPieChart
              color="#0158F9"
              style={{ marginLeft: 0.5, marginBottom: 1, marginTop: 0.5 }}
              size={17}
              className="mr-1"
            />
            <p
              style={{ fontSize: 10 }}
              className="text-white font-semibold pr-2"
            >
              {totalEpisodes} episodes
            </p>
          </div>
          <div className="flex bg-black bg-opacity-40 mr-2 rounded-lg place-items-center">
            <BiPlayCircle
              color="#0158F9"
              style={{ marginLeft: 0.5, marginBottom: 1, marginTop: 0.5 }}
              size={17}
              className="mr-1"
            />
            {genre.map((one, index) => {
              if (index == genre.length - 1) {
                return (
                  <div key={index} className="flex">
                    <p
                      style={{ fontSize: 10 }}
                      className="text-white font-semibold pr-2"
                    >
                      {one}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="flex">
                    <p
                      style={{ fontSize: 10 }}
                      className="text-white font-semibold"
                    >
                      {one}
                    </p>
                    <BsDot color="#0158F9" />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <p
          style={{ fontSize: 12, width: 450 }}
          className="md:text-white lg:text-white xl:text-white text-gray-100 md:font-semibold lg:font-semibold xl:font-semibold font-normal md:pl-12 md:pt-6 lg:pl-12 lg:pt-6 xl:pl-12 xl:pt-6 pl-6 pt-2"
          id="description"
        >
          {description}
        </p>
        <Link href={url} passHref>
          <div
            className="hover:cursor-pointer md:ml-12 lg:ml-12 xl:ml-12 ml-6 md:mt-10 lg:mt-10 xl:mt-10 mt-6"
            id="btn-grad"
          >
            <p className="text-sm font-semibold">Watch now</p>
          </div>
        </Link>
      </div>
    </>
  );
}
