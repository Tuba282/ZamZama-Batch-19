import { useContext } from "react"
import { UserData } from "../../Context/context"


const About = () => {
    const user = useContext(UserData)




    return (
        <>
            <h1>About</h1>
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


export default About