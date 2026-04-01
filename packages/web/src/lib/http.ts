type ApiResponse<T> = {
  code: number
  message: string
  data: T
  timestamp: string
  requestId: string
}

export async function httpGet<T>(path: string): Promise<T> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${base}${path}`, { cache: 'no-store' })
  const json = (await res.json()) as ApiResponse<T>
  if (!res.ok || json.code !== 0) {
    throw new Error(json.message || 'Request failed')
  }
  return json.data
}
