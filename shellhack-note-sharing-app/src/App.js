import LandingPage from "./pages/LandingPage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

async function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBopCKyfExm7CsNDVAz9e9jVuDOxKolBdI",
    authDomain: "shellhack-note-sharing-app.firebaseapp.com",
    projectId: "shellhack-note-sharing-app",
    storageBucket: "shellhack-note-sharing-app.appspot.com",
    messagingSenderId: "622805645229",
    appId: "1:622805645229:web:ac677a05c3d5641d545324",
    measurementId: "G-7HBZFB6TKP",
  };

  const app = await initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);

  return <LandingPage />;
}

export default App;
