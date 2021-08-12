import { registerRootComponent } from "expo";
import App from "./src/App";

registerRootComponent(App); // register the App screen as the ROOT component, which means this component is essentially "home base", which means this is where React Native configures this as the source of all the truth
