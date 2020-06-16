import { observable, action } from "mobx";
import axios from "axios";

export class SigninUp {
  @observable kakaoId = "";
  @observable name = "";
  @observable JoinOrNot = "";
  @observable successOrNot = "";
  @observable emailNumber = "";
  @observable email = "";
  @observable password = "";
  @observable emailNumbercheck = "";
  @observable memberYear = "";
  @observable memberMon = "";
  @observable memberDay = "";
  //카카오는1 구글은2 네이버는3
  @observable snsNumber = 0;
  //카카오톡 로그인
  getKakaoLoginInfo() {
    console.log(this.kakaoId);
    return axios
      .get("https://hanstream.gabia.io/kakaoLogin", {
        //.get("http://localhost:8001/birth", {
        params: {
          id: this.kakaoId,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        if (response.data.length === 0) {
          this.JoinOrNot = true;
          console.log(this.JoinOrNot);
        } else {
          this.JoinOrNot = false;
          this.name = response.data[0].name;
          this.memberYear = response.data[0].year;
          this.memberMon = response.data[0].mon;
          this.memberDay = response.data[0].day;
          console.log(this.name);
          console.log(this.JoinOrNot);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async getKakaoLogin() {
    await this.getKakaoLoginInfo();
  }
  //카카오톡로그인한후 계정이 없는경우, 새로운 계정 만들기
  getKakaoJoinInfo(gender, year, mon, day, time, name) {
    console.log(this.kakaoId);
    return axios
      .get("https://hanstream.gabia.io/kakaoJoin", {
        params: {
          id: this.kakaoId,
          gender: gender,
          year: year,
          mon: mon,
          day: day,
          time: time,
          name: name,
        },
      })
      .then((response) => {
        console.log(response);
        this.successOrNot = true;
        console.log(this.successOrNot);
      })
      .catch((error) => {
        console.log(error);
        this.successOrNot = false;
        console.log(this.successOrNot);
      });
  }
  @action
  async getKakaoJoin(gender, year, mon, day, time, name) {
    console.log(gender);
    console.log(year);
    console.log(mon);
    console.log(day);
    console.log(time);
    console.log(name);
    this.name = name;
    await this.getKakaoJoinInfo(gender, year, mon, day, time, name);
  }

  getGoogleLoginInfo() {
    console.log(this.kakaoId);
    return axios
      .get("https://hanstream.gabia.io/googleLogin", {
        //.get("http://localhost:8001/birth", {
        params: {
          id: this.kakaoId,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        if (response.data.length === 0) {
          this.JoinOrNot = true;
          console.log(this.JoinOrNot);
        } else {
          this.JoinOrNot = false;
          this.name = response.data[0].name;
          this.memberYear = response.data[0].year;
          this.memberMon = response.data[0].mon;
          this.memberDay = response.data[0].day;
          console.log(this.name);
          console.log(this.JoinOrNot);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async getGoogleLogin() {
    await this.getGoogleLoginInfo();
  }

  getGoogleJoinInfo(gender, year, mon, day, time, name) {
    console.log(this.kakaoId);
    return axios
      .get("https://hanstream.gabia.io/googleJoin", {
        params: {
          id: this.kakaoId,
          gender: gender,
          year: year,
          mon: mon,
          day: day,
          time: time,
          name: name,
        },
      })
      .then((response) => {
        console.log(response);
        this.successOrNot = true;
        console.log(this.successOrNot);
      })
      .catch((error) => {
        console.log(error);
        this.successOrNot = false;
        console.log(this.successOrNot);
      });
  }
  @action
  async getGoogleJoin(gender, year, mon, day, time, name) {
    console.log(gender);
    console.log(year);
    console.log(mon);
    console.log(day);
    console.log(time);
    console.log(name);
    this.name = name;
    await this.getGoogleJoinInfo(gender, year, mon, day, time, name);
  }

  getNaverLoginInfo() {
    return axios
      .get("https://hanstream.gabia.io/naverLogin", {
        //.get("http://localhost:8001/birth", {
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async getNaverLogin() {
    await this.getNaverLoginInfo();
  }

  getEmailJoinInfo() {
    return axios
      .get("https://hanstream.gabia.io/emailSend?email=" + this.email, {})
      .then((response) => {
        console.log(response);
        this.emailNumber = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async getEmailJoin() {
    console.log(this.email);
    await this.getEmailJoinInfo();
  }

  getJoinInfo(gender, year, mon, day, time, name) {
    return axios
      .get("https://hanstream.gabia.io/join", {
        params: {
          id: this.email,
          // password: this.password,
        },
      })
      .then((response) => {
        console.log(response);
        // this.successOrNot = true;
        //   console.log(this.successOrNot);
        console.log(typeof response.data.length);
        if (response.data.length === 0) {
          console.log("join");
          this.getJoinInput(gender, year, mon, day, time, name);
        } else {
          alert("이미 가입되어있는 아이디입니다.");
        }
      })
      .catch((error) => {
        console.log(error);
        this.successOrNot = false;
        alert("이미 가입되어있는 아이디입니다.");
        console.log(this.successOrNot);
      });
  }
  @action
  async getJoin(gender, year, mon, day, time, name) {
    console.log(gender);
    console.log(year);
    console.log(mon);
    console.log(day);
    console.log(time);
    console.log(name);
    this.name = name;
    await this.getJoinInfo(gender, year, mon, day, time, name);
  }
  getJoinInputInfo(gender, year, mon, day, time, name) {
    console.log(this.kakaoId);
    const d = new Date();
    console.log();
    console.log(this.email);
    console.log(this.password);
    console.log(gender);
    console.log(year);
    console.log(mon);
    console.log(day);
    console.log(time);
    console.log(name);
    return axios
      .get("https://hanstream.gabia.io/joininput", {
        params: {
          id: this.email,
          password: this.password,
          gender: gender,
          year: year,
          mon: mon,
          day: day,
          time: time,
          name: name,
          subscriptionTime: d,
        },
      })
      .then((response) => {
        console.log(response);
        this.successOrNot = true;
        console.log(this.successOrNot);
      })
      .catch((error) => {
        console.log(error);
        this.successOrNot = false;
        console.log(this.successOrNot);
      });
  }
  @action
  async getJoinInput(gender, year, mon, day, time, name) {
    console.log(gender);
    console.log(year);
    console.log(mon);
    console.log(day);
    console.log(time);
    console.log(name);
    this.name = name;
    await this.getJoinInputInfo(gender, year, mon, day, time, name);
  }

  getBirthInputPersonInfo(gender, year, mon, day, time) {
    const d = new Date();
    console.log();
    console.log(this.email);
    console.log(gender);
    console.log(year);
    console.log(mon);
    console.log(day);
    console.log(time);
    return axios
      .get("https://hanstream.gabia.io/birthInputPerson", {
        params: {
          id: "",
          gender: gender,
          year: year,
          mon: mon,
          day: day,
          time: time,
          subscriptionTime: d,
        },
      })
      .then((response) => {
        console.log(response);
        this.successOrNot = true;
        console.log(this.successOrNot);
      })
      .catch((error) => {
        console.log(error);
        this.successOrNot = false;
        console.log(this.successOrNot);
      });
  }
  @action
  async getBirthInputPerson(gender, year, mon, day, time) {
    console.log(gender);
    console.log(year);
    console.log(mon);
    console.log(day);
    console.log(time);
    console.log(name);
    this.name = name;
    await this.getBirthInputPersonInfo(gender, year, mon, day, time);
  }

  getGeneralLoginInfo() {
    return axios
      .get("https://hanstream.gabia.io/join", {
        params: {
          id: this.email,
          password: this.password,
        },
      })
      .then((response) => {
        console.log(response);
        // this.successOrNot = true;
        //   console.log(this.successOrNot);
        if (response.data.length === 0) {
          alert("아이디 혹은 비밀번호가 잘못되었습니다.");
        } else {
          this.JoinOrNot = false;
          this.kakaoId = this.email;
          this.name = response.data[0].name;
          this.memberYear = response.data[0].year;
          this.memberMon = response.data[0].mon;
          this.memberDay = response.data[0].day;
        }
      })
      .catch((error) => {
        console.log(error);
        this.successOrNot = false;
        console.log(this.successOrNot);
      });
  }
  @action
  async getGeneralLogin() {
    await this.getGeneralLoginInfo();
  }
}
