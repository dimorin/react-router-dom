import React, { useEffect } from 'react';

const HistorySample = ({history}) => {
    const goBack = () => {
        history.goBack();
    }
    const goHome = () => {
        history.push('/');
    }
    const replaceHome = () => {
        history.replace('/');
    }
    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실건가요?');
        return () => {
            unblock();
        }
    }, [history])
    return (
        <>
            <h1>히스토리 예제</h1>
            <div>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goHome}>홈으로</button>
                <button onClick={replaceHome}>홈으로 (replace)</button>
            </div>
        </>
        
    )
};

export default HistorySample;