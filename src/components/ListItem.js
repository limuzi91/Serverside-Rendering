// import React from "react";

// export default ({ name, owner, stargazers_count, html_url }) => {
//   return (
//     <li key={name} style={{ margin: 30 }}>
//       <ul>
//         <li>
//           <a href={html_url} target="_blank">
//             {name}
//           </a>
//         </li>
//         <li>@{owner.login}</li>
//         <li>{stargazers_count} stars</li>
//       </ul>
//     </li>
//   );
// };

import React, { Component } from 'react'

export default class ListItem extends Component {
    shouldComponentUpdate() {
    return false;
  }
  render() {
    const { name, owner, stargazers_count, html_url } = this.props
  return (
    <li key={name} style={{ margin: 30 }}>
      <ul>
        <li>
          <a href={html_url} target="_blank">
            {name}
          </a>
        </li>
        <li>@{owner.login}</li>
        <li>{stargazers_count} stars</li>
      </ul>
    </li>
  )
  }
}

