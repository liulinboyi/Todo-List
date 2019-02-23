import AV from "leancloud-storage";

var APP_ID = "yf5B2o3sR3L2IVJStNOGE8CI-gzGzoHsz";
var APP_KEY = "0CNlpdYYiITG4csI3v1wyIHC";

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV;

export function signUp(username, password, successFn, errorFn) {
  // 新建 AVUser 对象实例
  var user = new AV.User();
  // 设置用户名
  user.setUsername(username);
  // 设置密码
  user.setPassword(password);
  // 设置邮箱
  user.signUp().then(
    function(loginedUser) {
      let user = getUserFromAVUser(loginedUser);
      successFn.call(null, user);
    },
    function(error) {
      errorFn.call(null, error);
    }
  );

  return undefined;
}



export function ownUser() {
  let user = AV.User.current();
  console.log(user);
  if (user) {
    return getUserFromAVUser(user)
  } else {
    return {};
  }
}

function getUserFromAVUser(AVUser) {
  return {
    id: AVUser.id,
    ...AVUser.attributes
  };
}