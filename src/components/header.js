export default function Headers(){
    return(
        <div className="grid grid-cols-12 gap-3 bg-white">
            <div className="col-span-5">
                 <div className="grid grid-cols-5 gap-5">
                    <div className="col-span-2">
                        <img className="h-9 mb-1" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/2560px-Stack_Overflow_logo.svg.png"/>
                    </div>
                    <div className="col-span-3 gap-3 flex align-center pt-1">
                        {['about', 'Products', 'For Teams'].map((item, index)=> {
                            return(
                                <button className="px-4 capitalize rounded-2xl py-0 text-sm hover:bg-gray-200">{item}</button>
                            )
                        })
                        }
                    </div>
                 </div>
            </div>
            <div className="col-span-5 pr-2 pt-1">
                <input className="border border-gray-300 text-dark-600 px-5 py-1 rounded-md w-full" placeholde="Search questions and answers here...."/>        
            </div>
            <div className="col-span-2 pt-1">
                 <div className="gap-2 flex">
                     <button className="py-1 border border-blue-300 text-blue-500 rounded-5 text-sm  px-3 bg-gray-50">Log in</button>
                     <button className="py-1 px-3 text-white rounded-5 text-sm bg-blue-500">Sign up</button>
                 </div>           
            </div>
        </div>
    )
}