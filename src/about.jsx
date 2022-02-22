import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    console.log(location);
    const query = qs.parse(location.search, {
        ignoreQueryPrefix:true,
    })
    const detail = query.detail === 'true';
    return (
        <>
            <h1>ABOUT!</h1>
            <p>
                URL 끝에 '?detail=true'  이런 식으로 쿼리를 붙이면<br /> 
                이 쿼리에 대한 키와 밸류가 location.search에 들어온다.
            </p>
            <p>
                location.search에 들어오는 문자열 맨 앞에 물음표를 없애기 위해,<br />
                qs 라는 라이브러리를 이용한다.
            </p>
            {detail && <p style={{border:'1px solid black'}}>detail value is true!</p>}
        </>
    )
};

export default About;