interface LeadProps {
  data: any;
}

export default function Lead({ data }: LeadProps) {
  return (
    <div className="relative">
      <div className="my-4 h-[22rem] w-full overflow-y-auto py-4 pr-2">
        <div className="mb-6 px-4">
          <h1 className="text-md mb-2 font-bold text-gray-800">
            WHY WE MATCHED YOU
          </h1>
          <ul className="">
            {data?.matchDetails?.map((line: string) => (
              <span className="flex items-center gap-1">
                • <li className="text-sm text-gray-800">{line}</li>
              </span>
            ))}
          </ul>
        </div>
        <div className="mb-4 px-4">
          <h1 className="text-md mb-2 font-bold text-gray-800">
            EMAIL PERSONALIZATION LINE
          </h1>
          <div className="rounded-md bg-gray-400 p-4">
            <p className="text-sm font-medium text-gray-800">
              {data?.emailPersonalizationLine}
            </p>
          </div>
        </div>{" "}
        <div className="mb-6 px-4">
          <h1 className="text-md mb-2 font-bold text-gray-800">ABOUT</h1>
          <p className="text-sm font-medium text-gray-800">{data?.about}</p>
        </div>
        <div className="mb-6 px-4">
          <h1 className="text-md mb-2 font-bold text-gray-800">
            LEAVE A COMMENT
          </h1>
          <textarea
            rows={6}
            className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
