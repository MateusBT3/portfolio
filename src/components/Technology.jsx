function Technology({ img, name }) {
    return (
        <div className="flex flex-col items-center lg:w-1/3 md:w-1/2 w-full p-4">
        <div className="bgTec bg-blend-multiply hover:shadow-2xl bg-primary-700 hover:bg-primary-300 hover:bg-opacity-50 hover:cursor-pointer hover:ease-in-out duration-200 rounded-2xl w-full flex flex-col items-center p-4">
            <i className={img + " text-9xl"}></i>
            <h2 className="text-2xl">{name}</h2>
        </div>
        </div>
    )
}

export default Technology;