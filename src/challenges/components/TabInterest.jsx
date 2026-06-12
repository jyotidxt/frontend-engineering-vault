export default function TabInterest({ data, setData }) {
  const { interests } = data;
  
  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name)
    }));
  };

  return (
    <div>

      <div>
        <label htmlFor="">
          <input type="checkbox"
            name="coding"
            onChange={handleDataChange}
            checked={interests.includes("coding")} />
          Coding
        </label>
      </div>

      <div>
        <label htmlFor="">
          <input type="checkbox" name="music"
            onChange={handleDataChange}
            checked={interests.includes("music")} />
          Music
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" name="JavaScript"
            onChange={handleDataChange}
            checked={interests.includes("JavaScript")}
          />
          JavaScript
        </label>
      </div>

    </div>
  )
}