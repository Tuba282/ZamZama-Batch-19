import { useContext } from "react"
import { UserData } from "../../Context/context"


const Home = () => {

    const user = useContext(UserData)
    console.log(user);

    return (
        <>
            <h1>Home</h1>
            {
                user?.map((user) => (
                    <div key={user.id}>
                        <p>Name : {user?.name}</p>
                        <p>ID : {user?.id}</p>
                    </div>
                ))
            }

        </>
    )
}


export default Home