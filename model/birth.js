import { observable, action } from "mobx";
import axios from "axios";

export class birth {
  @observable birth_total = 0;
  @observable birth_year = "";
  @observable birth_month = "";
  @observable birth_time = "";
  @observable birth_day = "";
  @observable dbName = "";
  @observable originalNum = "";
  @observable title = "";
  @observable subtitle = "";
  @observable contents = "";
  @observable dbContentsName = "";
  @observable birth_SolarTrueFalse = true;
  @observable birth_LunarTrueFalse = false;
  @observable gender_femaleTrueFalse = true;
  @observable gender_maleTrueFalse = false;
  @observable gender = "female";
  @observable gubunCalender = 1;
  @observable birth_leap_month = false;
  @observable postNumber = 0;
  @observable name = "";
  @observable contentsList = [];
  @observable simpleTest = [];
  //error면 true 아니면 false
  @observable checkYearError = true;
  @observable checkMonError = true;
  @observable checkDayError = true;
  @observable postGoodOrNot = false;
  @observable goodCount = 0;

  getBirthResult(dbName) {
    return (
      axios
        //.get("https://sajubaju.com/birth", {
        .get("https://hanstream.gabia.io/birth", {
          params: {
            month: this.birth_month,
            day: this.birth_day,
            dbName: dbName,
          },
        })
        .then((response) => {
          console.log(response);
          console.log(this.birth_month);
          // props.history.replace("/");
          //console.log(props.history);
          this.originalNum = response.data[0].originlNum;
          this.title = response.data[0].title;
          this.subtitle = response.data[0].subtitle;
          this.contents = response.data[0].contents;
          this.dbName = dbName;
          console.log(response.data);
          // console.log(this.birth_result);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }
  @action
  async BirthResult(dbName) {
    await this.getBirthResult(dbName);
  }
  getContentsSearch() {
    return axios
      .get("https://hanstream.gabia.io/searchDB", {
        params: {
          num: this.postNumber,
        },
      })
      .then((response) => {
        console.log(response);
        // props.history.replace("/");
        //console.log(props.history);
        //  console.log();
        this.dbName = response.data[0].name;
        this.dbContentsName = response.data[0].title;
        console.log(response.data);
        console.log(this.dbContentsName);
        // this.BirthResult(this.dbName);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async ContentsSearch() {
    await this.getContentsSearch();
  }
  getSimpleResult() {
    return (
      axios
        //.get("https://sajubaju.com/birth", {
        .get("https://hanstream.gabia.io/birth", {
          params: {
            month: this.birth_month,
            day: this.birth_day,
            dbName: this.dbName,
          },
        })
        .then((response) => {
          console.log(response);
          // props.history.replace("/");
          //console.log(props.history);
          this.originalNum = response.data[0].originlNum;
          this.title = response.data[0].title;
          this.subtitle = response.data[0].subtitle;
          this.contents = response.data[0].contents;
          //this.dbName = dbName;
          console.log(response.data);
          // console.log(this.birth_result);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }
  @action
  async simpleResult() {
    await this.getSimpleResult();
  }
  getSimpleContentsSearch() {
    return axios
      .get("https://hanstream.gabia.io/searchSimpleList", {
        params: {
          num: this.postNumber,
        },
      })
      .then((response) => {
        console.log(response);
        // props.history.replace("/");
        //console.log(props.history);
        this.dbName = response.data[0].name;
        this.dbContentsName = response.data[0].title;
        console.log(response.data);
        console.log(this.dbName);
        //this.getSimpleResult(this.dbName);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async simpleContentsSearch() {
    await this.getSimpleContentsSearch();
  }

  getContentsTitle() {
    return (
      axios
        //.get("https://sajubaju.com/birth", {
        .get("https://hanstream.gabia.io/contentsList", {})
        .then((response) => {
          console.log(response);
          for (let i = 0; i < response.data.length; i++) {
            let temp = {
              num: response.data[i].num,
              title: response.data[i].title,
              name: response.data[i].name,
            };
            this.contentsList.push(temp);
          }
          console.log(this.contentsList);
          // props.history.replace("/");
          //console.log(props.history);
          //  this.dbName = response.data[0].name;
          //console.log(response.data);
          // console.log(this.dbName);
        })
        .catch((error) => {
          console.log(error);
          console.log("error가 났습니다 페이지리로딩을 해주세요");
        })
    );
  }
  @action
  async ContentsTitle() {
    await this.getContentsTitle();
  }
  getContentSearch(num) {
    return axios
      .get("https://hanstream.gabia.io/contentSearch", {
        params: {
          num: num,
        },
      })
      .then((response) => {
        console.log(response);
        this.postNumber = response.data.num;
        console.log(this.postNumber);
        // props.history.replace("/");
        //console.log(props.history);
        //  this.dbName = response.data[0].name;
        //console.log(response.data);
        // console.log(this.dbName);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async contentSearch(num) {
    await this.getContentSearch(num);
  }
}
