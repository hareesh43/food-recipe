import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NOtFound() {
  const route = useRouter();
  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 4000);
  }, []);
  return (
    <div>
      <div className="not-found">
        <h1>404</h1>
        <h2>Opps</h2>
        <p>
          page not found redirecting to <Link href="/">Homepage</Link> for more
          mermites...
        </p>
      </div>

      <style jsx>
        {`
          .not-found {
            margin: 20px 0px;
            transform: rotateZ(-1deg);
            background:#fff;
            padding:20px
          }
          h1{
              color:red;
          }
        `}
      </style>
    </div>
  );
}
