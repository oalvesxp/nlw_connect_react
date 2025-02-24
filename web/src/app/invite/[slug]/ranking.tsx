import Image from 'next/image'

import { getRanking } from '@/http/api'
import cooper from '../../../assets/medal_cooper.svg'
import gold from '../../../assets/medal_gold.svg'
import silver from '../../../assets/medal_silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((subscriber, index) => {
          const position = index + 1

          return (
            <div
              key={subscriber.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{position}º</span> |{' '}
                {subscriber.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {subscriber.score}
              </span>

              {position === 1 && (
                <Image
                  src={gold}
                  alt="gold"
                  className="absolute top-0 right-8"
                />
              )}
              {position === 2 && (
                <Image
                  src={silver}
                  alt="silver"
                  className="absolute top-0 right-8"
                />
              )}
              {position === 3 && (
                <Image
                  src={cooper}
                  alt="cooper"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
