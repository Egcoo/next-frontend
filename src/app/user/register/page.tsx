"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { userRegisterUsingPost } from "@/api/userController";
import { message } from "antd";
import { ProForm } from "@ant-design/pro-form/lib";
import { useRouter } from "next/navigation";
import './index.css';

/**
 *
 * 用户注册页面
 * @constructor
 */
const UserRegisterPage: React.FC = () => {
  const [form] = ProForm.useForm();
  const router = useRouter();

  /**
   * 提交
   */
  const doSubmit = async (values: API.UserRegisterRequest) => {
    try {
      const res = await userRegisterUsingPost(values);
      if (res.data) {
        message.success("注册成功，请登录");
        // 自动跳往登录页
        router.replace("/user/login");
        form.resetFields();
      }
    } catch (e) {
      const error = e as Error;
      message.error("注册失败，" + error.message);
    }
  };

  return (
    <div id="userRegisterPage">
      <LoginForm
        form={form}
        logo={
          <Image src="/assets/logo.png" alt="智能答题应用平台" height={44} width={44} />
        }
        title="智能答题应用平台 - 用户注册"
        subTitle="自我提升、面试刷题平台"
        submitter={{
          searchConfig: {
            submitText: "注册",
          },
        }}
        onFinish={doSubmit}
      >
        <ProFormText
          name="userAccount"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined />,
          }}
          placeholder={"请输入用户账号"}
          rules={[
            {
              required: true,
              message: "请输入用户账号!",
            },
          ]}
        />
        <ProFormText.Password
          name="userPassword"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined />,
          }}
          placeholder={"请输入密码"}
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        />
        <ProFormText.Password
          name="checkPassword"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined />,
          }}
          placeholder={"请输入确认密码"}
          rules={[
            {
              required: true,
              message: "请输入确认密码！",
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
            textAlign: "end",
          }}
        >
          已有账号？
          <Link href={"/user/login"}>点此登录</Link>
        </div>
      </LoginForm>
    </div>
  );
};

export default UserRegisterPage;
