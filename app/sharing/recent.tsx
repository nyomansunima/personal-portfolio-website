'use client'

import Link from 'next/link'
import * as React from 'react'

interface RecentData {
  title: string
  publisher: string
  url: string
}

interface RecentItemProps {
  recent: RecentData
}

// ** INFO: Limit this list into 5 items to keep it short and clean
const recents: RecentData[] = [
  {
    title: 'How to make your GitHub project better',
    publisher: 'Hashnode',
    url: 'https://nyomansunima.hashnode.dev/how-to-make-your-github-project-better',
  },
  {
    title: 'How to create a better README',
    publisher: 'Hashnode',
    url: 'https://nyomansunima.hashnode.dev/how-to-create-a-better-readme',
  },
  {
    title: 'Turn Nest.Js into Serverless with Nitric in a few seconds',
    publisher: 'Hashnode',
    url: 'https://nyomansunima.hashnode.dev/turn-nestjs-into-serverless-with-nitric-in-a-few-seconds',
  },
]

export function RecentItem({ recent }: RecentItemProps): React.ReactElement {
  const { title, publisher, url } = recent

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col tablet:flex-row p-4 rounded-2xl bg-ambient border border-border transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-pretty !leading-tight line-clamp-1 flex-grow">
        {title}
      </h3>
      <div className="flex gap-2 text-sm">
        <span className="text-foreground/50 transition-all duration-300 hover:text-foreground hover:font-medium">
          {publisher}
        </span>
      </div>
    </Link>
  )
}

export function RecentlySection(): React.ReactElement {
  return (
    <>
      {recents && recents.length > 0 && (
        <section className="flex flex-col pb-20 laptop:pb-56">
          <span>Recently:</span>

          <div className="flex flex-col gap-2 mt-10">
            {recents.length > 0 &&
              recents.map((recent, i) => (
                <RecentItem recent={recent} key={i} />
              ))}
          </div>
        </section>
      )}
    </>
  )
}
