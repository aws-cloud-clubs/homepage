import Link from "next/link";
import Image from "next/image";
import QueryString from "qs";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import BlockRendererClient from "@/app/_component/BlockRendererClient";
import { DateTime } from "luxon";

export async function generateStaticParams() {
  const query = QueryString.stringify(
    {
      fields: ["id"],
      pagination: { limit: 1000 },
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
  return body.data.map(({ id }) => ({ id: id.toString() }));
}

async function getActivity(id: string) {
  const query = QueryString.stringify({}, { encodeValuesOnly: true });

  const response = await fetch(
    `${process.env.STRAPI_ENDPOINT}/api/acc-activities/${id}?${query}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );

  const body: { data: any } = await response.json();
  return body.data;
}

export default async function ActivityDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const activity = await getActivity(id);

  return (
    <main className="bg-neutral-900 py-12 text-white min-h-screen">
      <nav className="max-w-screen-lg px-8 text-white mx-auto">
        <Link href="/" className="flex text-xl items-center">
          <ArrowLeftCircleIcon className="w-8 h-8 mr-2" />
          <span>메인 페이지로 돌아가기</span>
        </Link>
      </nav>

      <section className="max-w-screen-lg px-8 my-12 mx-auto">
        <div className="bg-white text-gray-900 rounded-xl p-8">
          <p className="text-gray-700 font-medium">
            {activity.attributes.club}
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            {activity.attributes.title}
          </h1>
          <p className="mt-2 mb-10 font-bold">
            {`${activity.attributes.author} · ${DateTime.fromISO(
              activity.attributes.publishedAt
            ).toFormat("yyyy.MM.dd")}`}
          </p>

          <BlockRendererClient content={activity.attributes.content} />
        </div>
      </section>
    </main>
  );
}
