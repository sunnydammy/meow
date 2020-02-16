import React from 'react';
import axios from "axios";
import qs from 'query-string';

const KAKAO_REST_API_KEY = "888620008cc42e2568aad6a148455d64";
const KAKAO_AUTH_DOMAIN = "https://kauth.kakao.com";
const KAKAO_REDIRECT_URL = "http://localhost:5000/kakao_auth/get_auth_code";
const KAKAO_URL_TO_GET_CODE = `${KAKAO_AUTH_DOMAIN}/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;


class KakaoAuth extends React.Component {
    state = {
        isLoading: false,
        isRspError: false,
        auth_code: '',

        response:''

    };

    constructor(props) {
        super(props);

        let params = qs.parse(this.props.location.search);

        console.log(params);

        

        if (params) {
            if (params.code) {
                this.state.auth_code = params.code;

                console.log("param.code is not null");
                console.log("code = " + this.state.auth_code);
            }
            else if (params.error) {
                this.state.isRspError = true;
                console.log("param.error is not null");
            }
            else {
                console.log("else");
            }
        }

        // params is null then show the login box
        // param is not null then check query string
        // query string key is code value, then success
        // error value, then failure
    }

    componentDidMount() {
        // this.callApi()
        //     .then(res => console.log("responsed", res))
        //     .catch(err => console.log("error occured"));

        
    }

    callApi = async () => {
        const response = await fetch('/kakao_auth/get_auth_code?code=test');
        const body = await response.json();

        console.log(body);

        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    reqAuthCode = async () => {
        this.setState({isLoading : true});

        const aa = await axios.get(
            "https://kauth.kakao.com/oauth/authorize",{
                params: { // query string
                    client_id: {KAKAO_REST_API_KEY},
                    redirect_uri: {KAKAO_REDIRECT_URL},
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
            <a href={`${KAKAO_URL_TO_GET_CODE}`}>
                <img src="../img/kakaolink_btn_small.png" alt="카카오 연결 링크"></img>
            </a>
        )
        } </div>
    }
}

export default KakaoAuth;