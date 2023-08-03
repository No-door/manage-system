import React from "react";

export default function Candidate({ candidates }) {
  return (
    <table className="table my-0" id="dataTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Skills</th>
          <th>Level</th>
          <th className="text-end">FTE</th>
          <th className="text-end">English</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate) => (
          <tr key={candidate.id}>
            <td>
              <img
                className="rounded-circle me-2"
                width={30}
                height={30}
                src="/assets/img/avatars/avatar1.jpeg"
              />
              {candidate.name}
            </td>
            <td>{candidate.location}</td>
            <td>{candidate.skill.join(", ")}</td>
            <td>{candidate.level}</td>
            <td className="text-end">{candidate.FTE} %</td>
            <td className="text-end">{candidate.english}/5</td>
            <td className="text-center">
              <a href={`detail?ids=${candidate.id}`}>
                <i className="far fa-file-alt" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
