import "./App.css";
import BlogItem from "./components/BlogItem";

function App() {
  return (
    <>
      <h1>Andrew Jones Blog</h1>

      <p>
        Hi, my name is Andrew Jones and I am the head of web development in our
        company. Idecided to start this blog in order to share the most
        interesting remarks and ideas that I come across during my day-to-day
        wok. will share all sorts of interesting information related to
        activities of our company and to web development in general.
      </p>

      <div>
        <form>
          <label>Blog post name:</label>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>

      <ul>
        <li>
          <BlogItem
            imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.n-8icXo1kVx0nKdRiX86WwHaGX%26pid%3DApi&f=1&ipt=a85fc3cc159dd8e6d605dac118a1ae7f07beb08eddac21b34a8d7d492b655265&ipo=images"
            title="Remote Management"
            summary="In this blog post, I will share some remarks regarding commnication between our former New York Office and the newly setup London Office."
            author="Andrew Jones"
            createdAt="3/23/2011 3:12:26 PM"
            nComments="2"
          />
        </li>
        <li>
          <BlogItem
            imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.se.com%2Fwp-content%2Fuploads%2F2020%2F04%2Fimage-for-blog-from-Arvin.png&f=1&nofb=1&ipt=96aab386e88acab99c1f0c2a75ce2bbe7df48b0d588259c7cfb5658c3bb997ea&ipo=images"
            title="Expanding to Europe"
            summary="In this blog post, I will try to share some of my impressions of the recent expansion of our operations to the Old Continent."
            author="Andrew Jones"
            createdAt="3/21/2011 5:57:47 PM"
            nComments="2"
          />
        </li>
      </ul>
    </>
  );
}

export default App;
