// context/UserContext.jsx
import { createContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getSession = async () => {
      setLoading(true)
      const { data: { session }, error } = await supabase.auth.getSession()

      if (error) {
        setError(error)
        setUser(null)
      } else {
        setUser(session?.user ?? null)
      }

      setLoading(false)
    }

    getSession()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      setError(error)
    } else {
      setUser(null)
    }
  }

  return (
    <UserContext.Provider value={{ user, loading, error, signOut }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
