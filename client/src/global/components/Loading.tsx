const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 border p-10 shadow-md bg-white rounded-md">
            <i className="fa-solid fa-spinner fa-spin text-2xl text-[#153448]"></i>
            <p className="font-semibold text-[#153448]">Loading...</p>
        </div>
    )
}

export default Loading