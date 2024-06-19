import Image from "next/image";

// Assets
import OTImage from "/public/images/ot.png";
import ACCSCDImage from "/public/images/accscd.png";
import SessionImage from "/public/images/session.png";
import StudyImage from "/public/images/study.png";

import RocketIcon from "/public/icons/rocket.svg";
import BalloonIcon from "/public/icons/balloon.svg";
import PlanetIcon from "/public/icons/planet.svg";
import LibraryIcon from "/public/icons/library.svg";

export default async function Activities() {
  return (
    <>
      <h2 className="text-4xl font-bold text-center">
        2024년 1학기에는, 이렇게 활동했어요.
      </h2>

      <div className="mt-32 flex space-x-16">
        <div className="w-1/2">
          <div className="p-4 rounded-3xl border border-gray-200 inline-block">
            <Image src={RocketIcon} alt="" className="w-9 h-9" />
          </div>
          <h3 className="text-3xl font-semibold mt-8">연합 OT</h3>
          <p className="mt-6 text-gray-600 break-keep">
            학기 초에 연합 OT를 진행했어요.
            <br /> ACC에 대해서 소개하고, 다른 학교의 멤버들과 더 친해지는
            자리였어요.
          </p>
        </div>
        <Image
          src={OTImage}
          alt=""
          className="w-1/2 rounded-3xl aspect-[16/9] object-cover"
        />
      </div>

      <div className="mt-32 flex space-x-16">
        <div className="w-1/2">
          <div className="p-4 rounded-3xl border border-gray-200 inline-block">
            <Image src={PlanetIcon} alt="" className="w-9 h-9" />
          </div>
          <h3 className="text-3xl font-semibold mt-8">Student Community Day</h3>
          <p className="mt-6 text-gray-600 break-keep">
            4월에는 ACC의 가장 큰 행사인 Student Community Day를 진행했어요. 약
            150명 가량의 대학생 및 주니어 개발자들이 참가했고, 3개의 트랙에서
            13명의 발표자 분들이 클라우드에 대한 지식과 경험을 공유해주셨어요.
          </p>
        </div>
        <Image
          src={ACCSCDImage}
          alt=""
          className="w-1/2 rounded-3xl aspect-[16/9] object-cover"
        />
      </div>

      <div className="mt-32 flex space-x-16">
        <div className="w-1/2">
          <div className="p-4 rounded-3xl border border-gray-200 inline-block">
            <Image src={BalloonIcon} alt="" className="w-9 h-9" />
          </div>
          <h3 className="text-3xl font-semibold mt-8">연합 세션</h3>
          <p className="mt-6 text-gray-600 break-keep">
            학기 중에는 연합 세션을 진행했어요. 현직자를 모시고 실무적인
            이야기를 들어보기도 하고, 여러 학교의 학생들 경험한 클라우드 기술에
            대한 이야기를 들어보기도 했어요.
          </p>
        </div>
        <Image
          src={SessionImage}
          alt=""
          className="w-1/2 rounded-3xl aspect-[16/9] object-cover"
        />
      </div>

      <div className="mt-32 flex space-x-16">
        <div className="w-1/2">
          <div className="p-4 rounded-3xl border border-gray-200 inline-block">
            <Image src={LibraryIcon} alt="" className="w-9 h-9" />
          </div>
          <h3 className="text-3xl font-semibold mt-8">스터디</h3>
          <p className="mt-6 text-gray-600 break-keep">
            각 학교 내에서, 또는 몇몇 학교의 학생들이 모여서 스터디를
            진행했어요. AWS 자격증 취득을 위한 스터디부터, 클라우드 아키텍처
            관련 스터디까지 다양한 주제로 진행되었어요.
          </p>
        </div>
        <Image
          src={StudyImage}
          alt=""
          className="w-1/2 rounded-3xl aspect-[16/9] object-cover"
        />
      </div>
    </>
  );
}
