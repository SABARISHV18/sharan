// import { useEffect } from "react"
// import { useState } from "react"
// import Newsitem from "./Newsitem"


// const Newsboard = ({category}) => {
//     const  [articles,setArticles] = useState([])

//     useEffect(()=>{
//         let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//         fetch(url).then(Response => Response.json()).then(data => setArticles(data.articles))
//     },[category])
//   return (
//     <div>
//         <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//         {articles?.map((news,index)=>{
//             return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
//         })}
//     </div>
//   )
// }
// export default Newsboard




import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url, {
          headers: {
            'Upgrade-Insecure-Requests': '1',
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {articles?.map((news, index) => (
        <Newsitem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default Newsboard;
