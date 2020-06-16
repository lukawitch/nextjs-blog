import { observable, action } from "mobx";
import axios from "axios";

export class admin {
  @observable dbTable = "";
  @observable dbTableData = "";
  @observable dbName = "";
  @observable subtitle = "";
  @observable updateSubtitle = {};
  @observable updateContents = {};
  @observable num = 0;
  @observable tableLength = 0;

  @action
  getTableDataInfo() {
    console.log();
    return axios
      .get("https://hanstream.gabia.io/getTableData", {
        params: {
          dbName: "contents_" + this.dbName,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.dbTableData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async getTableData() {
    await this.getTableDataInfo();
  }

  @action
  searchTableInfo() {
    console.log();
    return axios
      .get("https://hanstream.gabia.io/searchTable", {
        params: {
          dbName: "contents_" + this.dbName,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.length === 0) {
          alert("없는테이블입니다 새로 추가합니다.");
          this.createTable();
        } else {
          alert("있는테이블입니다 기존테이블에 데이터를 추가합니다.");
          this.getTableLength();
        }
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  }
  @action
  async searchTable() {
    await this.searchTableInfo();
  }
  @action
  createTableInfo() {
    console.log();
    return axios
      .get("https://hanstream.gabia.io/adminCreateFile", {
        params: {
          dbName: this.dbName,
        },
      })
      .then((response) => {
        alert("추가완료했습니다.");
        console.log(response.data);
        this.insertTable();
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  }
  @action
  async createTable() {
    await this.createTableInfo();
  }

  @action
  deleteTableDataInfo(num) {
    console.log();
    return axios
      .get("https://hanstream.gabia.io/DeleteTableData", {
        params: {
          dbName: this.dbName,
          num: num,
        },
      })
      .then((response) => {
        alert("추가완료했습니다.");
        console.log(response.data);
        this.insertTable();
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  }
  @action
  async deleteTableData(num) {
    await this.deleteTableDataInfo(num);
  }

  @action
  updateTableInfo(num) {
    console.log();
    return axios
      .get("https://hanstream.gabia.io/updateTableData", {
        params: {
          num: num,
          subtitle: this.updateSubtitle,
          contents: this.updateContents,
          dbName: this.dbName,
        },
      })
      .then((response) => {
        alert("수정완료했습니다.");
        console.log(response.data);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  }
  @action
  async updateTable(num) {
    await this.updateTableInfo(num);
  }

  @action
  insertTableInfo() {
    return axios
      .get("https://hanstream.gabia.io/insertDBValue", {
        params: {
          num: this.num,
          name: "contents_" + this.dbName,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.getTableLength();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async insertTable() {
    await this.insertTableInfo();
  }

  @action
  getTableLengthInfo() {
    return axios
      .get("https://hanstream.gabia.io/getTableLength", {
        params: {
          dbName: "contents_" + this.dbName,
        },
      })
      .then((response) => {
        console.log(response.data[0]);
        if (response.data === null) {
          this.tableLength = 0;
        } else {
          this.tableLength = response.data[0].number;
        }
        alert(this.tableLength);
        this.insertValue();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async getTableLength() {
    await this.getTableLengthInfo();
  }

  @action
  insertValueInfo() {
    console.log(this.tableLength + 1);
    return axios
      .get("https://hanstream.gabia.io/insertValue", {
        params: {
          num: this.tableLength + 1,
          dbName: "contents_" + this.dbName,
          subtitle: this.subtitle,
          contents: this.contents,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async insertValue() {
    await this.insertValueInfo();
  }

  @action
  getTableInfo() {
    return axios
      .get("https://hanstream.gabia.io/adminDBTable", {})
      .then((response) => {
        console.log(response.data);
        this.dbTable = response.data;
        for (var i = 0; i < response.data.length; i++) {
          let a = response.data[i].name.split("contents_");
          this.dbTable[i].name = a[1];
        }
        // this.dbTable = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @action
  async getTable() {
    await this.getTableInfo();
  }
}
