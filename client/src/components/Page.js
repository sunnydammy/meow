import React from "react";
import "./Page.css";

// function Page({ totalCount, searchCount }) {
//   const page = parseInt(totalCount / searchCount);
//   let arrPage = [];
//   for (let i = 1; i <= page; i++) {
//     const href = `/page/${i}`;
//     arrPage.push(<a href={href}>{i}</a>);
//   }

//   return (
//     <div className="container__page">
//       <button>
//         <i class="fas fa-angle-left"></i>
//       </button>
//       {arrPage}
//       <button>
//         <i class="fas fa-angle-right"></i>
//       </button>
//     </div>
//   );
// }
class Page extends React.Component {
  state = {
    totalCount: this.props.totalCount,
    searchCount: this.props.searchCount,
    currentPage: this.props.currentPage
  };
  movePrev() {}
  render() {
    const page = parseInt(this.state.totalCount / this.state.searchCount);
    let arrPage = [];
    for (let i = 1; i <= page; i++) {
      if (arrPage.length < 10) {
        const href = `/page/${i}`;
        arrPage.push(
          <a key={i} href={href}>
            {i}
          </a>
        );
      }
    }
    return (
      <div className="container__page">
        <button onClick="movePrev">
          <i className="fas fa-angle-left"></i>
        </button>
        {arrPage}
        <button>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    );
  }
}

export default Page;
