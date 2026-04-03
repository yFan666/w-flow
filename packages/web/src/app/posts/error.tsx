'use client'
import { notFound } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
  // notFound()
  return (
    // <div>
    //   <h2>Something went wrong !</h2>
    //   <p>404 Not Found - 找不到页面</p>
    //   <Button onClick={() => unstable_retry()}>Retry</Button>
    // </div>

    notFound()
  )
}
