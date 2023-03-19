const Search = ({ allMethods, setPaymentMethods }) => {
  const search = (arr, text) => {
    return arr.filter((el) => {
      return el.label.toLowerCase().includes(text.toLowerCase());
    });
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="input input-bordered input-sm max-w-xs m-auto"
      onChange={(e) => {
        setPaymentMethods(search(allMethods, e.target.value));
      }}
    />
  );
};

export default Search;
