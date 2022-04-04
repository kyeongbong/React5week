const getCookie = (name) => {

  let value = "; " + document.cookie;

  let parts = value.split(`; ${name}=`);
  // aa=xx; user_id=aaa;  =>  [aa= xx / aaa; abbb=sssss;]

  if(parts.length === 2){

    return parts.pop().split(";").shift();
    // parts.pop() = 배열에서 마지막이 사라짐 그후 pop 안에 반환됨
    // shift는 앞에있는걸 때서 줌 pop이랑 반대
  }
};

const setCookie = (name, value, exp = 5) => {
  // exp값을 받아오지 않아도 기본값을 지정해줘서 exp값을 쓸수있음

  let date = new Date();
  date.setTime(date.getTime() + exp*24*60*60*1000);
  // exp * 24시간 * 60분 * 60초 * 1000밀리세컨드(1초)

  document.cookie = `${name}=${value}; expires=${date.toUTCstring()}`;
};

const deleteCookie = (name) => {
  
  let date = new Date("2020-01-01").toUTCString();

  console.log(date);

  document.cookie = name+"=; expires="+date;

};

export {getCookie, setCookie, deleteCookie};


