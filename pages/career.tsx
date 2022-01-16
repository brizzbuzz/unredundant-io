import type { NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';
import React from 'react';

enum EntrySide {
  LEFT,
  RIGHT,
}

type TimelineEntry = {
  title: string;
  company: string;
  date: string;
};

type EntryDetails = {
  entry: TimelineEntry;
  side: EntrySide;
};

const timelineEntries: Array<EntryDetails> = [
  { side: EntrySide.LEFT, entry: { title: 'Software Engineer', company: 'Capsule', date: 'February 2020' } },
  { side: EntrySide.RIGHT, entry: { title: 'Software Engineer', company: 'Circle', date: 'January 2019' } },
  { side: EntrySide.LEFT, entry: { title: 'Software Engineer', company: 'Walmart Labs', date: 'June 2017' } },
  { side: EntrySide.LEFT, entry: { title: 'Graduated', company: 'University of Maryland', date: 'May 2017' } },
  { side: EntrySide.RIGHT, entry: { title: 'Software Engineer Intern', company: 'Meta', date: 'May 2016' } },
  { side: EntrySide.LEFT, entry: { title: 'Software Engineer Intern', company: 'MyCareerPeer', date: 'May 2015' } },
  { side: EntrySide.RIGHT, entry: { title: 'Software Engineer Intern', company: 'TalkLocal', date: 'October 2014' } },
  {
    side: EntrySide.RIGHT,
    entry: { title: 'Started Undergrad', company: 'University of Maryland', date: 'August 2013' },
  },
];

const createLeftTimelineEntry = (entry: TimelineEntry) => {
  return (
    <div className="flex flex-row-reverse md:contents">
      <div className="bg-accent-dark col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
        <TimelineContentBlock title={entry.title} company={entry.company} date={entry.date} />
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-pop pointer-events-none" />
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent-light shadow" />
      </div>
    </div>
  );
};

const createRightTimelineEntry = (entry: TimelineEntry) => {
  return (
    <div className="flex md:contents">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-pop pointer-events-none" />
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent-light shadow" />
      </div>
      <div className="bg-accent-dark col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
        <TimelineContentBlock title={entry.title} company={entry.company} date={entry.date} />
      </div>
    </div>
  );
};

const TimelineContentBlock: React.FC<TimelineEntry> = ({ title, company, date }) => {
  return (
    <div>
      <p className="font-semibold text-lg mb-1">
        {title} @ {company} | {date}
      </p>
    </div>
  );
};

const Career: NextPage = () => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Career');

  return (
    <PageContainer>
      <div className="min-h-max max-h-screen mx-32 my-10 pb-10">
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            {timelineEntries.map((details) => {
              if (details.side == EntrySide.RIGHT) {
                return createRightTimelineEntry(details.entry);
              } else {
                return createLeftTimelineEntry(details.entry);
              }
            })}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Career;
