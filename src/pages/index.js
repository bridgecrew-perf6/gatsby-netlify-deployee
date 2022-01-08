import * as React from "react";
import Layout from "../Compunents/layout";
import ISO6 from "../images/ISO6.png"
export default function Home() {
  return (
    <div>
      <Layout>

        <img

          src={ISO6} alt="site banner"
          style={{

            // padding: '150px 590px',
          }}

        />
      </Layout>
    </div>
  )
}