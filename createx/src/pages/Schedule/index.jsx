import React from 'react';
import ScheduleCard from './ScheduleCard';

const Schedule = () => {
  const events = [
    {
      date: "2024-10-01",
      title: "Event 1",
      paragraphs: ["Description for Event 1.", "More details about Event 1."]
    },

    {
      date: "2024-10-01",
      title: "Event 1",
      paragraphs: ["Description for Event 1.", "More details about Event 1.d,nfdfvh fdkljg bhkg trhgbgjtr r;lhtrjmhpoit;nhuty ohbjttiog tgjffj rj;gr;lkh gvrklgrgknlrgrgrgrjlgrkjl;j;lrrinjwtrm;trkmrmntri;oern"]
    },
    {
      date: "2024-10-01",
      title: "Event 1",
      paragraphs: ["Description for Event 1.", "More details about Event 1."]
    },
    {
      date: "2024-10-15",
      title: "Event 2",
      paragraphs: ["Description for Event 2.", "More details about Event 2 with additional details to  ejhfkjsefewfhl iew test layout."],
    },
    {
      date: "2024-10-10",
      title: "Event 3",
      paragraphs: ["Description for Event 3.", "Extended details about Event 3 for testing the layout witjkjhfjekehwewbfj wekfhefkjneh ,fmdkjfmnfkgjfengfjlg varying content length."]
    },
  ];

  return (
    <div className="py-40 w-screen flex justify-center bg-black">
      <div className="relative flex flex-col items-start w-full max-w-5xl px-4">
        {events.map((event, index) => (
          <ScheduleCard
            key={index}
            date={event.date}
            title={event.title}
            paragraphs={event.paragraphs}
            isLast={index === events.length - 1} // Pass isLast prop for the last card
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
