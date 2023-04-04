import { useState } from 'react'
import './App.css'
// import { setupIonicReact, IonApp, IonContent } from "@ionic/react";
// import "@ionic/react/css/core.css";
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";
import Progress from './assets/Progress'
import Navigations from './assets/Navigation';
import Banner from './assets/Banner';
// setupIonicReact({
//   mode: "md",
// });

function App()
{
    return (
      <div className="App">
        <section className="mainsec">
          <Progress />
          <Navigations />
          <Banner />
        </section>
      </div>
    );
}

export default App;