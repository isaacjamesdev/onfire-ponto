import React from "react";
import { getListOfLogs } from "../utils";

function TableBody({ month }) {
  return getListOfLogs(month).map((log) => (
    <>
      <tbody>
        <tr className="border left">
          {log.map((row, idx) => (
            <td key={idx} className="border left max-width">
              {row}
            </td>
          ))}
          <td className="border left max-width"></td>
          <td className="border left max-width"></td>
          <td className="border left" colSpan={2}></td>
        </tr>
      </tbody>
    </>
  ));
}

export default TableBody;
