import { useState } from 'react';
import { data } from './fakeData';
import './App.sass';

function App() {
  const [checkAry, setCheckAry] = useState(()=>{
    let ary = [];
    data.forEach(()=>{
      ary.push(false);
    });
    return ary;
  });

  function handleDisplay(index){
    console.log(index)
    let ary = checkAry.map(()=>(false));
    ary[index] = !checkAry[index];
    if(ary[index]){
      setTimeout(()=>{
        let element = document.querySelector("#card"+index)
        element.scrollIntoView({behavior: "smooth", block: "start" })
      }, 250);
    }
    setCheckAry(ary);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header"></div>
        {data.map((item,index)=>(
          <div key={"card"+index} id={"card"+index} className={"card card"+index}>
            <div className="card-header">
              <span className="text">{item.title}</span>
              <div onClick={(e)=>{handleDisplay(index)}} className="btn">
                {(checkAry[index])?"隱藏內容":"顯示內容"}
              </div>
            </div>
            <div className={(checkAry[index])?"card-body card-body-show":"card-body"}>
              {item.body.map((body,index2)=>(
                  <p key={`p-${index}-${index2}`}>{body}</p>
              ))}
            </div>
            <div className="card-footer">{item.footer}</div>
          </div>
        ))}


        <div className="banners">
          <div className="banner banner1"></div>
          <div className="banner banner2"></div>
          <div className="banner banner3"></div>
          <div className="banner banner4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
