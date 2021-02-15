import Button from "antd/lib/button/button";
import { memo } from "react";

const MyButton = memo(({ text, check }) => {
   return <Button type={check ? "primary" : "default"}>{text}</Button>;
});

export default MyButton;
