import defaultAxios from "axios";
import { useEffect, useState } from "react";

function useAxios(opts, axiosInstance = defaultAxios) {
    /* axios instance를 얻지 못하면 import한 곳에서 defaultAxios를 받아오겠다는 뜻 */
    const [state, setState] = useState({ loading: true, data: null, error: null });

    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        setTrigger(Date.now()); /* Date.now()는 new Date()에서 파생된 것으로 약간의 랜덤숫자로 출력해줌 */
    };

    useEffect(() => {
        axiosInstance(opts)
            .then((data) => {
                /* 데이터를 받으면 then해줄거임 */
                setState({
                    ...state,
                    loading: false,
                    data,
                });
            })
            .catch((error) => {
                /* 에러가 발생하면 잡아줄거임 */
                setState({ ...state, loading: false, error });
            });
    }, [trigger]);
    if (!opts.url) {
        return;
    }
    return { ...state, refetch };
}

export default useAxios;
