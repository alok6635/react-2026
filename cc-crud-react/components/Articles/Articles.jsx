import { useSearchParams } from 'react-router-dom';


const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams, setSearchParams);
  const sortBy = searchParams.get("sortBy");
  const category = searchParams.get("category");
  const sortByViews = searchParams.get('sortByViews');

  const handleSortBy = () => {
    setSearchParams({
      sortBy: 'true',
      category: 'electronics'
    })
  }


  const dummyArticles = [
    { id: 1, title: "laptop Item", view: 120, category: "Technology" },
    { id: 2, title: "Smartphone Item", view: 85, category: "Media" },
    { id: 3, title: "Radio Item", view: 200, category: "Entertainment" },
    { id: 4, title: "Software Item", view: 500, category: "React" }
  ];
  let filterArticles = dummyArticles;


 
  return (
    <div>
      <h2> Articles
        <p>SortBy: {sortBy ?? sortByViews} Category :{category}</p>
      </h2>
      <button onClick={handleSortBy}>Sory By Views</button>
      <ul>
        {
          filterArticles.map((item) => (
            <li key={item.id}>{item.title}- {item.view} Views ({item.category})</li>
          ))
        }
      </ul>
    </div>
  )
}
export default Articles;