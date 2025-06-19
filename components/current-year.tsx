'use client'
import { useEffect, useState } from 'react'

export default function CurrentYear() {
  const [year, setYear] = useState<string>('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return <>{year}</>
}
