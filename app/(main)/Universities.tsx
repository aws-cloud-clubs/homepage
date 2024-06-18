import Image from "next/image";

import KHUImage from "/public/images/universities/khu.png";
import EWHAImage from "/public/images/universities/ewha.png";
import NSUImage from "/public/images/universities/nsu.png";
import SEOULTECHImage from "/public/images/universities/seoultech.png";
import DDWUImage from "/public/images/universities/ddwu.png";
import INHAImage from "/public/images/universities/inha.png";
import KWUImage from "/public/images/universities/kwu.png";
import CNUImage from "/public/images/universities/cnu.png";
import CKUImage from "/public/images/universities/cku.png";

const universities = [
  {
    name: "경희대학교",
    englishName: "ACC KHU",
    image: KHUImage,
  },
  {
    name: "이화여자대학교",
    englishName: "ACC EWHA",
    image: EWHAImage,
  },
  {
    name: "남서울대학교",
    englishName: "ACC NSU",
    image: NSUImage,
  },
  {
    name: "서울과학기술대학교",
    englishName: "ACC SEOULTECH",
    image: SEOULTECHImage,
  },
  {
    name: "동덕여자대학교",
    englishName: "ACC DDWU",
    image: DDWUImage,
  },
  {
    name: "인하대학교",
    englishName: "ACC INHA",
    image: INHAImage,
  },
  {
    name: "광운대학교",
    englishName: "ACC KWU",
    image: KWUImage,
  },
  {
    name: "충남대학교",
    englishName: "ACC CNU",
    image: CNUImage,
  },
  {
    name: "가톨릭대학교",
    englishName: "ACC CKU",
    image: CKUImage,
  },
];

export default function Universities() {
  return (
    <>
      <h2 className="text-4xl font-bold">아래 학교들과 함께하고 있어요.</h2>

      <div className="grid 2xl:grid-cols-5 grid-cols-2 md:grid-cols-3 mt-20 gap-5 lg:grid-cols-4">
        {universities.map((university) => (
          <div
            key={university.name}
            className="bg-[#747ACD2E] font-semibold text-lg aspect-square rounded-xl flex flex-col justify-center items-center"
          >
            <Image
              src={university.image}
              alt=""
              className="h-20 object-contain"
            />
            <p className="mt-4">{university.englishName}</p>
            <h3>{university.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
