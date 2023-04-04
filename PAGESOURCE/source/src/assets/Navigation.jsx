import * as React from 'react';
import './Navigation.css';
import { IonIcon } from '@ionic/react';
import {
  home,
  calendarOutline,
  bookOutline,
  atOutline,
  newspaperOutline
} from "ionicons/icons";

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

// setupIonicReact({
//   mode: "md",
// }); 

function Navbtns(props) {
  return (
        <li className="list active" style={props.style}>
          <a href={props.consec}>
            <span className="icon">
              <IonIcon icon={props.icon}></IonIcon>
            </span>
          </a>
        </li>
  );
}
function Navigations() {
  return (
    <div className="navigation">
      <div className="menuToggle"></div>
      <ul>
        <Navbtns
          icon={home}
          style={{ "--clr": "#f44336" }}
          className="home"
          consec="#sec1"
        />
        <Navbtns
          icon={calendarOutline}
          style={{ "--clr": "#2196f3" }}
          consec="#sec2"
        />
        <Navbtns
          icon={bookOutline}
          style={{ "--clr": "#ffa117" }}
          consec="#sec3"
        />
        <Navbtns icon={atOutline} style={{ "--clr": "#0f0" }} consec="#sec4"/>
        <Navbtns
          icon={newspaperOutline}
          style={{ "--clr": "#610290" }}
          consec="#sec5"
        />
      </ul>
    </div>
  );
}
export default Navigations;