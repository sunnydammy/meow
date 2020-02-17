import React from "react";

const CLIENT_KEY = "_W7oPXXvURjRS2BjfmaN";
const CLIENT_SECRET_KEY = "qjl3KcVLMj";
const NAVER_URL_TO_GET_CODE = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_KEY}&redirect_url=http%3A%2F%2F127.0.0.1%3A3000&state=1234`;

class NaverAuth extends React.Component{ 
    // login = async () => {
    //     const rsp  = await axios.get(`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_KEY}&redirect_url=http%3A%2F%2F127.0.0.1%3A3000&state=1234`);
    // }
    // componentDidMount(){
    //     this.login();
    // }
    render(){
    return(
        <div>        
            <a href={NAVER_URL_TO_GET_CODE}>
                <img src="../img/naverlink_btn_small.png" alt="Naver 연결 링크"></img>
            </a>
        </div>
    );
}
}

export default NaverAuth;