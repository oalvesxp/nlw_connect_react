/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * NLW Connect
 * OpenAPI spec version: 0.0.1
 */
export type PostSubscribersBody = {
  name: string
  email: string
  /** @nullable */
  referrer?: string | null
}

export type PostSubscribers201 = {
  subscriberId: string
}

/**
 * @nullable
 */
export type GetInvitesSubscriberId302 =
  | (typeof GetInvitesSubscriberId302)[keyof typeof GetInvitesSubscriberId302]
  | null

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetInvitesSubscriberId302 = {
  null: 'null',
} as const

export type GetSubscribersSubscriberIdRankingClicks200 = {
  count: number
}

export type GetSubscribersSubscriberIdRankingScore200 = {
  count: number
}

export type GetSubscribersSubscriberIdRankingPosition200 = {
  /** @nullable */
  position: number | null
}

export type GetRanking200RankingItem = {
  id: string
  name: string
  score: number
}

export type GetRanking200 = {
  ranking: GetRanking200RankingItem[]
}

/**
 * Route to subscribes someone to the event
 * @summary Subscribes someone to the event
 */
export const getPostSubscribersUrl = () => {
  return `http://localhost:3333/subscribers`
}

export const postSubscribers = async (
  postSubscribersBody: PostSubscribersBody,
  options?: RequestInit
): Promise<PostSubscribers201> => {
  const res = await fetch(getPostSubscribersUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(postSubscribersBody),
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PostSubscribers201 = body ? JSON.parse(body) : {}

  return data
}

/**
 * Access to invite link from a subscriber and redirects user to subscription page
 * @summary Access invite link and redirects user
 */
export const getGetInvitesSubscriberIdUrl = (subscriberId: string) => {
  return `http://localhost:3333/invites/${subscriberId}`
}

export const getInvitesSubscriberId = async (
  subscriberId: string,
  options?: RequestInit
): Promise<unknown> => {
  const res = await fetch(getGetInvitesSubscriberIdUrl(subscriberId), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: unknown = body ? JSON.parse(body) : {}

  return data
}

/**
 * Get subscriber invite clicks count by subscriberId
 * @summary Get subscriber invite clicks count
 */
export const getGetSubscribersSubscriberIdRankingClicksUrl = (
  subscriberId: string
) => {
  return `http://localhost:3333/subscribers/${subscriberId}/ranking/clicks`
}

export const getSubscribersSubscriberIdRankingClicks = async (
  subscriberId: string,
  options?: RequestInit
): Promise<GetSubscribersSubscriberIdRankingClicks200> => {
  const res = await fetch(
    getGetSubscribersSubscriberIdRankingClicksUrl(subscriberId),
    {
      ...options,
      method: 'GET',
    }
  )

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSubscribersSubscriberIdRankingClicks200 = body
    ? JSON.parse(body)
    : {}

  return data
}

/**
 * Get subscriber invite count by subscriberId
 * @summary Get subscriber invite count
 */
export const getGetSubscribersSubscriberIdRankingScoreUrl = (
  subscriberId: string
) => {
  return `http://localhost:3333/subscribers/${subscriberId}/ranking/score`
}

export const getSubscribersSubscriberIdRankingScore = async (
  subscriberId: string,
  options?: RequestInit
): Promise<GetSubscribersSubscriberIdRankingScore200> => {
  const res = await fetch(
    getGetSubscribersSubscriberIdRankingScoreUrl(subscriberId),
    {
      ...options,
      method: 'GET',
    }
  )

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSubscribersSubscriberIdRankingScore200 = body
    ? JSON.parse(body)
    : {}

  return data
}

/**
 * Get subscriber ranking position by subscriberId
 * @summary Get subscriber ranking position
 */
export const getGetSubscribersSubscriberIdRankingPositionUrl = (
  subscriberId: string
) => {
  return `http://localhost:3333/subscribers/${subscriberId}/ranking/position`
}

export const getSubscribersSubscriberIdRankingPosition = async (
  subscriberId: string,
  options?: RequestInit
): Promise<GetSubscribersSubscriberIdRankingPosition200> => {
  const res = await fetch(
    getGetSubscribersSubscriberIdRankingPositionUrl(subscriberId),
    {
      ...options,
      method: 'GET',
    }
  )

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSubscribersSubscriberIdRankingPosition200 = body
    ? JSON.parse(body)
    : {}

  return data
}

/**
 * Get top 3 from ranking
 * @summary Get top 3 from ranking
 */
export const getGetRankingUrl = () => {
  return `http://localhost:3333/ranking`
}

export const getRanking = async (
  options?: RequestInit
): Promise<GetRanking200> => {
  const res = await fetch(getGetRankingUrl(), {
    ...options,
    method: 'GET',
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetRanking200 = body ? JSON.parse(body) : {}

  return data
}
