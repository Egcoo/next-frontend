"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { userLoginUsingPost } from "@/api/userController";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/stores";
import { setLoginUser } from "@/stores/loginUser";
import { ProForm } from "@ant-design/pro-form/lib";
import { useRouter } from "next/navigation";
import './index.css';
import LoginUserVO = API.LoginUserVO;

/**
 *
 * 用户登录页面
 * @constructor
 */
const UserLoginPage: React.FC = () => {
  const [form] = ProForm.useForm();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  /**
   * 提交
   */
  const doSubmit = async (values: API.UserLoginRequest) => {
    try {
      const res = await userLoginUsingPost(values);
      if (res.data) {
        message.success("登录成功");
        // 保存用户登录状态
        dispatch(setLoginUser(res.data as LoginUserVO));
        router.replace("/");
        form.resetFields();
      }
    } catch (e) {
      const error = e as Error;
      message.error("登录失败，" + error.message);
    }
  };

  /*
  * const doSubmit = async (values: API.UserLoginRequest) => {
    try {
      const res = await userLoginUsingPost(values);
      if (res.data) {
        message.success("登录成功");
        // 保存用户登录状态
        dispatch(setLoginUser(res.data));
        router.replace("/");
        form.resetFields();
      }
    } catch (e) {
      message.error("登录失败，" + e.message);
    }
  };*/

  // 备选的背景颜色：#f0f2f5
  return (
    <div id="userLoginPage" style={{backgroundColor: '#f5f5f5'}}>
      <LoginForm
        form={form}
        logo={
          <Image src="/assets/logo3.png" alt="智能答题应用平台" height={44} width={44} />
        }
        title="智能答题应用平台 - 用户登录"
        subTitle="自我提升、面试刷题平台"
        onFinish={doSubmit}
      >
        <ProFormText
          name="userAccount"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined />,
          }}
          placeholder={"账号:"}
          rules={[
            {
              required: true,
              message: "用户账号不可为空",
            },
          ]}
        />
        <ProFormText.Password
          name="userPassword"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined />,
          }}
          placeholder={"密码:"}
          rules={[
            {
              required: true,
              message: "密码不可为空",
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
            textAlign: "end",
          }}
        >
          没有账号？
          <Link href={"/user/register"}>点此注册</Link>
        </div>
      </LoginForm>
    </div>
  );
};

export default UserLoginPage;
