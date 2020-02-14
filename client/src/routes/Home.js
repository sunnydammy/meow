import React from "react";
import axios from "axios";
import Book from "../components/Book";
import "./Home.css";

const API_KEY = "2cdc40bcac4648a9f88fdc5f2767da55";

class Home extends React.Component{
    state = {
      isLoading: true,
      books: []
    };
    getBooks = async () => {
      const {
          data: { documents }
      } = await axios.get(
        "https://dapi.kakao.com/v3/search/book?target=title",{
            params: { // query string
                query: 'Harry'
            },
            headers: { // 요청 헤더
              'Authorization': `KakaoAK ${API_KEY}`
            }
        });
      this.setState({  isLoading: false, books: documents});
    };
    // componentDidMount() {
    //   this.getBooks();
    // };
    render(){
    const { isLoading, books } = this.state;
    return(
        <div className="search">
            <input id="input" placeholder="Find Book!" value="Harry"/>
            <button id="search" onClick={this.getBooks}>Search</button>
            <section className="container">
            {isLoading ? (
                <div className="loader">
                <span className="loader__text">Loading...</span>
                </div>
            ) : (
                <ul className="books">
                {books.map(book => (
                <Book
                    item={book.title}
                />
                ))}
                </ul>
            )}
            </section>
        </div>
    )};
}

export default Home;