import { useContext } from "react";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { GlobalInfo } from "../context/provider";
type props = {
  children: any;
};
const Apolo = ({ children }: props) => {
//   const { userDetails } = useContext(GlobalInfo);
  const client = new ApolloClient({
    link: createUploadLink({
    //   uri: `https://sharedservices.co.in/api/graphql`,
    uri:`http://192.168.1.5:3000/api/graphql`,

    }),
    cache: new InMemoryCache(),
    // headers: {
    //   Authorization: userDetails?.token ? `Bearer ${userDetails?.token}` : "",
    // },
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default Apolo;
