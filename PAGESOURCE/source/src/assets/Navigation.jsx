import * as React from 'react';
import './Navigation.css';
import { IonIcon } from '@ionic/react';
import {
  home,
  calendarOutline,
  barChartOutline,
  atOutline,
  newspaperOutline
} from "ionicons/icons";
function Navbtns(props) {
  return (
    <li className="list active" style={props.bcolr}>
      <a href="#sec1">
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
        <Navbtns icon={home} bcplr={"--clr: #f44336;"} />
        <Navbtns icon={calendarOutline} bcplr={"--clr: #2196f3;"} />
        <Navbtns icon={barChartOutline} bcplr={"--clr: #ffa117;"} />
        <Navbtns icon={atOutline} bcplr={"--clr: #0f0;"} />
        <Navbtns icon={newspaperOutline} bcplr={"--clr: #610290;"} />
      </ul>
    </div>
  );
}
export default Navigations;