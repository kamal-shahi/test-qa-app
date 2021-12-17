import moment from "moment";
import { useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import { getData } from "../apis/api";

export default function HomePage(){
    const [ datas, setItems ] = useState([]);
    const [ hasNext, setHasNext ] = useState(false);
    const [ page, setPage ] = useState(1);

    const changeVote = ({index, action})=> {
        let extData = datas;
        if(action === 'up'){
            extData[index].upvote = extData[index].upvote ? extData[index].upvote + 1 : 1;
            setItems([...extData])
        }else{
            extData[index].downvote = extData[index].downvote ? extData[index].downvote - 1 : 1
            setItems([...extData])
        }
    }

    useEffect(()=> {
        loadQuestions();
    }, [])

    const loadQuestions = async()=> {
        const { data } = await getData(page);
        if(data){
            const { has_more, items } = data;
            setItems([...datas, ...items]);
            setHasNext(has_more);
            setPage( page + 1 )
        }else{
            setItems(datas);
            setHasNext(false);
            setPage(page)
        }
    }    

    const loadMore = async()=> {
        loadQuestions();
    };

    return(
        <div className="">
            <h4 className="font-bold text-2xl mb-4 mt-2 border-b pb-3">All Questions</h4>
            <InfiniteScroll
                dataLength={datas.length} 
                next={loadMore}
                hasMore={hasNext}
                loader={hasNext && <h4 className="mt-10 bg-gray-300 font-weight-bold text-md p-5"> Loading... </h4>}
                refreshFunction={loadQuestions}
                pullDownToRefreshThreshold={50}
             >
                 <Question datas={datas} changeVote={changeVote}/>
            </InfiniteScroll>
        </div>
    )
}

const Question = ({datas, changeVote})=> {
    return(
        <div className="col-12 p-0">
            {datas.map((item, index)=> {
                return(
                   <div key={index} className="pb-3 border-b mt-2">
                        <h1 className="text-orange-500 font-weight-bold text-lg mb-3">{item.title}</h1>
                        <div className="flex gap-5">
                            <button className="text-gray-600">
                                <i className="fa text-sm fa-eye mr-2"/>
                                <label className="text-sm">{item.view_count}</label>
                            </button>
                            {item.owner && <button className="text-gray-600">
                                <i className="fa text-sm fa-user-secret mr-2"/>
                                <label className="text-sm">{item.owner.display_name}</label>
                            </button>}
                             <button className="text-gray-600">
                                <i className="fa text-sm fa-calendar mr-2"/>
                                <label className="text-sm">{moment(item.creation_date).format('YYYY, MMM, DD')}</label>
                            </button>
                            <div className="ml-auto gap-2">
                                <button onClick={()=> changeVote({action: 'up', index})} className="hover:bg-gray-200 px-3 border rounded-5">
                                    <i className="fa text-sm fa-arrow-up"/> <span>{item.upvote ? item.upvote : 0}</span>
                                </button>
                                <button onClick={()=> changeVote({action: 'down', index})} className="hover:bg-gray-200 px-3 border rounded-5 ml-2">
                                    <i className="fa text-sm fa-arrow-down"/> <span>{item.downvote ? item.downvote : 0}</span>
                                </button>
                            </div>
                        </div>
                   </div>
                )
            })

            }    
        </div>
    )
}