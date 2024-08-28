import { useState } from "react";


const EventComponentQQ = () => {


    //실습
    let [form, setForm] = useState({data: '', result: ''})

    let handleChange = (e) => {
        setForm({data: e.target.value, result : form.result });
    }

    let handleClick = () => {
        setForm({data : '', result: form.data });
    }

    return (
        <div>
            <h3>인풋데이터 핸들링(실습)</h3>
            <pre>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</pre>            
			<pre>힌트는? 아마도 state는 두개가 필요할듯? (객체로 관리해도 될듯?)</pre> 

            <input type="text" value={form.data} onChange={handleChange} />
            <button type="button" onClick={handleClick}>추가하기</button>
            <h3>결과</h3>
            <p>{form.result}</p>

        </div>
    )
}

export default EventComponentQQ;