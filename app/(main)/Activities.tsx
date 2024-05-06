import Link from "next/link";
import Image from "next/image";
import QueryString from "qs";
import { DateTime } from "luxon";

async function getActivities() {
  const query = QueryString.stringify(
    {
      fields: ["title", "author", "club", "publishedAt"],
      populate: {
        thumbnail: {
          fields: ["url"],
        },
      },
      pagination: { limit: 4 },
    },
    { encodeValuesOnly: true }
  );

  const response = await fetch(
    `${process.env.STRAPI_ENDPOINT}/api/acc-activities?${query}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );

  const body: { data: any[]; meta: any } = await response.json();
  return body;
}

export default async function Activities() {
  const { data, meta } = await getActivities();

  return (
    <>
      <div className="flex items-center">
        <h2 className="text-4xl font-bold">최근 활동</h2>
        {/* <Link href="#" className="text-lg ml-auto flex items-center">
            <p className="mr-2">모든 최근 활동 보기</p>
            <ArrowRightCircleIcon className="w-6 h-6" />
          </Link> */}
      </div>
      <div className="grid grid-cols-3 mt-8 gap-8">
        {data.map((activity) => (
          <Link
            key={activity.attributes.id}
            href={`/activities/${activity.id}`}
            className="bg-neutral-950 rounded-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={activity.attributes.thumbnail.data.attributes.url}
                fill
                alt=""
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-200">
                {activity.attributes.club}
              </p>
              <p className="font-medium mt-2">{activity.attributes.title}</p>
              <p className="text-sm text-gray-200 font-medium mt-1">
                {DateTime.fromISO(activity.attributes.publishedAt).toFormat(
                  "yyyy.MM.dd"
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
