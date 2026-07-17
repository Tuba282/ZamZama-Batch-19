const Card = () => {
    return (
        <>
            <div className="group w-[390px] h-[550px] rounded-xl  shadow-md shadow-black overflow-hidden">

                <div className="group-hover:h-[100%]  w-[100%] h-[70%]  p-3  transition-all duration-700 ease-in-out">
                    <img src="/AI-Girl.png" className="w-full h-full rounded-xl" alt="" />
                </div>
                <div className="group-hover:hidden w-[100%] h-[30%]  p-3 text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati officiis voluptas architecto vitae, odit corporis optio delectus odit corporis optio
                </div>
            </div>
        </>
    )
}

export default Card;