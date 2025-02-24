import {
  getSubscribersSubscriberIdRankingClicks,
  getSubscribersSubscriberIdRankingPosition,
  getSubscribersSubscriberIdRankingScore,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

interface StatsProps {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } =
    await getSubscribersSubscriberIdRankingClicks(subscriberId)

  const { count: scoreCount } =
    await getSubscribersSubscriberIdRankingScore(subscriberId)

  const { position: rankPosition } =
    await getSubscribersSubscriberIdRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {accessCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>

        <MousePointerClick
          size={20}
          className="text-purple absolute top-3 left-3"
        />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {scoreCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>

        <BadgeCheck size={20} className="text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankPosition ? `${rankPosition}º` : '-'}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no Ranking
        </span>

        <Medal size={20} className="text-purple absolute top-3 left-3" />
      </div>
    </div>
  )
}
