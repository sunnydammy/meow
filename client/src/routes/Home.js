import React from "react";
import axios from "axios";
import Book from "../components/Book";
import Page from "../components/Page";
import "./Home.css";

//카카오 검색 api key
//https://developers.kakao.com/docs/restapi/search#%EC%B1%85-%EA%B2%80%EC%83%89
const API_KEY = "2cdc40bcac4648a9f88fdc5f2767da55";
const SEARCH_COUNT = 10;

class Home extends React.Component {
  state = {
    isLoading: false,
    books: [],
    totalCount: 0
  };

  input = null;
  getBooks = async () => {
    this.setState({ isLoading: true });
    const { data } = await axios.get(
      "https://dapi.kakao.com/v3/search/book?target=title",
      {
        params: {
          // query string
          query: this.input.value
        },
        headers: {
          // 요청 헤더
          Authorization: `KakaoAK ${API_KEY}`
        }
      }
    );
    this.setState({
      isLoading: false,
      books: data.documents,
      totalCount: data.meta.total_count
    });
  };
  keyUpHandler = () => {
    if (window.event.keyCode === 13) {
      // 엔터키가 눌렸을 때 실행할 내용
      this.getBooks();
    }
  };
  render() {
    const { isLoading, books, totalCount } = this.state;
    return (
      <section className="container">
        <div className="container__search">
          <input
            className="container__search-input"
            placeholder="Find Book!"
            onKeyUp={this.keyUpHandler}
            ref={ref => {
              this.input = ref;
            }}
            value="해리포터"
          />
          <span className="container__search-click" onClick={this.getBooks}>
            <i class="fas fa-search"></i>
          </span>
        </div>
        <div className="container__result">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <ul className="books">
              {books.map((book, index) => (
                <Book
                  key={index}
                  id={index}
                  title={book.title}
                  author={book.authors}
                  thumbnail={book.thumbnail}
                  price={book.price}
                  contents={book.contents}
                  publisher={book.publisher}
                  datetime={new Date(book.datetime)}
                />
              ))}
            </ul>
          )}
        </div>
        <div className="container__page">
          <Page totalCount={totalCount} searchCount={SEARCH_COUNT} />
        </div>
      </section>
    );
  }
}

export default Home;
