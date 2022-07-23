import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div class="site-wrap cfix">
        <div class="site-container">
          <div class="site-content e2e-site-content">
            <Header />
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
