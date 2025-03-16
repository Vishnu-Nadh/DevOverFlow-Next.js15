import LocalSearch from "@/components/Search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const dummyQuestions = [
  {
    _id: "1",
    title: "How to learn Next.js?",
    description: "Can anybody help me explaining the steps on how to learn Next.js?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Next.js" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 20,
    answers: 4,
    views: 444,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "Best way to manage state in React?",
    description: "What are the best practices for state management in a large-scale React application?",
    tags: [
      { _id: "3", name: "React" },
      { _id: "4", name: "Redux" },
    ],
    author: { _id: "2", name: "Alice Smith" },
    upvotes: 35,
    answers: 6,
    views: 872,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How does the JavaScript event loop work?",
    description: "Can someone explain the JavaScript event loop with examples?",
    tags: [
      { _id: "5", name: "JavaScript" },
      { _id: "6", name: "Node.js" },
    ],
    author: { _id: "3", name: "Bob Johnson" },
    upvotes: 50,
    answers: 10,
    views: 1340,
    createdAt: new Date(),
  },
  {
    _id: "4",
    title: "Why is my useEffect running twice in React 18?",
    description: "I noticed that useEffect runs twice in development mode. Why does this happen and how to fix it?",
    tags: [
      { _id: "7", name: "React" },
      { _id: "8", name: "Next.js" },
    ],
    author: { _id: "4", name: "Emily Davis" },
    upvotes: 18,
    answers: 2,
    views: 367,
    createdAt: new Date(),
  },
  {
    _id: "5",
    title: "How to optimize performance in Next.js?",
    description: "What are some techniques to improve performance in a Next.js application?",
    tags: [
      { _id: "9", name: "Next.js" },
      { _id: "10", name: "Vercel" },
    ],
    author: { _id: "5", name: "Michael Brown" },
    upvotes: 42,
    answers: 8,
    views: 1025,
    createdAt: new Date(),
  },
  {
    _id: "6",
    title: "How to style components with Tailwind CSS?",
    description: "What are the best practices for using Tailwind CSS in a React project?",
    tags: [
      { _id: "11", name: "Tailwind CSS" },
      { _id: "12", name: "React" },
    ],
    author: { _id: "6", name: "Sophia Wilson" },
    upvotes: 25,
    answers: 5,
    views: 590,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = dummyQuestions?.filter((question) =>
    question?.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900" asChild>
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
          route={ROUTES.HOME}
        />
      </section>
      {/* Home Filters */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions?.map((question) => {
          return <h1 key={question._id}>{question.title}</h1>;
        })}
      </div>
    </>
  );
};

export default Home;
