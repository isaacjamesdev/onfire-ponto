import React from "react";
import { getListOfLogs } from "../utils";

function TableBody({ month }) {
  return getListOfLogs(month).map((log) => (
    <>
      <tbody>
        <tr className="border center-text">
          {log.map((row, idx) => (
            <td key={idx} className="border center-text max-width">
              {row}
            </td>
          ))}
          <td className="border center-text max-width"></td>
          <td className="border center-text max-width"></td>
          <td className="border center-text" colSpan={2}></td>
        </tr>
      </tbody>
    </>
  ));
}

export default TableBody;
