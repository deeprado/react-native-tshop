//日志存放处
let logs = [];

//如果日志超过200条就去掉最早的那条日志
function add(log) {
  logs.push(log);
  if (logs.length > 200) {
    logs.shift();
  }
}

//返回
export function getLogs() {
  return logs;
}

//获取单个日志内容
export function getLog(index) {
  return logs[index];
}

//输出信息
export function log(...args) {
  add(args);
  if (__DEV__) {
    let info = args.concat();
    info[0] = '%c' + info[0];
    info.splice(1, 0, 'color: #2d8cf0');
    console.log(...info);
  }
}

//输出警告
export function logWarm(...args) {
  add(args);
  if (__DEV__) {
    let info = args.concat();
    info[0] = '%c' + info[0];
    info.splice(1, 0, 'color: #ff9900');
    console.log(...info);
  }
}
//输出错误
export function logErr(...args) {
  add(args);
  if (__DEV__) {
    let info = args.concat();
    info[0] = '%c' + info[0];
    info.splice(1, 0, 'color: #ed3f14');
    console.log(...info);
  }
}
