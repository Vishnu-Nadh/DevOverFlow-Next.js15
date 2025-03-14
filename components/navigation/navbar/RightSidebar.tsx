import TagCard from "@/components/cards/TagCard";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const hotQuestions = [
  {
    _id: "1",
    title: "How to add prerendering logic using lambda function ?",
  },
  {
    _id: "2",
    title: "Next js SEO benifits in a nutshell",
  },
  {
    _id: "3",
    title: "React query onSuccess function depricated ?",
  },
  {
    _id: "4",
    title: "Where to add meta tag in an html file ?",
  },
  {
    _id: "5",
    title: "Next.js server action configuration error!",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "react",
    questions: 2342,
  },
  {
    _id: "2",
    name: "javascript",
    questions: 234,
  },
  {
    _id: "3",
    name: "nextjs",
    questions: 4545,
  },
  {
    _id: "4",
    name: "typescript",
    questions: 666,
  },
  {
    _id: "5",
    name: "react-query",
    questions: 123,
  },
];

function RightSidebar() {
  return (
    <section className="custom-scrollbar pt-36 background-light900_dark200 light-border sticky top-0 right-0 h-screen flex w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:!shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark100_light900">Top Questions</h3>
        <div className="mt-7 flex gap-[30px] flex-col w-full">
          {hotQuestions.map(({ _id, title }) => {
            return (
              <Link
                key={_id}
                href={ROUTES.PROFILE(_id)}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">{title}</p>
                <Image
                  src={"/icons/chevron-right.svg"}
                  alt="Chevron"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="flex flex-col gap-7 mt-7">
          {popularTags?.map(({ _id, name, questions }) => {
            return <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact />;
          })}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;
