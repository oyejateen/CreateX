import React from 'react';
import ScheduleCard from './ScheduleCard';

const Schedule = () => {
  const events = [
    { date: "26 Oct", title: "Orientation Day", paragraphs: ["Details about the event, theme, competition structure and how you can collaborate, create, and compete over the next 30 days"] },
    { date: "28 Oct", title: "Registration Begins", paragraphs: ["Go through the Register Now button or visit our Unstop Posting to register for CreateX 2024"] },
    { date: "1 Nov", title: "Early Bird Offer Ends", paragraphs: ["The Early Bird offer (20% off) for Registrations ends"] },
    { date: "10 Nov", title: "Registration End", paragraphs: ["Registrations and Problem Statement Submission Deadline"] },
    { date: "16 Nov", title: "Checkpoint 1", paragraphs: ["Checkpoint and Check-in with the Organizing team"] },
    { date: "23 Nov", title: "Checkpoint 2", paragraphs: ["Checkpoint and Check-in with the Organizing team"] },
    { date: "30 Nov", title: "Final Checkpoint", paragraphs: ["Checkpoint and Check-in with the Organizing team. Last Reminder for Report Submission"] },
    { date: "1 Dec", title: "Report Submission Deadline", paragraphs: ["Last Date to Submit the Project Report"] },
    { date: "8 Dec", title: "Exhibition", paragraphs: ["Final Objective of the Event, The Exhibition. Showcasing Projects in a public exhibition and the Judging and Final Prize giving ceremony."] },
  ];

  return (
    <div className="py-20 w-full flex flex-col items-center bg-black">
      <h1 className="text-white font-kagitingan font-bold text-5xl md:text-7xl text-left md:m-16 m-14 pl-4 w-full max-w-[950px]">
        SCHEDULE
      </h1>

      <div className="relative flex flex-col items-start w-full max-w-5xl px-4">
        {events.map((event, index) => (
          <ScheduleCard
            key={index}
            date={event.date}
            title={event.title}
            paragraphs={event.paragraphs}
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
