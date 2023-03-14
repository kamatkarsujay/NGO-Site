import { useState } from "react";
import { Form, Input, Button, Select, Typography } from "antd";
import axios from "axios";
import { BASE_URI } from "../utils/helper";

const ChildForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const addChild = async () => {
    try {
      const res = await axios.post(
        `${BASE_URI}/addChild`,
        {
          name,
          age,
          gender,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data) {
        alert("Child added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:flex">
      <Form labelCol={{ span: 4 }} className="w-full mt-12 pr-8 max-w-2xl">
        <Typography.Title className="lg:ml-80 ml-24">
          Add Child
        </Typography.Title>
        <Form.Item name="fullName" label="Full Name">
          <Input
            placeholder="Enter child's name"
            className="rounded-md border-1 border-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <Input
            type="number"
            placeholder="Enter child's age"
            className="rounded-md border-1 border-gray-300"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select
            placeholder="Select child's gender"
            onChange={(value) => setGender(value)}
          >
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            className="lg:ml-96 ml-36 bg-purple-500 rounded-xl text-white font-bold"
            type="primary"
            htmlType="submit"
            onClick={addChild}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="hidden relative w-1/2 lg:flex items-center justify-center">
        <img
          src={require("../assets/img/c873eb3d-af24-43c0-befe-6cae7c55520a.avif")}
          alt="Child Labour"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};
export default ChildForm;
