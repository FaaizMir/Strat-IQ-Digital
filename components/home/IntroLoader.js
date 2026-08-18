// Static preloader markup ported from the Webflow source. `.intro` is
// `display: none` by default in globals.css (Webflow's IX2 runtime used to
// toggle it in/out on load) -- kept here for content fidelity only, it has
// no visual effect since we don't reimplement the loading-screen animation.
export default function IntroLoader() {
  return (
    <div className="intro">
      <div className="logo-loader-overflow">
        <div className="logo-load">
          <p className="top-text loader scale">Start IQ Digital</p>
          <div className="loader-text-overflow">
            <p className="top-text loader animated _01">Strategy</p>
            <p className="top-text loader animated _02">Intelligence</p>
            <p className="top-text loader animated _03">Digital</p>
            <p className="top-text loader animated _04">Data Driven</p>
          </div>
        </div>
      </div>
    </div>
  );
}
