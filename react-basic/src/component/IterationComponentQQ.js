import { useState } from "react";

/*
이미지를 가져오는 방법
1. 외부 서버에서 경로 참조 받기 (가장 일반적인 방법)
2. src밑으로 넣는경우 (img1 으로 하나의 이미지 참조가능)
import img1 from '../img/1.jpg'; 
3. public밑으로 넣는경우는 바로 참조할 수 있습니다.
*/

const IterationComponentQQ = () => {
  // 1. 데이터 - public 폴더 밑에 예시로 사용하기 위해 넣습니다.
  const arr = [
    { src: '/img/img1.png', title: '아이폰10', price: 1000 },
    { src: '/img/img2.png', title: '아이폰11', price: 2000 },
    { src: '/img/img3.png', title: '아이폰12', price: 3000 },
    { src: '/img/img4.png', title: '아이폰13', price: 4000 },
  ];

  let [list, setList] = useState(arr);
  let [img, setImg] = useState('');

  // 클릭 이벤트 핸들러
  const handleClick = (src) => {
    setImg(src); // 선택된 이미지 경로를 상태로 설정
  };

  // 2. 반복처리하여 리스트 생성
  const newList = list.map((value, index) => (
    <div key={index} style={{ display: 'inline-block', margin: '10px' }}>
      <img 
        src={value.src} 
        width="100" 
        onClick={() => handleClick(value.src)} 
        alt={value.title}
      />
      <p>제목: {value.title}</p>
      <p>가격: {value.price}원</p>
    </div>
  ));

  return (
    <div>
        <hr/>
        <h3>이미지 데이터 반복해보기</h3>

        {img && (
            <div>
            <h4>선택된 이미지:</h4>
            <img src={img} width="200" alt="선택된 이미지" />
            </div>
        )}
        
        <div>
            {/* newList를 반복 렌더링 */}
            {newList}
        </div>
            {/* 선택된 이미지가 있을 때만 렌더링 */}

    </div>
  );
}

export default IterationComponentQQ;
