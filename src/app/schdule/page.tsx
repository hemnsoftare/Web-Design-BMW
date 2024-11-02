import React from "react";

const page = () => {
  return (
    <div className="w-full px-[100px] pt-[100px] pb-[90px] text-center">
      <h2 className="mb-8 text-2xl font-semibold">Seminar Schedule</h2>
      <table className="min-w-full shadow-xl shadow-neutral-300 bg-gradient-to-b from-cyan-50 to-orange-100 border-collapse border border-neutral-800">
        <thead className="border-cyan-800  text-cyan-700 border-2">
          <tr className="border-cyan-800 border-2">
            <th rowSpan={3} className="border border-cyan-800 p-2">
              Day
            </th>
            <th colSpan={6} className=" border-cyan-800 border-2 p-2">
              Seminar Schedule
            </th>
          </tr>
          <tr className="border-cyan-800 border-2">
            <th colSpan={3} className="border-2 border-cyan-800 p-2">
              Morning Sessions
            </th>
            <th colSpan={3} className="border-2 border-cyan-800 p-2">
              Evening Sessions
            </th>
          </tr>
          <tr>
            <th className="border-2 border-cyan-800 p-2">Begin</th>
            <th className="border-2 border-cyan-800 p-2">End</th>
            <th className="border-2 border-cyan-800 p-2">Topic</th>
            <th className="border-2 border-cyan-800 p-2">Begin</th>
            <th className="border-2 border-cyan-800 p-2">End</th>
            <th className="border-2 border-cyan-800 p-2">Topic</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <td rowSpan={2} className="border border-cyan-800 p-2">
              Monday
            </td>
            <td rowSpan={2} className="border border-cyan-800 p-2">
              8:00 AM
            </td>
            <td rowSpan={2} className="border border-cyan-800 p-2">
              11:00 AM
            </td>
            <td className="border border-cyan-800 p-2">Introduction to XML</td>
            <td className="border border-cyan-800 p-2">1:30 PM</td>
            <td className="border border-cyan-800 p-2">3:00 PM</td>
            <td className="border border-cyan-800 p-2">HTML Language</td>
          </tr>
          <tr className="bg-cyborder-cyan-800">
            <td className="border border-cyan-800 p-2">Introduction to Java</td>
            <td className="border border-cyan-800 p-2">1:30 PM</td>
            <td className="border border-cyan-800 p-2">3:00 PM</td>
            <td className="border border-cyan-800 p-2">HTML Language</td>
          </tr>
          <tr className="">
            <td rowSpan={3} className="border border-cyan-800 p-2">
              Tuesday
            </td>
            <td className="border border-cyan-800 p-2">8:00 AM</td>
            <td className="border border-cyan-800 p-2">10:00 AM</td>
            <td rowSpan={2} className="border border-cyan-800 p-2">
              CSS Language
            </td>
            <td className="border border-cyan-800 p-2">3:30 PM</td>
            <td className="border border-cyan-800 p-2">5:00 PM</td>
            <td className="border border-cyan-800 p-2">Web Accessibility</td>
          </tr>
          <tr className="bg-cyborder-cyan-800">
            <td className="border border-cyan-800 p-2">10:30 AM</td>
            <td className="border border-cyan-800 p-2">12:00 PM</td>
            <td rowSpan={2} className="border border-cyan-800 p-2">
              2:00 PM
            </td>
            <td rowSpan={2} className="border border-cyan-800 p-2">
              3:30 PM
            </td>
            <td rowSpan={2} className="border border-cyan-800 p-2">
              The DOM
            </td>
          </tr>
          <tr className="">
            <td className="border border-cyan-800 p-2">9:00 AM</td>
            <td className="border border-cyan-800 p-2">11:00 AM</td>
            <td className="border border-cyan-800 p-2">
              Web Design and Bootstrap
            </td>
          </tr>
          <tr className="bg-cyborder-cyan-800">
            <td className="border border-cyan-800 p-2">Wednesday</td>
            <td className="border border-cyan-800 p-2">9:00 AM</td>
            <td className="border border-cyan-800 p-2">11:00 AM</td>
            <td className="border border-cyan-800 p-2">
              Introduction to ReactJS
            </td>
            <td className="border border-cyan-800 p-2">1:00 PM</td>
            <td className="border border-cyan-800 p-2">3:00 PM</td>
            <td className="border border-cyan-800 p-2">
              Introduction to Node.js
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
