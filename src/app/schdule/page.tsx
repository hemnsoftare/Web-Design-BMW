import React from "react";
import "./style.css";
const Schdule = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Seminar Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th rowSpan={3} className="day-column">
              Day
            </th>
            <th colSpan={6}>Seminar Schedule</th>
          </tr>
          <tr>
            <th colSpan={3}>Morning Sessions</th>
            <th colSpan={3}>Evening Sessions</th>
          </tr>
          <tr>
            <th>Begin</th>
            <th>End</th>
            <th>Topic</th>
            <th>Begin</th>
            <th>End</th>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="day-column" rowSpan={2}>
              Monday
            </td>
            <td rowSpan={2}>8:00 AM</td>
            <td rowSpan={2}>11:00 AM</td>
            <td>Introduction to XML</td>
            <td>1:30 PM</td>
            <td>3:00 PM</td>
            <td>HTML Language</td>
          </tr>
          <tr>
            <td>Introduction to Java</td>
            <td>1:30 PM</td>
            <td>3:00 PM</td>
            <td>HTML Language</td>
          </tr>
          <tr>
            <td className="day-column" rowSpan={3}>
              Tuesday
            </td>
            <td>8:00 AM</td>
            <td>10:00 AM</td>
            <td rowSpan={2}>CSS Language</td>
            <td>3:30 PM</td>
            <td>5:00 PM</td>
            <td>Web Accessibility</td>
          </tr>
          <tr>
            <td>10:30 AM</td>
            <td>12:00 PM</td>
            <td rowSpan={2}>2:00 PM</td>
            <td rowSpan={2}>3:30 PM</td>
            <td rowSpan={2}>The DOM</td>
          </tr>
          <tr>
            <td>9:00 AM</td>
            <td>11:00 AM</td>
            <td>Web Design and Bootstrap</td>
          </tr>
          <tr>
            <td className="day-column"> Wednesday</td>
            <td>9:00 AM</td>
            <td>11:00 AM</td>
            <td>Introduction to ReactJS</td>
            <td>1:00 PM</td>
            <td>3:00 PM</td>
            <td>Introduction to Node.js</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schdule;
