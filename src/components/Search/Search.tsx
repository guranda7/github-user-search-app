
import { useState, useEffect } from 'react'

interface UserType  {
    name: string; 
    login: string; 
    bio: string | null;
    followers: number;
    following: number;
    location: string | null;
    created_at: number;
    avatar_url: string;
    public_repos: number;

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
        <div className="relative"> 
            <input className="w-292 h-[6.9rem] bg-white rounded-2xl px-4 text-center text-3xl" type="text" value={search} onChange={(event) => {
            setSearch(event.target.value)
        }} />
        <img src="/assets/icon-search.svg" alt="" className="absolute top-7 left-3" />
        <button className="absolute right-3 top-3 w-[10.6rem] h-20 bg-[#0079FF] text-white rounded-xl text-2xl font-mono"onClick={getUser}>Search</button>
        </div>
        
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <div>
                    <span>{user?.name}</span>
                    <p>joined {user?.created_at}</p>
                </div>
                
                   {!user?.bio ? <span>this profile has no bio</span> : user?.bio } 
                
            </div>
            <div>
                <div>
                    <span> Repositories: </span>
                    <span>{user?.public_repos}</span>
                </div>
                <div>
                    <span>followers: </span>
                    {user?.followers === 0 ? <span>0</span> : user?.followers }
                </div>
                <div>
                    <span>following: </span>
                    {user?.following === 0 ?<span>0</span> : user?.followers}
                </div>
            </div>
        </div>

        <h1>user name : {user?.name}</h1>
        <h2>Login : {user?.login}</h2>
        <p>location: {user?.location}</p>

        <h1 className="text-4xl text-red-500 font-bold">Tailwind is working!</h1>

    </div>
  )
}
