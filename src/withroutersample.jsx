import React from 'react';
import { withRouter } from 'react-router-dom';
const WithRouterSample = ({location, match, history}) => {
    return (
        <div>
            <h4>location - location.search로 현재 url의 쿼리 스트링을 가져올 수 있다.</h4>
            <textarea value={JSON.stringify(location, null, 2)} readOnly cols="60" rows="10" />
            <h4>match - match.params로 path에 설정한 파라미터값을 가져올 수 있다</h4>
            <textarea value={JSON.stringify(match, null, 2)} readOnly cols="60" rows="10" />
            <h4>history - stack에 현재까지 이동한 url경로들이 담겨있는 형태로 주소를 임의로 변경하거나 되돌아갈 수 있게 해준다.</h4>
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    )
};

export default withRouter(WithRouterSample);