import React from 'react'
import '../pagesstyles/SurveyPage.css'

export const SurveyPage = () => {
    return (

        <section id="main">
            <header>
                <h1 id="title">freeCodeCamp Survey Form</h1>
                <p id="description">Thank you for taking the time to help us improve</p>
            </header>
            <div id="formcontainer">
                <form id="survey-form">
                    <br />
                    <label id="name-label">Name</label>
                    <input type="text" id="name" placeholder="Enter your name here" required></input>
                    <label id="email-label">Email</label>
                    <input type="email" id="email" placeholder="Enter your email here" required></input>
                    <label id="number-label">Age (optional)</label>
                    <input type="number" min="0" max="110" id="number" placeholder="Enter your age here"></input>
                    <label id="dropdown">Which option best describes your current role?</label>
                    <select name="crole" id="crole">
                        <option value="Student">Student</option>
                        <option value="Full Time Job">Full Time Job</option>
                        <option value="Full Time Student">Full Time Student</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />
                    <container>
                        <label>Would you recommend freeCodeCamp to a friend?</label><br />
                        <label><input type='radio' name="recommendable" checked="checked" value="Definitely" />Definitely</label>
                        <label><input type='radio' name="recommendable" value="Maybe" />Maybe</label>
                        <label><input type='radio' name="recommendable" value="Not sure" />Not sure</label><br />
                    </ container>
                    <label id="dropdown">What is your favorite feature of freeCodeCamp?</ label><br />
                    <select name="ffeat" id="ffeat" required="true">
                        <option value="">Select an option</option>
                        <option value="Challenges">Challenges</option>
                        <option value="Projects">Projects</option>
                        <option value="Community">Community</option>
                        <option value="Open Source">Open Source</option>
                    </select><br />
                    <br />
                    <label>What would you like to see improved? (Check all that apply)</label><br />
                    <br />
                    <input type="checkbox" value="Front-End Projects">Front-End Projects</input><br />
                    <input type="checkbox" value="Back-End Projects">Back-End Projects</input><br />
                    <input type="checkbox" value="Data Visualization">Data Visualization</input><br />
                    <input type="checkbox" value="Challenges">Challenges</input><br />
                    <input type="checkbox" value="Open Source Community">Open Source Community</input><br />
                    <input type="checkbox" value="Gitter help rooms">Gitter help rooms</input><br />
                    <input type="checkbox" value="Videos">Videos</input><br />
                    <input type="checkbox" value="City Meetups">City Meetups</input><br />
                    <input type="checkbox" value="Wiki">Wiki</input><br />
                    <input type="checkbox" value="Forums">Forums</input><br />
                    <input type="checkbox" value="Additional Courses">Additional Courses</input><br />
                    <br />
                    <label>Any comments or suggestions?</label><br />
                    <br />
                    <textarea id="text-field" name="text-field" rows="10" cols="100"></textarea>
                    <br />
                    <button id="submit">Submit</button>
                </form>
            </div>
        </section>

    )
}

export default SurveyPage;

