'use client';

import { useState } from 'react';

const citation_url_prefix = 'http://localhost:3000/api/citations?file_name=';

export default function Home() {
  const [showCitation, setShowCitation] = useState(false);
  const [citationLink, setCitationLink] = useState<string>();

  const handleClickCitation = (fileName: string) => {
    setShowCitation((prev) => !prev);
    setCitationLink(citation_url_prefix + fileName);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 w-screen'>
      <div className='h-max'>
        <ul>
          <li>
            <p className='break-normal'>
              When learning Python, the most inspiring thing is the
              Python Zen. Here are a few sentences:
            </p>
            <br/>
            <p>Beautiful is better than ugly.</p>
            <p>Explicit is better than implicit.</p>
            <br/>
            <p
              className='underline decoration-sky-500 cursor-pointer'
              onClick={() => {
                handleClickCitation('the_zen_of_python.pdf');
              }}
            >
              see more...
            </p>
          </li>
        </ul>
        <div>
          {showCitation && (
            <iframe src={citationLink} className='h-[1000px] w-full p-10' />
          )}
        </div>
      </div>
    </main>
  );
}
