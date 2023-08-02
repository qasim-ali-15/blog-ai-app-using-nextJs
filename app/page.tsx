import Tech from './(home)/Tech';
import Trending from './(home)/Trending'
import Travel from './(home)/Travel'
import Other from './(shared)/Other';
import Subscribe from './(shared)/Subscribe';
import Sidebar from './(shared)/Sidebar';
import { BrowserRouter } from 'react-router-dom'

export default function Home() {
  return (
  
  <main className='mx-5'>
    <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          {/* <Tech techPosts={techPosts} /> */}
          {/* <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} /> */}
          <div className="hidden md:block">
            <Subscribe/>
            {/* <Subscribe /> */}
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar/>
          {/* <Sidebar /> */}
        </div>
      </div>
  </main>
  );
}
