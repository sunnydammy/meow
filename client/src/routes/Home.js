import React from "react";
import axios from "axios";
import Book from "../components/Book";
import "./Home.css";

//카카오 검색 api key
//https://developers.kakao.com/docs/restapi/search#%EC%B1%85-%EA%B2%80%EC%83%89
const API_KEY = "2cdc40bcac4648a9f88fdc5f2767da55";

class Home extends React.Component{
    state = {
      isLoading: false,
      books: []
    };
    
    input = null;
    getBooks = async () => {
        this.setState({isLoading : true});
      const {
          data: { documents }
      } = await axios.get(
        "https://dapi.kakao.com/v3/search/book?target=title",{
            params: { // query string
                query: this.input.value
            },
            headers: { // 요청 헤더
              'Authorization': `KakaoAK ${API_KEY}`
            }
        });
      this.setState({  isLoading: false, books: documents});
    };
    keyUpHandler = () => {
        if (window.event.keyCode === 13) {
            // 엔터키가 눌렸을 때 실행할 내용
            this.getBooks();
       }
    }
    render(){
    const { isLoading, books } = this.state;
    return(
        <div className="search">
            <input placeholder="Find Book!" onKeyUp={this.keyUpHandler} ref={ref => { this.input = ref }}/>
            <button onClick={this.getBooks}>Search</button>
            <section className="container">
            {isLoading ? (
                <div className="loader">
                <span className="loader__text">Loading...</span>
                </div>
            ) : (
                <ul className="books">
                {books.map(book => (
                <Book
                    key={book.isbn}
                    title={book.title}
                    author={book.authors}
                    thumbnail={book.thumbnail}
                    price={book.price}
                />
                ))}
                </ul>
            )}
            </section>
        </div>
    )};
}

export default Home;