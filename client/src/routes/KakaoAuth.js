import React from 'react';
import axios from "axios";
import qs from 'query-string';

const KAKAO_REST_API_KEY = "888620008cc42e2568aad6a148455d64";
const THIS_KAKAO_AUTH_URL = "http://192.168.0.8:3000/#/kakao_auth";

class KakaoAuth extends React.Component {
    state = {
        isLoading: false,
        code: []
    };

    constructor(props) {
        super(props);

        let params = qs.parse(this.props.location.search);

        console.log(params);
    }

    reqAuthCode = async () => {
        this.setState({isLoading : true});

        const aa = await axios.get(
            "https://kauth.kakao.com/oauth/authorize",{
                params: { // query string
                    client_id: {KAKAO_REST_API_KEY},
                    redirect_uri: {THIS_KAKAO_AUTH_URL},
                    response_type: "code"
                }
                // headers: { // 요청 헤더
                //     'Authorization': `KakaoAK ${API_KEY}`
                //   }
                // headers: {
                //     "Access-Control-Allow-Origin": "*",
                //     "Access-Control-Allow-Methods": "POST, GET",
                //     "Access-Control-Max-Age": "3600",
                //     "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                //    // 'access-control-allow-origin': 'https://kauth.kakao.com/oauth'
                // }
                // app.options('/write', (req, res) => {
                //     res.header('Access-Control-Allow-Origin', '*');
                //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                //     res.header('Access-Control-Allow-Headers', 
                //     'Content-Type, Authorization, Content-Length, X-Requested-With');
                //     res.send();
                // });
            });
        console.log(aa);
        this.setState({  isLoading: false});
    };

    render() {
        const { isLoading } = this.state;
        return <div>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                // <div><span onClick={this.reqAuthCode}>click here</span></div>
                <a href="https://kauth.kakao.com/oauth/authorize?client_id=888620008cc42e2568aad6a148455d64&redirect_uri=http://localhost:3000/kakao_auth&response_type=code">
            kakao login
        </a>
            )} </div>
    }
}

export default KakaoAuth;