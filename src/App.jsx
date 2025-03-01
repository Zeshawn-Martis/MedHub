import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Login from "./login";
import Signup from "./signup";
import MedicinesPage from "./MedicinesPage";
import Wellness from "./Wellness";
import MedicalDevices from "./MedicalDevices";
import PersonalCare from "./PersonalCare";
import "./common/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<Routes>
			<Route path="/home" element={<Homepage />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="/medicines" element={<MedicinesPage />} />
			<Route path="/wellness" element={<Wellness />} />
			<Route path="/medical-devices" element={<MedicalDevices />} />
			<Route path="/personal-care" element={<PersonalCare />} />
		</Routes>
	</Router>
);
