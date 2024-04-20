import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Componets/main/Sidebar";
import LandingPage from "./Componets/main/LandingPage";
import MyPosts from "./Componets/main/MyPosts";
import PostCreate from "./Componets/main/PostCreate";
import WorkoutPostCreate from "./Componets/main/WorkoutPlan";
import MealPostCreate from "./Componets/main/MealPlan";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/myPosts" element={<MyPosts/>} />
        <Route path="/createPost" element={<PostCreate/>} />
        <Route path="/createWorkoutPost" element={<WorkoutPostCreate/>} />
        <Route path="/createMealPost" element={<MealPostCreate/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;