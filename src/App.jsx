import { useState } from "react";
import {
	IonApp,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonPage,
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonLabel,
	IonRouterOutlet,
	IonText,
	IonIcon,
} from "@ionic/react";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";

import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

const Login = () => {
	return (
		<IonPage>
			<IonContent>
				<IonText>
					<p style={{ padding: "0 3rem", fontSize: "14px" }}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
						delectus, alias aut omnis corporis, incidunt at fugiat fugit veniam
						temporibus odio ipsa illum expedita impedit ullam similique
						recusandae reprehenderit. Excepturi.
					</p>
				</IonText>
			</IonContent>
		</IonPage>
	);
};
const Settings = () => {
	return (
		<IonPage>
			<IonContent>
				<h1>Settings</h1>
			</IonContent>
		</IonPage>
	);
};

function App() {
	return (
		<IonApp>
			<IonReactRouter>
				<IonHeader>
					<IonToolbar color="secondary">
						<IonTitle>Makutano</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonTabs>
						<IonRouterOutlet>
							<Route path="/login" component={Login} exact />
							<Route path="/settings" component={Settings} exact />
							<Redirect to="/login" />
						</IonRouterOutlet>
						<IonTabBar slot="bottom">
							<IonTabButton tab="Login" href="/login">
								<IonIcon icon={calendar} />
								<IonLabel>Login</IonLabel>
							</IonTabButton>
							<IonTabButton tab="Settings" href="/settings">
								<IonIcon icon={personCircle} />
								<IonLabel>Settings</IonLabel>
							</IonTabButton>
						</IonTabBar>
					</IonTabs>
				</IonContent>
			</IonReactRouter>
		</IonApp>
	);
}

export default App;
