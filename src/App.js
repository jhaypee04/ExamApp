import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <nav>
        <div className="logo">Exam App</div>
        <div className="left">
          <div className="timer">
            Time Left
            <span className="timer-counter">01:00</span>
          </div>
          <div className="finish-test blue">Finish Test</div>
        </div>
      </nav>
      <section>
        <header>Questions</header>
        <div className="questions-numbers-container">
          <span className="box blue">1</span>
          <span className="box blue">2</span>
          <span className="box blue">3</span>
          <span className="box blue">4</span>
          <span className="box blue">5</span>
          <span className="box blue">6</span>
          <span className="box blue">7</span>
          <span className="box no-color">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
          <span className="box blue">1</span>
        </div>
        <div className="selection-type-container">
          <h6 className="selection-type">Selection Type</h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="box blue"></span>
              <span className="little-text">Attempted</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="box no-color"></span>
              <span className="little-text">Not Attempted</span>
            </div>
          </div>
        </div>
      </section>
      <main>
        <header>Question 1</header>
        <article>
          <div className="question">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et soluta
            quidem perferendis blanditiis laborum sint placeat dolor, veniam
            beatae minima dignissimos assumenda quas! Nam obcaecati quidem,
            rerum ipsam minus explicabo?
          </div>
          <div className="option no-color">
            <span className="list">A.</span>
            <span className="text">Lorem ipsum dolor sit amet cons</span>
          </div>
          <div className="option blue">
            <span className="list">B.</span>
            <span className="text">Lorem ipsum dolor sit amet cons</span>
          </div>
          <div className="option no-color">
            <span className="list">C.</span>
            <span className="text">Lorem ipsum dolor sit amet cons</span>
          </div>
          <div className="option no-color">
            <span className="list">D.</span>
            <span classNameName="text">Lorem ipsum dolor sit amet cons</span>
          </div>
          <div className="next blue">Next</div>
        </article>
      </main>
    </div>
  );
}
