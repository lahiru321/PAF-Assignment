import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

            <header id="header">
                <div class="d-flex flex-column">

                    <div class="profile">
                        <img src="" alt="" class="img-fluid rounded-circle" />
                        <h1 class="text-light"><a href="index.html">Cardio Connect</a></h1>
                        <div class="social-links mt-3 text-center">
                            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" class="nav-menu navbar">
                        <ul>
                            <li><Link to="/" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></Link></li>
                            <li><a href="#hero" class="nav-link scrollto "><i class="bx bx-user"></i> <span>Edit My Profile</span></a></li>
                            <li><Link to="/myPosts" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>My Posts</span></Link></li>
                            <li><a href="#hero" class="nav-link scrollto "><i class="bx bx-book-content"></i> <span>Workout Status</span></a></li>
                            <li><a href="/createWorkoutPost" class="nav-link scrollto "><i class="bx bx-book-content"></i> <span>Workout Plan</span></a></li>
                            <li><a href="/createMealPost" class="nav-link scrollto "><i class="bx bx-book-content"></i> <span>Meal Plan</span></a></li>
                        
                        </ul>   
                    </nav>
                </div>
            </header>



            <footer id="footer">
                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong><span>PAF group - 185</span></strong>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Sidebar;