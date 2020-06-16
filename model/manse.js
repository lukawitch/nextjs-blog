import { observable, action } from "mobx";

export class manse {
  @observable info = {};
  @observable pillar = {};
  @observable jijanggan = {};
  @observable god10 = {};
  @observable unse = {};
  @observable daeun = {};
  @observable wolryoung = "";
  @observable saryoung = "";
  @observable julgi = "";
  @observable tmJulgi = "";
  @observable gyouk_disp = "";
  @action
  increase = () => {
    this.number++;
  };

  @action
  decrease = () => {
    this.number--;
  };
}
