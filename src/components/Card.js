import React from 'react'

const Card = ({user}) => {

    const isSingleNumber = (num) =>{
        return num > 9 ? num : "0"+ num; 
    }

    const convertDate = ( str ) =>{
        const date = new Date(str)
        return `${isSingleNumber(date.getDate())}-${isSingleNumber(date.getMonth())}-${date.getFullYear()}`
    } 

    return (
        <div className="rounded-md p-4 md:p-10 flex flex-col items-center bg-slate-200 shadow-md">
            <img className="h-[7rem] w-[7rem] rounded-full mb-4 ring-2 ring-purple-600 p-0.5" src={user.img} alt="user_profile_image" />
            <h2 className="font-semibold text-slate-700 text-xl leading-7 tracking-wide">{user.name}</h2>
            <p className="font-normal text-slate-600">@{user.login}</p>
            <p className="max-w-[18rem] tracking-tight mt-4 text-slate-500 leading-5 md:max-w-[20rem] text-center">{user.bio}</p>
            <div className="flex space-x-4 md:space-x-8 my-8">
                <div className="text-center">
                    <span className="font-bold text-purple-600 text-lg">{user.publicRepos}</span>
                    <p className="text-slate-500 font-medium tracking-wide">Public Repos</p>
                </div>
                <div className="text-center ">
                    <span className="font-bold text-purple-600 text-lg">{user.publicGits}</span>
                    <p className="text-slate-500 font-medium tracking-wide">Public Gits</p>
                </div>
                <div className="text-center">
                    <span className="font-bold text-purple-600 text-lg">{convertDate(user.createdAt)}</span>
                    <p className="text-slate-500 font-medium tracking-wide">Created Date</p>
                </div>
            </div>
        </div>
    )
}

export default Card;