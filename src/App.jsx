import "./App.css";
// import IntroPage from './pages/introPage'

function App() {
  return (
    <>
      {/* <IntroPage /> */}
      {/* listview start */}
      {/* profile header start */}
      <section>
        <header>
          <img src="../src/assets/animal.png" alt="" />

          <select name="Location" id="">
            <option value="">-- choose your location --</option>
            <option value="VJ">Vejle</option>
            <option value="AA">Aarhus</option>
            <option value="KB">København</option>
            <option value="KG">Køge</option>
            <option value="SR">Solrød</option>
          </select>
          <button>notifikations</button>
        </header>
      </section>
      {/* profile header end */}
      {/* filter start */}
      <section>
        <button>cat</button>
        <button>dog</button>
        <button>bird</button>
      </section>
      {/* filter end */}
      {/* pets start */}
      <section>
        <article>
          <img src="#" alt="" />
          <h1>labrador</h1>
          <p>lokation</p>
          <p>
            about Lorem ipsum dolor sit. Consequuntur eius provident tempore!
            Optio facere sapiente et?
          </p>
          <button>heart</button>
        </article>
      </section>
      {/* pets end */}
      {/* footer start */}
      <footer>
        <button>home</button>
        <button>message</button>
        <button>hearts</button>
        <button>profile</button>
      </footer>
      {/* footer end */}
      {/* listview end */}
      {/* details start */}
      <main>
        <img src="" alt="" />
        <section>
          <p><span>type</span>Greyhound</p>
          <p><span>gender</span>male</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.
          In dolores nemo labore debitis quas doloribus.
          Reiciendis, consequatur ex odit architecto voluptatum reprehenderit!
          Rerum veniam molestias aliquam dolorum ipsam rem.</p>
          <div>
            <a href="otherdog"><img src="dog" alt="" /></a>
            <a href="otherdog"><img src="dog" alt="" /></a>
            <a href="otherdog"><img src="dog" alt="" /></a>
          </div>
          <button>BACK</button>
        </section>
      </main>
    </>
  );
}

export default App;
