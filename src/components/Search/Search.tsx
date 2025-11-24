
import { useState, useEffect } from 'react'

interface UserType  {
    name: string; 
    login: string; 
    bio: string | null;
    folowers: number;
    following: number;
    location: string | null;
    created_at: number;
    avatar_url: string;
}

export default function Search() {
    const [user, setUser] = useState<UserType | undefined>()
    const [search, setSearch] = useState<string>("")
     useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        try{
            const response = await fetch(`https://api.github.com/users/${search}`);
          const data = await response.json()
        console.log(data)
        console.log(user)
         setUser(data)
        } catch(error) {
            console.log(error)
        }

       
    }
  return (
    <div>
        <input type="text" value={search} onChange={(event) => {
            setSearch(event.target.value)
        }} />
        <button onClick={getUser}>Search</button>

        <h1>user name : {user?.name}</h1>
        <h2>Login : {user?.login}</h2>
        <p>location: {user?.location}</p>

        <h1 className="text-4xl text-red-500 font-bold">Tailwind is working!</h1>

    </div>
  )
}
