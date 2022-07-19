import React, {ReactNode} from "react";

import Header from "./Header";

interface PageProps {
  children: ReactNode
}

export default function Page(props: PageProps){
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  );
}
