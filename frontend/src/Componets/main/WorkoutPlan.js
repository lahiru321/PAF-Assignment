import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import FileBase64 from "react-file-base64";
import Sidebar from "./Sidebar";


function WorkoutPostCreate() {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");


    const myDiv = document.querySelector('#myDiv');

    if (myDiv !== null) {
        myDiv.style.display = "block";
    }


    let createdDate = Date.now().toString();



    return (
        <>

            <Sidebar />
            <div id="main">
                <div className="wrapper">
                    <form onSubmit= "sendData">
                        <div id="wizard">
                            <section>
                                <h1>New Workout Plan</h1>

                                <div class="form-group">
                                    <div class="row mt-5">
                                        <div class="col-5">
                                            <label for="code">Workout Plan<span style={{ color: "red" }}><sup>*</sup></span></label>
                                        </div>
                                        <div class="col-6">
                                            <FileBase64
                                                type="file"
                                                class="form-control"
                                                id="nicFront"
                                                required
                                                onDone={({ base64 }) => setImage(base64)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <div className="row mt-5">
                                        <div class="col-5">
                                            <label for="name">Add Description for your Workout plan
                                                <span style={{ color: "red" }}><sup>*</sup></span></label>
                                        </div>
                                        <div class="col-6">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="name"
                                                required
                                                placeholder=""
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row mt-5">
                                        <div class="col-5">
                                            <label for="code">Routines<span style={{ color: "red" }}><sup>*</sup></span></label>
                                        </div>

                                        <div class="col-6">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="phone1"
                                                required
                                                onChange={(e) => {
                                                    setLocation(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                

                                <div class="form-group">
                                    <div class="row mt-5">
                                        <div class="col-5">
                                            <label for="price">Exercises<span style={{ color: "red" }}><sup>*</sup></span></label>
                                        </div>
                                        <div class="col-6">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="nic"
                                                required
                                                onChange={(e) => {
                                                    setCaption(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="form-group">
                                    <div class="row mt-5">
                                        <div class="col-5">
                                            <label for="price">Sets<span style={{ color: "red" }}><sup>*</sup></span></label>
                                        </div>
                                        <div class="col-6">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="nic"
                                                required
                                                onChange={(e) => {
                                                    setCaption(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row mt-5">
                                        <div class="col-5">
                                            <label for="price">Repetitions<span style={{ color: "red" }}><sup>*</sup></span></label>
                                        </div>
                                        <div class="col-6">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="nic"
                                                required
                                                onChange={(e) => {
                                                    setCaption(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-5">
                                    <div className="col-2">
                                        <Link to={`/myPosts`}><button type="submit" class="btn btn-success">
                                            Back
                                        </button></Link>
                                    </div>
                                    <div className="col-3">
                                        <button type="submit" class="btn btn-primary">
                                            Create Request
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button type="reset" class="btn btn-danger">
                                            Clear Form
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default WorkoutPostCreate;
