import {observable, extendObservable, action, runInAction} from 'mobx';

const themeData = {
  light: {},
};

class appStore {
  @observable counter = 0;
  @observable themeType = 'light';
  @observable theme = themeData['light'];
  @action changeTheme = themeType => {
    this.themeType = themeType;
    this.theme = themeData[themeType];
  };
}
export default new appStore();
