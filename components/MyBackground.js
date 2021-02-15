import { memo } from "react";

const MyBackground = memo(({ children }) => {
   return (
      <div style={{ padding: "1rem", background: "cornsilk" }}>{children}</div>
   );
});

export default MyBackground;
