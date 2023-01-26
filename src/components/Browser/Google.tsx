export const Google = () => {
  return (
    <>
      <div className="mt-2 flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl">Google</h1>
        <input
          type="text"
          placeholder="Search"
          className="w-72 rounded border px-3 outline-teal-600"
        />
        <button className="rounded-md border bg-sky-100 px-4">Search</button>
      </div>
    </>
  );
};
