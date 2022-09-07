import routes from "./router";
import { useRoutes } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { handelFilterElement, handelEnd } from "@/utils/routersFilter";
import { deepCopy } from "@/utils/devUtils";

function App() {
  const [rout, setrout] = useState(routes);
  // Hooks仍然无法替代Redux的作用，特别是在状态共享方面。
  // 庆幸的是 react-redux 7.1之后也可以使用useSelector、useDispatch
  // 等HooksApi替代connect，减少模板代码
  const { routs } = useSelector(
    (state: any) => ({ routs: state.login.routes }),
    shallowEqual
  );

  const element = useRoutes(rout);
  // 监听路由表改变重新渲染
  useEffect(() => {
    // deepCopy 深拷贝state数据 不能影响到store里的数据！
    // handelFilterElement 映射对应组件
    // handelEnd 将路由表嵌入默认路由表得到完整路由表
    const end = handelEnd(handelFilterElement(deepCopy(routs)));
    setrout(end);
  }, [routs]);

  return <div className="height-all">{element}</div>;
}

export default App;
