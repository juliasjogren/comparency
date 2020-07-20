import { useRouter } from "next/router";

const Productlist = () => {
  const router = useRouter();
  const { search } = router.query;
  console.log("search: ", search);

  return <div>Productlist {search}</div>;
};

export default Productlist;
